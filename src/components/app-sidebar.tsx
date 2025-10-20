"use client"

import {
  FileText,
  FolderKanban,
  LayoutDashboard
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "@/components/ui/sidebar"
// import { logout } from "@/services/auth/auth"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import { logout } from "@/actions/authActions"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      items: [
        {
          title: "Home",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Blog Management",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Blog List",
          url: "/dashboard/blogs",
        },
      ],
    },
    {
      title: "Project Management",
      url: "#",
      icon: FolderKanban,
      items: [
        {
          title: "Project List",
          url: "/dashboard/projects",
        },
      ],
    },
    // {
    //   title: "Profile Management",
    //   url: "#",
    //   icon: FolderKanban,
    //   items: [
    //     {
    //       title: "Profile",
    //       url: "/dashboard/projects",
    //     },
    //   ],
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push('/')
    toast.success("Logout Successfully!")
  }
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="p-4 text-center ">
        <Logo></Logo>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Button variant={"destructive"} onClick={handleLogout}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  )
}
