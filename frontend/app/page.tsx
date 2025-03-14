import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight } from "lucide-react"
import { MemberActivity } from "@/components/member-activity"
import { UpcomingEvents } from "@/components/upcoming-events"
import { RecentAnnouncements } from "@/components/recent-announcements"
import { ProjectStatus } from "@/components/project-status"
import { DashboardStats } from "@/components/dashboard-stats"
import { QuickActions } from "@/components/quick-actions"

export default function Dashboard() {
  return (
    <div className="flex w-full flex-1 flex-col bg-muted/40">
      <div className="flex flex-1 flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <DashboardStats />
          <QuickActions />
          <Tabs defaultValue="overview" className="flex-1">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <div className="mt-4 flex-1">
              <TabsContent value="overview" className="flex-1 space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Member Activity</CardTitle>
                      <CardDescription>Member participation and engagement over the last 30 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <MemberActivity />
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Upcoming Events</CardTitle>
                      <CardDescription>Events scheduled for the next 30 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <UpcomingEvents />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Announcements</CardTitle>
                      <CardDescription>Latest club announcements and updates.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentAnnouncements />
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Project Status</CardTitle>
                      <CardDescription>Current status of active club projects.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ProjectStatus />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="members" className="flex-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Member Management</CardTitle>
                    <CardDescription>View and manage all club members.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <Button variant="outline">Add New Member</Button>
                      <Button variant="outline">Export Member List</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Navigate to the Members page for full management features.
                    </p>
                    <div className="mt-4">
                      <Link href="/members" className="inline-flex items-center text-sm font-medium text-primary">
                        Go to Member Management
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="events" className="flex-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Management</CardTitle>
                    <CardDescription>Schedule and manage club events.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <Button variant="outline">Create New Event</Button>
                      <Button variant="outline">View Calendar</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Navigate to the Events page for full management features.
                    </p>
                    <div className="mt-4">
                      <Link href="/events" className="inline-flex items-center text-sm font-medium text-primary">
                        Go to Event Management
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="projects" className="flex-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Management</CardTitle>
                    <CardDescription>Track and manage club projects.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <Button variant="outline">Create New Project</Button>
                      <Button variant="outline">View Project Board</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Navigate to the Projects page for full management features.
                    </p>
                    <div className="mt-4">
                      <Link href="/projects" className="inline-flex items-center text-sm font-medium text-primary">
                        Go to Project Management
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

