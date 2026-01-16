import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Cpu,
  CreditCard,
  Calendar,
  ShoppingCart,
  ArrowUpRight,
  Headphones,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

// Mock data - will be connected to backend later
const dashboardData = {
  company: "Acme Properties Ltd.",
  plan: "Pro",
  planStatus: "active",
  properties: 8,
  maxProperties: 10,
  totalDevices: 24,
  activeDevices: 22,
  offlineDevices: 2,
  nextBillingDate: "February 15, 2026",
  monthlyAmount: "€239.20",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back!</h1>
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
              <span className="text-2xl font-bold">{dashboardData.plan}</span>
              <Badge variant="secondary" className="bg-success/10 text-success">
                Active
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Next billing: {dashboardData.nextBillingDate}
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
              <span className="text-2xl font-bold">{dashboardData.properties}</span>
              <span className="text-sm text-muted-foreground">
                / {dashboardData.maxProperties}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {dashboardData.maxProperties - dashboardData.properties} slots available
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
              <span className="text-2xl font-bold">{dashboardData.activeDevices}</span>
              <span className="text-sm text-muted-foreground">
                / {dashboardData.totalDevices}
              </span>
            </div>
            {dashboardData.offlineDevices > 0 && (
              <p className="text-xs text-warning mt-1 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {dashboardData.offlineDevices} device(s) offline
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
            <div className="text-2xl font-bold">{dashboardData.monthlyAmount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Billed monthly
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
              <span className="text-sm font-semibold">{dashboardData.activeDevices}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-warning" />
                <span className="text-sm font-medium">Needs Attention</span>
              </div>
              <span className="text-sm font-semibold">0</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive" />
                <span className="text-sm font-medium">Offline</span>
              </div>
              <span className="text-sm font-semibold">{dashboardData.offlineDevices}</span>
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
              <span className="text-sm font-medium">{dashboardData.company}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Current Plan</span>
              <Badge>{dashboardData.plan}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Next Invoice</span>
              <span className="text-sm font-medium">{dashboardData.nextBillingDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Monthly Amount</span>
              <span className="text-sm font-medium">{dashboardData.monthlyAmount}</span>
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
