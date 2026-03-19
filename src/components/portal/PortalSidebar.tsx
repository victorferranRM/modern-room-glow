import { useLocation, Link, useNavigate } from "react-router-dom";
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
  ExternalLink,
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
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/usePortalData";
import roomonitorLogo from "@/assets/roomonitor-logo.webp";

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
  const navigate = useNavigate();
  const { state } = useSidebar();
  const { company, signOut } = useAuth();
  const { subscription } = useSubscription();
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/portal") {
      return location.pathname === "/portal";
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
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
        {/* Highlighted Manager Link */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Manager Portal"
                  className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 font-medium"
                >
                  <a 
                    href="https://manager.roomonitor.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Building2 className="h-4 w-4" />
                    <span>Manager Portal</span>
                    <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="my-2" />
        
        <NavGroup label="Overview" items={mainNavItems} />
        <Separator className="my-2" />
        <NavGroup label="Services" items={serviceNavItems} />
        <Separator className="my-2" />
        <NavGroup label="Account" items={accountNavItems} />
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              tooltip="Logout"
              className="text-muted-foreground hover:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {!isCollapsed && (
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <div className="text-xs">
                <p className="font-medium text-foreground">
                  {company?.name || "My Company"}
                </p>
                <p className="text-muted-foreground">
                  {subscription?.plan_name || "Noise Alarm"} Plan
                </p>
              </div>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
