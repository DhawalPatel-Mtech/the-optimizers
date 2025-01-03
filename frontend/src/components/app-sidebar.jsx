import { AArrowUp, ArrowDown01, ArrowUp, ArrowUp01, ArrowUp01Icon, ArrowUp10, ArrowUpDown, Calendar, ChevronDown, ChevronUp, DollarSign, Home, Inbox, LayoutDashboard, LayoutDashboardIcon, LogOut, LogOutIcon, LucideSettings, Search, Settings, Settings2, User2 } from "lucide-react";

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
} from "./ui/sidebar.jsx";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


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
       <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <a href={'/'}>
                      <DollarSign className="transition-transform group-data-[state=open]/collapsible:rotate-180"/>
                      <span style={{fontSize: '22px', fontWeight: 'bold'}}>{'Expense Tracker'}</span>
                    </a>
                  </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
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
                    <a href={'/Categories'}>
                      <LucideSettings className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      <span>{'Categories'}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
       <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <a href={'/logout'}>
                      {/* <item.icon /> */}
                      <LogOutIcon className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      <span>{'Logout'}</span>
                    </a>
                  </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  );
}
