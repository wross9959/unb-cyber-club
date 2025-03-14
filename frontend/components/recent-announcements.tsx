import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function RecentAnnouncements() {
  const announcements = [
    {
      id: 1,
      title: "New CTF Competition Announced",
      content: "We're excited to announce our upcoming Capture The Flag competition on March 25th. Register now!",
      date: "March 10, 2025",
      author: {
        name: "Alex Johnson",
        role: "Club President",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 2,
      title: "Industry Partnership",
      content: "We've secured a partnership with CyberDefend Inc. for internship opportunities this summer.",
      date: "March 5, 2025",
      author: {
        name: "Sam Wilson",
        role: "External Relations",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 3,
      title: "Workshop Series Starting Next Month",
      content: "Our new workshop series on ethical hacking fundamentals begins next month. Limited spots available!",
      date: "February 28, 2025",
      author: {
        name: "Jamie Lee",
        role: "Education Coordinator",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ]

  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <div key={announcement.id} className="flex flex-col space-y-2 border-b pb-4 last:border-0">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{announcement.title}</h3>
            <span className="text-xs text-muted-foreground">{announcement.date}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{announcement.content}</p>
          <div className="flex items-center pt-2">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={announcement.author.avatar} alt={announcement.author.name} />
              <AvatarFallback>{announcement.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-xs font-medium">{announcement.author.name}</span>
              <span className="text-xs text-muted-foreground">{announcement.author.role}</span>
            </div>
            <Button variant="link" size="sm" className="ml-auto">
              Read More
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

