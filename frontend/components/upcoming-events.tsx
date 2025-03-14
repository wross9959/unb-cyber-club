import { CalendarDays, Users, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Capture The Flag Competition",
      date: "March 25, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Computer Science Building, Room 104",
      attendees: 32,
      type: "competition",
    },
    {
      id: 2,
      title: "Intro to Penetration Testing",
      date: "April 2, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "Engineering Building, Lab 203",
      attendees: 24,
      type: "workshop",
    },
    {
      id: 3,
      title: "Industry Speaker: Cybersecurity Careers",
      date: "April 10, 2025",
      time: "4:00 PM - 5:30 PM",
      location: "Student Union, Conference Room A",
      attendees: 45,
      type: "speaker",
    },
    {
      id: 4,
      title: "Networking Social",
      date: "April 15, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Campus Pub",
      attendees: 28,
      type: "social",
    },
  ]

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "competition":
        return "destructive"
      case "workshop":
        return "default"
      case "speaker":
        return "secondary"
      case "social":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex flex-col space-y-2 border-b pb-4 last:border-0">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{event.title}</h3>
            <Badge variant={getBadgeVariant(event.type)}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-1 h-4 w-4" />
            {event.date} • {event.time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="mr-1 h-4 w-4" />
            {event.attendees} attending
          </div>
          <Button variant="outline" size="sm" className="w-full mt-2">
            View Details
          </Button>
        </div>
      ))}
    </div>
  )
}

