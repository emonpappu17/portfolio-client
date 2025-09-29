"use client"
import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar"
import { FileText, FolderKanban, HomeIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { logout } from "@/services/auth/auth"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: HomeIcon
  },
  {
    title: "Blog Management",
    url: "/dashboard/blogs",
    icon: FileText
  },
  {
    title: "Project Management",
    url: "/dashboard/projects",
    icon: FolderKanban
  }
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar {...props} className="">
      <SidebarHeader className="p-4 text-center ">
        <Logo></Logo>
      </SidebarHeader>
      <SidebarContent className="p-4">
        {items.map((item) => (
          <SidebarMenuItem key={item.title} className="mb-2">
            <SidebarMenuButton asChild isActive={pathname === item.url}>
              <Link href={item.url}>
                <item.icon className="size-4"></item.icon>
                {item.title}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarRail />
      <Separator></Separator>
      <SidebarFooter>
        <Button variant={"destructive"} onClick={() => logout()}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  )
}
