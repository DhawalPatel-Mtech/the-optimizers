import { AArrowUp, ArrowDown01, ArrowUp, ArrowUp01, ArrowUp01Icon, ArrowUp10, ArrowUpDown, Calendar, ChevronDown, Home, Inbox, LayoutDashboard, LayoutDashboardIcon, LucideSettings, Search, Settings, Settings2 } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar.jsx";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: AArrowUp,
  },
  // {
  //   title: "Income",
  //   url: "/",
  //   icon: Calendar,
  // },
  // {
  //   title: "Expense",
  //   url: "/", 
  //   icon: Search,
  // },
  {
    title: "Categories",
    url: "/categories",
    icon: Settings2,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Expense Tracker</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem key={'Dashboard'}>
                  <SidebarMenuButton asChild>
                    <a href={'/'}>
                        <LayoutDashboard className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      <span>{'Dashboard'}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      Transactions
                      <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent> 
                      <SidebarMenu>
                        <SidebarMenuItem key={'All'}>
                          <SidebarMenuButton asChild>
                            <a href={'/all'}>
                              <ArrowUpDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                              <span>All</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem key={'Income'}>
                          <SidebarMenuButton asChild>
                            <a href={'/income'}>
                              <ArrowUp01 className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                              <span>Income</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem key={'Expense'}>
                          <SidebarMenuButton asChild>
                            <a href={'/expense'}>
                                <ArrowDown01 className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                              <span>Expense</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
              <SidebarMenuItem key={'Categories'}>
                  <SidebarMenuButton asChild>
                    <a href={'/'} style={{ alignSelf: "left"}}>
                      {/* <item.icon /> */}
                      <LucideSettings className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      <span>{'Categories'}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
