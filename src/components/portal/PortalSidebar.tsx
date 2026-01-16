import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  Cpu,
  ShoppingBag,
  Sparkles,
  RotateCcw,
  User,
  LogOut,
  Building2,
  Menu,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import roomonitorLogo from "@/assets/roomonitor-logo.png";

const mainNavItems = [
  { title: "Dashboard", url: "/portal", icon: LayoutDashboard },
  { title: "My Subscription", url: "/portal/subscription", icon: CreditCard },
  { title: "Devices", url: "/portal/devices", icon: Cpu },
  { title: "Orders & History", url: "/portal/orders", icon: ShoppingBag },
];

const serviceNavItems = [
  { title: "Add-ons & Services", url: "/portal/services", icon: Sparkles },
  { title: "Returns & Replacements", url: "/portal/returns", icon: RotateCcw },
];

const accountNavItems = [
  { title: "Profile & Security", url: "/portal/profile", icon: User },
];

export function PortalSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/portal") {
      return location.pathname === "/portal";
    }
    return location.pathname.startsWith(path);
  };

  const NavGroup = ({
    label,
    items,
  }: {
    label: string;
    items: typeof mainNavItems;
  }) => (
    <SidebarGroup>
      {!isCollapsed && (
        <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.url)}
                tooltip={item.title}
              >
                <Link to={item.url}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={roomonitorLogo}
            alt="Roomonitor"
            className={`transition-all ${isCollapsed ? "h-8 w-8 object-contain" : "h-8"}`}
          />
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <NavGroup label="Overview" items={mainNavItems} />
        <Separator className="my-2" />
        <NavGroup label="Services" items={serviceNavItems} />
        <Separator className="my-2" />
        <NavGroup label="Account" items={accountNavItems} />
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <Link
                to="/"
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {!isCollapsed && (
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <div className="text-xs">
                <p className="font-medium text-foreground">Acme Properties</p>
                <p className="text-muted-foreground">Pro Plan</p>
              </div>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
