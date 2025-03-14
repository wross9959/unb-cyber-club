import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Calendar, Edit, Github, Globe, Linkedin, Mail, MessageSquare, Phone, Twitter, Plus } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex flex-1 flex-col bg-muted/40">
      <div className="flex flex-1 flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Alex Johnson" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="outline" className="absolute bottom-0 right-0 h-6 w-6 rounded-full">
                      <Edit className="h-3 w-3" />
                      <span className="sr-only">Change avatar</span>
                    </Button>
                  </div>
                  <div className="grid gap-1 text-center">
                    <h3 className="text-lg font-semibold">Alex Johnson</h3>
                    <p className="text-sm text-muted-foreground">Club President</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Message</span>
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
                      <Phone className="h-4 w-4" />
                      <span className="sr-only">Call</span>
                    </Button>
                  </div>
                  <Separator />
                  <div className="grid w-full gap-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">alex.johnson@unb.ca</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">(506) 555-1234</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Joined September 2022</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid w-full gap-2">
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-sm text-primary hover:underline">
                        github.com/alexj
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-sm text-primary hover:underline">
                        linkedin.com/in/alexj
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Twitter className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-sm text-primary hover:underline">
                        twitter.com/alexj
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-sm text-primary hover:underline">
                        alexjohnson.dev
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Update your personal information and how it is displayed to others.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" defaultValue="Alex" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" defaultValue="Johnson" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue="alex.johnson@unb.ca" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="(506) 555-1234" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          defaultValue="Cybersecurity enthusiast with a focus on network security and penetration testing. Currently serving as the President of the UNB Cyber Club."
                          className="min-h-24"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Skills</Label>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Network Security</Badge>
                          <Badge>Python</Badge>
                          <Badge>CTF</Badge>
                          <Badge>Penetration Testing</Badge>
                          <Badge>Leadership</Badge>
                          <Button variant="outline" size="sm" className="h-6">
                            <Plus className="mr-1 h-3 w-3" />
                            Add Skill
                          </Button>
                        </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="justify-between space-x-2">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Save Changes</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Social Links</CardTitle>
                        <CardDescription>Connect your social media accounts to your profile.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="github">GitHub</Label>
                          <div className="flex items-center gap-2">
                            <Github className="h-4 w-4 text-muted-foreground" />
                            <Input id="github" defaultValue="github.com/alexj" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="linkedin">LinkedIn</Label>
                          <div className="flex items-center gap-2">
                            <Linkedin className="h-4 w-4 text-muted-foreground" />
                            <Input id="linkedin" defaultValue="linkedin.com/in/alexj" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="twitter">Twitter</Label>
                          <div className="flex items-center gap-2">
                            <Twitter className="h-4 w-4 text-muted-foreground" />
                            <Input id="twitter" defaultValue="twitter.com/alexj" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Personal Website</Label>
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <Input id="website" defaultValue="alexjohnson.dev" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="justify-between space-x-2">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Save Changes</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="account" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account Settings</CardTitle>
                        <CardDescription>Manage your account settings and preferences.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="alexjohnson" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select defaultValue="president">
                            <SelectTrigger id="role">
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="president">President</SelectItem>
                              <SelectItem value="vp">Vice President</SelectItem>
                              <SelectItem value="treasurer">Treasurer</SelectItem>
                              <SelectItem value="secretary">Secretary</SelectItem>
                              <SelectItem value="member">Member</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="year">Year of Study</Label>
                          <Select defaultValue="senior">
                            <SelectTrigger id="year">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="freshman">Freshman</SelectItem>
                              <SelectItem value="sophomore">Sophomore</SelectItem>
                              <SelectItem value="junior">Junior</SelectItem>
                              <SelectItem value="senior">Senior</SelectItem>
                              <SelectItem value="graduate">Graduate</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger id="language">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select defaultValue="ast">
                            <SelectTrigger id="timezone">
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ast">Atlantic Time (AST)</SelectItem>
                              <SelectItem value="est">Eastern Time (EST)</SelectItem>
                              <SelectItem value="cst">Central Time (CST)</SelectItem>
                              <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                              <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                      <CardFooter className="justify-between space-x-2">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Save Changes</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>Change your password to keep your account secure.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter className="justify-between space-x-2">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Update Password</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Danger Zone</CardTitle>
                        <CardDescription>Irreversible and destructive actions.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-lg border border-destructive/50 p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Delete Account</h4>
                              <p className="text-sm text-muted-foreground">
                                Permanently delete your account and all associated data.
                              </p>
                            </div>
                            <Button variant="destructive">Delete Account</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="notifications" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                        <CardDescription>Choose how and when you want to be notified.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Email Notifications</h3>
                          <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="email-events" className="flex flex-col space-y-1">
                              <span>Event Reminders</span>
                              <span className="font-normal text-sm text-muted-foreground">
                                Receive reminders about upcoming events
                              </span>
                            </Label>
                            <Switch id="email-events" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="email-announcements" className="flex flex-col space-y-1">
                              <span>Announcements</span>
                              <span className="font-normal text-sm text-muted-foreground">
                                Receive club announcements and updates
                              </span>
                            </Label>
                            <Switch id="email-announcements" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="email-projects" className="flex flex-col space-y-1">
                              <span>Project Updates</span>
                              <span className="font-normal text-sm text-muted-foreground">
                                Receive updates about projects you're involved in
                              </span>
                            </Label>
                            <Switch id="email-projects" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="email-messages" className="flex flex-col space-y-1">
                              <span>Direct Messages</span>
                              <span className="font-normal text-sm text-muted-foreground">
                                Receive email notifications for new direct messages
                              </span>
                            </Label>
                            <Switch id="email-messages" />
                          </div>
                        </div>
                        <Separator />
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">In-App Notifications</h3>
                          <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="app-events" className="flex flex-col space-y-1">
                              <span>Event Reminders</span>
                              <span className="font-normal text-sm text-muted-foreground">
                                Show notifications for upcoming events
                              </span>
                            </Label>
                            <Switch id="app-events" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="app-announcements" className="flex flex-col space-y-1">
                              <span>Announcements</span>
                              <span className="font-normal text-sm text-muted-foreground">
                                Show notifications for club announcements
                              </span>
                            </Label>
                            <Switch id="app-announcements" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="app-projects" className="flex flex-col space-y-1">
                              <span>Project Updates</span>
                              <span className="font-normal text-sm text-muted-foreground">
                                Show notifications for project updates
                              </span>
                            </Label>
                            <Switch id="app-projects" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="app-messages" className="flex flex-col space-y-1">
                              <span>Direct Messages</span>
                              <span className="font-normal text-sm text-muted-foreground">
                                Show notifications for new direct messages
                              </span>
                            </Label>
                            <Switch id="app-messages" defaultChecked />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="justify-between space-x-2">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Save Preferences</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </main>
        </div>
      </div>
  )
}

