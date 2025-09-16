"use client";

import {
  Home,
  Menu,
  ShoppingBag,
  ChefHat,
  BarChart3,
  Settings,
  HelpCircle,
  Utensils,
  LogOut,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Meu Cardápio", url: "/dashboard/mymenu", icon: Menu },
  { title: "Pedidos / Mesas", url: "/dashboard/orders", icon: ShoppingBag },
  { title: "Cozinha (KDS)", url: "/dashboard/kitchen", icon: ChefHat },
  { title: "Relatórios", url: "/dashboard/reports", icon: BarChart3 },
  { title: "Configurações", url: "/dashboard/settings", icon: Settings },
  { title: "Ajuda", url: "/dashboard/help", icon: HelpCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const location = usePathname();
  console.log("location: " + location);
  const active = (path: string) =>
    location === path || location.startsWith(path + "/");

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "text-foreground hover:bg-accent hover:text-accent-foreground";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-border">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Utensils className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-bold text-foreground">CardápioFácil</h2>
              <p className="text-xs text-muted-foreground">Restaurante Demo</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={
                      active(item.url)
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }
                  >
                    <Link href={item.url}>
                      <item.icon className="mr-2 h-4 w-4 text-current" />
                      {!collapsed && (
                        <span className="text-current">{item.title}</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-2">
        <Button
          variant="ghost"
          size={collapsed ? "icon" : "sm"}
          className="w-full justify-start text-muted-foreground hover:text-foreground"
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span className="ml-2">Sair</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
