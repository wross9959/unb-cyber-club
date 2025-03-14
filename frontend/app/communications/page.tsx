import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FileUp, Filter, MoreHorizontal, Plus, Search, Send, Smile, Users } from "lucide-react"

export default function CommunicationsPage() {
  const conversations = [
    {
      id: 1,
      name: "General Discussion",
      type: "group",
      members: 45,
      lastMessage: "Does anyone have resources for the upcoming workshop?",
      lastMessageTime: "10:45 AM",
      unread: 3,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "CTF Team",
      type: "group",
      members: 12,
      lastMessage: "Let's meet tomorrow to practice for the competition",
      lastMessageTime: "Yesterday",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Alex Johnson",
      type: "direct",
      lastMessage: "Can you help me with the project setup?",
      lastMessageTime: "Yesterday",
      unread: 1,
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
    },
    {
      id: 4,
      name: "Jamie Lee",
      type: "direct",
      lastMessage: "The workshop materials are ready for review",
      lastMessageTime: "2 days ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
    },
    {
      id: 5,
      name: "Website Project",
      type: "group",
      members: 4,
      lastMessage: "I've pushed the latest changes to the repository",
      lastMessageTime: "3 days ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Alex Johnson",
      content: "Hey everyone! Just wanted to check if we're still meeting tomorrow for the CTF practice?",
      time: "10:30 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      sender: "Taylor Smith",
      content: "Yes, I'll be there. I've prepared some web security challenges for us to work on.",
      time: "10:32 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      sender: "Riley Kim",
      content:
        "I can make it too. Should we focus on cryptography as well? That was our weak point in the last competition.",
      time: "10:35 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      sender: "Casey Rivera",
      content: "Good point Riley. I've been studying some crypto challenges and can share what I've learned.",
      time: "10:38 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      sender: "Alex Johnson",
      content: "Perfect! Let's meet in the CS lab at 6 PM then. I'll bring some snacks.",
      time: "10:40 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      sender: "Morgan Chen",
      content: "Does anyone have resources for the upcoming workshop? I'd like to prepare in advance.",
      time: "10:45 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex w-full flex-1 flex-col bg-muted/40">
      <div className="flex flex-1 flex-col">
        <main className="flex flex-1 flex-col md:flex-row h-[calc(100vh-4rem)]">
          <div className="border-r md:w-80 lg:w-96">
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Messages</h1>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">New message</span>
                </Button>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search messages..."
                    className="w-full rounded-lg bg-background pl-8"
                  />
                </div>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </div>
              <Tabs defaultValue="all" className="mt-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="groups">Groups</TabsTrigger>
                  <TabsTrigger value="direct">Direct</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4 space-y-2">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted cursor-pointer"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={conversation.avatar} alt={conversation.name} />
                        <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{conversation.name}</h3>
                          <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="truncate text-sm text-muted-foreground">{conversation.lastMessage}</p>
                          {conversation.unread > 0 && (
                            <Badge className="ml-auto h-5 w-5 rounded-full p-0 text-xs">{conversation.unread}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="groups" className="mt-4 space-y-2">
                  {conversations
                    .filter((conversation) => conversation.type === "group")
                    .map((conversation) => (
                      <div
                        key={conversation.id}
                        className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted cursor-pointer"
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={conversation.avatar} alt={conversation.name} />
                          <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{conversation.name}</h3>
                            <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="truncate text-sm text-muted-foreground">
                              <Users className="mr-1 inline-block h-3 w-3" />
                              {conversation.members} members
                            </p>
                            {conversation.unread > 0 && (
                              <Badge className="ml-auto h-5 w-5 rounded-full p-0 text-xs">{conversation.unread}</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </TabsContent>
                <TabsContent value="direct" className="mt-4 space-y-2">
                  {conversations
                    .filter((conversation) => conversation.type === "direct")
                    .map((conversation) => (
                      <div
                        key={conversation.id}
                        className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted cursor-pointer"
                      >
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={conversation.avatar} alt={conversation.name} />
                            <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                              conversation.status === "online" ? "bg-green-500" : "bg-gray-400"
                            }`}
                          />
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{conversation.name}</h3>
                            <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="truncate text-sm text-muted-foreground">{conversation.lastMessage}</p>
                            {conversation.unread > 0 && (
                              <Badge className="ml-auto h-5 w-5 rounded-full p-0 text-xs">{conversation.unread}</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="border-b p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="General Discussion" />
                    <AvatarFallback>GD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold">General Discussion</h2>
                    <p className="text-sm text-muted-foreground">
                      <Users className="mr-1 inline-block h-3 w-3" />
                      45 members
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Info</DropdownMenuItem>
                    <DropdownMenuItem>Add Members</DropdownMenuItem>
                    <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Leave Group</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={message.avatar} alt={message.sender} />
                      <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{message.sender}</span>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t p-4">
              <form className="flex items-center gap-2">
                <Button type="button" variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                  <Smile className="h-5 w-5" />
                  <span className="sr-only">Emoji</span>
                </Button>
                <Button type="button" variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                  <FileUp className="h-5 w-5" />
                  <span className="sr-only">Attach file</span>
                </Button>
                <Textarea placeholder="Type your message..." className="min-h-10 flex-1 resize-none" />
                <Button type="submit" size="icon" className="h-9 w-9 shrink-0">
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

