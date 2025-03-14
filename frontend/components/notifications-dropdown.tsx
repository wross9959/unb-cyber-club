"use client"

import { useState } from "react"
import { Bell, Calendar, MessageSquare, User, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "message",
      content: "Jamie Lee sent you a message",
      time: "5 minutes ago",
      read: false,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Jamie Lee",
    },
    {
      id: 2,
      type: "event",
      content: "CTF Competition starts in 2 hours",
      time: "2 hours ago",
      read: false,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Event Reminder",
    },
    {
      id: 3,
      type: "mention",
      content: "Alex Johnson mentioned you in a comment",
      time: "Yesterday",
      read: true,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Alex Johnson",
    },
    {
      id: 4,
      type: "event",
      content: "New workshop added: Intro to Penetration Testing",
      time: "2 days ago",
      read: true,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Event Update",
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-4 w-4 text-blue-500" />
      case "event":
        return <Calendar className="h-4 w-4 text-green-500" />
      case "mention":
        return <User className="h-4 w-4 text-purple-500" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative rounded-full">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs"
              aria-label={`${unreadCount} unread notifications`}
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-auto p-0 text-xs" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="flex cursor-pointer gap-4 p-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={notification.avatar} alt={notification.name} />
                  <AvatarFallback>{notification.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getIcon(notification.type)}
                      <p className={`text-sm ${notification.read ? "" : "font-medium"}`}>{notification.content}</p>
                    </div>
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Mark as read</span>
                      </Button>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">No notifications</div>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer justify-center">
          <a href="/notifications">View all notifications</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
