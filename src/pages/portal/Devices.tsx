import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Cpu,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Package,
  RotateCcw,
  Headphones,
  ShoppingCart,
  AlertCircle,
  CheckCircle2,
  WifiOff,
  Calendar,
  Building2,
  Plus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const devices = [
  {
    id: "RM-001-ABC",
    name: "Living Room Monitor",
    property: "Apartment 12A - Barcelona",
    status: "active",
    installedDate: "2025-06-15",
    lastSeen: "2 minutes ago",
  },
  {
    id: "RM-002-DEF",
    name: "Bedroom Monitor",
    property: "Apartment 12A - Barcelona",
    status: "active",
    installedDate: "2025-06-15",
    lastSeen: "5 minutes ago",
  },
  {
    id: "RM-003-GHI",
    name: "Main Area Sensor",
    property: "Villa Costa - Mallorca",
    status: "active",
    installedDate: "2025-08-20",
    lastSeen: "1 minute ago",
  },
  {
    id: "RM-004-JKL",
    name: "Entrance Monitor",
    property: "Studio Downtown - Madrid",
    status: "offline",
    installedDate: "2025-09-10",
    lastSeen: "3 hours ago",
  },
  {
    id: "RM-005-MNO",
    name: "Living Space",
    property: "Penthouse Suite - Valencia",
    status: "attention",
    installedDate: "2025-07-22",
    lastSeen: "30 minutes ago",
  },
  {
    id: "RM-006-PQR",
    name: "Common Area",
    property: "Beach House - Sitges",
    status: "active",
    installedDate: "2025-10-05",
    lastSeen: "Just now",
  },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "active":
      return {
        label: "Active",
        icon: CheckCircle2,
        className: "bg-success/10 text-success",
        dotColor: "bg-success",
      };
    case "offline":
      return {
        label: "Offline",
        icon: WifiOff,
        className: "bg-destructive/10 text-destructive",
        dotColor: "bg-destructive",
      };
    case "attention":
      return {
        label: "Needs Attention",
        icon: AlertCircle,
        className: "bg-warning/10 text-warning",
        dotColor: "bg-warning",
      };
    default:
      return {
        label: "Unknown",
        icon: AlertCircle,
        className: "bg-muted text-muted-foreground",
        dotColor: "bg-muted-foreground",
      };
  }
};

export default function Devices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredDevices = devices.filter((device) => {
    const matchesSearch =
      device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.property.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || device.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: devices.length,
    active: devices.filter((d) => d.status === "active").length,
    offline: devices.filter((d) => d.status === "offline").length,
    attention: devices.filter((d) => d.status === "attention").length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Devices</h1>
          <p className="text-muted-foreground">
            Manage and monitor all your Roomonitor devices.
          </p>
        </div>
        <Button asChild>
          <a href="/checkout" target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Buy Devices
          </a>
        </Button>
      </div>

      {/* Status Summary */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {[
          { key: "all", label: "Total Devices", count: statusCounts.all },
          { key: "active", label: "Active", count: statusCounts.active },
          { key: "offline", label: "Offline", count: statusCounts.offline },
          { key: "attention", label: "Needs Attention", count: statusCounts.attention },
        ].map((stat) => (
          <Card
            key={stat.key}
            className={`cursor-pointer transition-all ${statusFilter === stat.key ? "border-primary shadow-soft" : "hover:border-primary/50"}`}
            onClick={() => setStatusFilter(stat.key)}
          >
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search devices by name, ID, or property..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
            <SelectItem value="attention">Needs Attention</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Devices List */}
      {filteredDevices.length > 0 ? (
        <div className="space-y-3">
          {filteredDevices.map((device) => {
            const statusConfig = getStatusConfig(device.status);
            const StatusIcon = statusConfig.icon;

            return (
              <Card key={device.id} className="hover:shadow-soft transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Device Info */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                        <Cpu className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold">{device.name}</h3>
                          <Badge variant="outline" className="text-xs font-mono">
                            {device.id}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <Building2 className="h-3 w-3" />
                          <span className="truncate">{device.property}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status & Meta */}
                    <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                      <div className="flex items-center gap-2">
                        <Badge className={statusConfig.className}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {statusConfig.label}
                        </Badge>
                      </div>

                      <div className="text-sm text-muted-foreground hidden md:block">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Installed: {new Date(device.installedDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Last seen: {device.lastSeen}
                      </div>

                      {/* Actions Dropdown */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Package className="h-4 w-4 mr-2" />
                            Order Replacement Parts
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Request Replacement / RMA
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Headphones className="h-4 w-4 mr-2" />
                            Contact Support
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Cpu className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">No devices found</h3>
            <p className="text-muted-foreground text-center mt-1 max-w-sm">
              {searchQuery || statusFilter !== "all"
                ? "Try adjusting your search or filters."
                : "You don't have any devices yet. Purchase devices to get started."}
            </p>
            {!searchQuery && statusFilter === "all" && (
              <Button className="mt-4" asChild>
                <a href="/checkout" target="_blank" rel="noopener noreferrer">
                  <Plus className="h-4 w-4 mr-2" />
                  Buy Your First Device
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
