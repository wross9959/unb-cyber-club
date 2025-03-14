import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Users, Clock } from "lucide-react"

export function ProjectStatus() {
  const projects = [
    {
      id: 1,
      name: "Vulnerability Scanner",
      description: "Building an open-source vulnerability scanner for educational purposes.",
      progress: 75,
      status: "in-progress",
      members: 8,
      deadline: "April 30, 2025",
    },
    {
      id: 2,
      name: "Security Awareness Campaign",
      description: "Creating materials for campus-wide security awareness.",
      progress: 40,
      status: "in-progress",
      members: 5,
      deadline: "May 15, 2025",
    },
    {
      id: 3,
      name: "CTF Challenge Development",
      description: "Developing challenges for the upcoming CTF competition.",
      progress: 90,
      status: "almost-complete",
      members: 6,
      deadline: "March 20, 2025",
    },
    {
      id: 4,
      name: "Club Website Redesign",
      description: "Redesigning the club website with improved security features.",
      progress: 30,
      status: "in-progress",
      members: 4,
      deadline: "June 1, 2025",
    },
  ]

  const getStatusBadge = (status: string, progress: number) => {
    if (progress === 100) return <Badge className="bg-green-500">Complete</Badge>
    if (progress > 75) return <Badge className="bg-blue-500">Almost Complete</Badge>
    if (progress > 25) return <Badge>In Progress</Badge>
    return <Badge variant="outline">Just Started</Badge>
  }

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="space-y-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-primary" />
              <h3 className="font-medium">{project.name}</h3>
            </div>
            {getStatusBadge(project.status, project.progress)}
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">{project.members} members</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">Due {project.deadline}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={project.progress} className="h-2" />
            <span className="text-xs font-medium">{project.progress}%</span>
          </div>
          <Button variant="outline" size="sm" className="mt-2">
            View Project
          </Button>
        </div>
      ))}
    </div>
  )
}

