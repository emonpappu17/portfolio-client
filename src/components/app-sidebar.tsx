// "use client"
// import * as React from "react"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail
// } from "@/components/ui/sidebar"
// import { FileText, FolderKanban, HomeIcon } from "lucide-react"
// import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"
// import { Logo } from "./logo"
// import { Separator } from "./ui/separator"
// import { Button } from "./ui/button"
// import { logout } from "@/services/auth/auth"
// import { toast } from "sonner"

// // import * as React from "react"
// import { ChevronRight } from "lucide-react"
// import { SearchForm } from "@/components/search-form"
// import { VersionSwitcher } from "@/components/version-switcher"
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import {
//   // Sidebar,
//   // SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   // SidebarHeader,
//   SidebarMenu,
//   // SidebarMenuButton,
//   // SidebarMenuItem,
//   // SidebarRail,
// } from "@/components/ui/sidebar"

// const items = [
//   {
//     title: "Dashboard",
//     url: "/dashboard",
//     icon: HomeIcon
//   },
//   {
//     title: "Blog Management",
//     url: "/dashboard/blogs",
//     icon: FileText
//   },
//   {
//     title: "Project Management",
//     url: "/dashboard/projects",
//     icon: FolderKanban
//   }
// ]


// const data = {
//   versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "#",
//       icon: HomeIcon,
//       items: [
//         {
//           title: "Home",
//           url: "/dashboard",
//         },

//       ],
//     },
//     {
//       title: "Blog Management",
//       url: "#",
//       icon: FileText,
//       items: [
//         {
//           title: "Blogs",
//           url: "/dashboard/blogs",
//         },
//         {
//           title: "Create",
//           url: "/dashboard/blogs/create",
//         },
//       ],
//     },
//     {
//       title: "Project Management",
//       url: "#",
//       icon: FolderKanban,
//       items: [
//         {
//           title: "Projects",
//           url: "/dashboard/projects",
//         },
//         {
//           title: "Create",
//           url: "/dashboard/projects/create",
//         },
//       ],
//     },
//     // {
//     //   title: "Building Your Application",
//     //   url: "#",
//     //   items: [
//     //     {
//     //       title: "Routing",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Data Fetching",
//     //       url: "#",
//     //       isActive: true,
//     //     },
//     //     {
//     //       title: "Rendering",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Caching",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Styling",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Optimizing",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Configuring",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Testing",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Authentication",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Deploying",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Upgrading",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Examples",
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//     // {
//     //   title: "API Reference",
//     //   url: "#",
//     //   items: [
//     //     {
//     //       title: "Components",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "File Conventions",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Functions",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "next.config.js Options",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "CLI",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Edge Runtime",
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//     // {
//     //   title: "Architecture",
//     //   url: "#",
//     //   items: [
//     //     {
//     //       title: "Accessibility",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Fast Refresh",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Next.js Compiler",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Supported Browsers",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Turbopack",
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//     // {
//     //   title: "Community",
//     //   url: "#",
//     //   items: [
//     //     {
//     //       title: "Contribution Guide",
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//   ],
// }

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleLogout = async () => {
//     await logout();
//     router.push('/')
//     toast.success("Logout Successfully!")
//   }
//   return (
//     // <Sidebar {...props} className="">
//     //   <SidebarHeader className="p-4 text-center ">
//     //     <Logo></Logo>
//     //   </SidebarHeader>
//     //   <SidebarContent className="p-4">
//     //     {items.map((item) => (
//     //       <SidebarMenuItem key={item.title} className="mb-2">
//     //         <SidebarMenuButton asChild isActive={pathname === item.url}>
//     //           <Link href={item.url}>
//     //             <item.icon className="size-4"></item.icon>
//     //             {item.title}
//     //           </Link>
//     //         </SidebarMenuButton>
//     //       </SidebarMenuItem>
//     //     ))}
//     //   </SidebarContent>
//     //   <SidebarRail />
//     //   <Separator></Separator>
//     //   <SidebarFooter>
//     //     <Button variant={"destructive"} onClick={handleLogout}>Logout</Button>
//     //   </SidebarFooter>
//     // </Sidebar>


//     <Sidebar {...props}>
//       <SidebarHeader className="p-4 text-center ">
//         <Logo></Logo>
//       </SidebarHeader>
//       <SidebarContent className="gap-0">
//         {/* We create a collapsible SidebarGroup for each parent. */}
//         {data.navMain.map((item) => (
//           <Collapsible
//             key={item.title}
//             title={item.title}
//             defaultOpen
//             className="group/collapsible"
//           >
//             <SidebarGroup>
//               <SidebarGroupLabel
//                 asChild
//                 className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
//               >
//                 <CollapsibleTrigger className="">
//                   <item.icon className="size-4 mr-2
//                   "></item.icon>
//                   {item.title}{" "}
//                   <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90 " />
//                 </CollapsibleTrigger>
//               </SidebarGroupLabel>
//               <CollapsibleContent>
//                 <SidebarGroupContent>
//                   <SidebarMenu>
//                     {item.items.map((item) => (
//                       <SidebarMenuItem key={item.title}>
//                         {/* <SidebarMenuButton asChild isActive={item.isActive}>
//                           <a href={item.url}>{item.title}</a>
//                         </SidebarMenuButton> */}
//                         <SidebarMenuButton asChild isActive={pathname === item.url} className="bg-amber-300 ml-4">
//                           <Link href={item.url}>
//                             {/* <item.icon className="size-4"></item.icon> */}
//                             {item.title}
//                           </Link>
//                         </SidebarMenuButton>
//                       </SidebarMenuItem>
//                     ))}
//                   </SidebarMenu>
//                 </SidebarGroupContent>
//               </CollapsibleContent>
//             </SidebarGroup>
//           </Collapsible>
//         ))}
//       </SidebarContent>
//       <SidebarRail />
//     </Sidebar>
//   )
// }


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
import { logout } from "@/services/auth/auth"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Logo } from "./logo"
import { Button } from "./ui/button"

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
          title: "Blogs",
          url: "/dashboard/blogs",
        },
        {
          title: "Create",
          url: "/dashboard/blogs/create",
        },
      ],
    },
    {
      title: "Project Management",
      url: "#",
      icon: FolderKanban,
      items: [
        {
          title: "Projects",
          url: "/dashboard/projects",
        },
        {
          title: "Create",
          url: "/dashboard/projects/create",
        },
      ],
    },
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
