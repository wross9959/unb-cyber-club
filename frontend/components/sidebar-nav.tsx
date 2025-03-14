"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { BarChart, Calendar, FileText, FolderOpen, Home, MessageSquare, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SidebarNav() {
  const pathname = usePathname()
  const { toggleSidebar } = useSidebar()

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle sidebar with Ctrl+B
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault()
        toggleSidebar()
      }

      // Quick navigation with Alt+number
      if (e.altKey && !isNaN(Number.parseInt(e.key)) && Number.parseInt(e.key) >= 1 && Number.parseInt(e.key) <= 7) {
        e.preventDefault()
        const index = Number.parseInt(e.key) - 1
        if (navItems[index]) {
          window.location.href = navItems[index].href
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  const navItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: Home,
      shortcut: "Alt+1",
    },
    {
      title: "Members",
      href: "/members",
      icon: Users,
      shortcut: "Alt+2",
    },
    {
      title: "Events",
      href: "/events",
      icon: Calendar,
      shortcut: "Alt+3",
    },
    {
      title: "Projects",
      href: "/projects",
      icon: FolderOpen,
      shortcut: "Alt+4",
    },
    {
      title: "Communications",
      href: "/communications",
      icon: MessageSquare,
      shortcut: "Alt+5",
    },
    {
      title: "Resources",
      href: "/resources",
      icon: FileText,
      shortcut: "Alt+6",
    },
    {
      title: "Announcements",
      href: "/announcements",
      icon: BarChart,
      shortcut: "Alt+7",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex h-14 items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.ico-bCH8f5mbkaidNavfNoIxQuob2goVVJ.png"
              alt="UNB Cyber Club Logo"
              className="h-8 w-auto"
            />
            <span className="text-lg">UNB Cyber Club</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={`${item.title} (${item.shortcut})`}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start px-2">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alex Johnson" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-sm">
                <span>Alex Johnson</span>
                <span className="text-xs text-muted-foreground">President</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile">Profile Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Notifications</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/auth/login">Log Out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

