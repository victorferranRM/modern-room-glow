import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Building2,
  Cpu,
  CreditCard,
  ShoppingCart,
  ArrowUpRight,
  Headphones,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useDashboardStats } from "@/hooks/usePortalData";

export default function Dashboard() {
  const { profile, company } = useAuth();
  const { stats, loading } = useDashboardStats();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-EU", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getWelcomeMessage = () => {
    if (profile?.first_name) {
      return `Welcome back, ${profile.first_name}!`;
    }
    return "Welcome back!";
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-72" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-1" />
                <Skeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{getWelcomeMessage()}</h1>
        <p className="text-muted-foreground">
          Here's an overview of your Roomonitor account.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Subscription
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                {stats.subscription?.plan_name || "Basic"}
              </span>
              <Badge variant="secondary" className="bg-success/10 text-success">
                {stats.subscription?.status === "active" ? "Active" : "Inactive"}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Next billing: {formatDate(stats.subscription?.next_billing_date || null)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Properties
            </CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{stats.propertiesCount}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Active properties
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Devices
            </CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{stats.activeDevices}</span>
              <span className="text-sm text-muted-foreground">
                / {stats.totalDevices}
              </span>
            </div>
            {stats.offlineDevices > 0 && (
              <p className="text-xs text-warning mt-1 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {stats.offlineDevices} device(s) offline
              </p>
            )}
            {stats.offlineDevices === 0 && stats.totalDevices > 0 && (
              <p className="text-xs text-muted-foreground mt-1">
                All devices online
              </p>
            )}
            {stats.totalDevices === 0 && (
              <p className="text-xs text-muted-foreground mt-1">
                No devices yet
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Cost
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(stats.subscription?.monthly_cost || 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Billed {stats.subscription?.billing_frequency || "monthly"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="group hover:shadow-soft transition-shadow cursor-pointer">
          <Link to="/portal/devices">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="mt-4">Buy Additional Devices</CardTitle>
              <CardDescription>
                Expand your monitoring coverage with new devices for your properties.
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="group hover:shadow-soft transition-shadow cursor-pointer">
          <Link to="/portal/services">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="mt-4">Upgrade / Add Services</CardTitle>
              <CardDescription>
                Enhance your plan with Alarm Assistant or Guest Services add-ons.
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="group hover:shadow-soft transition-shadow cursor-pointer">
          <Link to="/portal/returns">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="mt-4">Request Support</CardTitle>
              <CardDescription>
                Need help? Contact our support team or request device replacements.
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>
      </div>

      {/* Recent Activity & Device Status */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Device Status Overview</CardTitle>
            <CardDescription>Quick view of your device health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-success" />
                <span className="text-sm font-medium">Online & Healthy</span>
              </div>
              <span className="text-sm font-semibold">{stats.activeDevices}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-warning" />
                <span className="text-sm font-medium">Needs Attention</span>
              </div>
              <span className="text-sm font-semibold">{stats.attentionDevices}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive" />
                <span className="text-sm font-medium">Offline</span>
              </div>
              <span className="text-sm font-semibold">{stats.offlineDevices}</span>
            </div>
            <Button variant="outline" className="w-full mt-2" asChild>
              <Link to="/portal/devices">View All Devices</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Your company and billing details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Company</span>
              <span className="text-sm font-medium">{company?.name || "My Company"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Current Plan</span>
              <Badge>{stats.subscription?.plan_name || "Basic"}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Next Invoice</span>
              <span className="text-sm font-medium">
                {formatDate(stats.subscription?.next_billing_date || null)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Monthly Amount</span>
              <span className="text-sm font-medium">
                {formatCurrency(stats.subscription?.monthly_cost || 0)}
              </span>
            </div>
            <Button variant="outline" className="w-full mt-2" asChild>
              <Link to="/portal/subscription">Manage Subscription</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
