import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { NotificationsDropdown } from "@/components/notifications-dropdown"
import { SearchDialog } from "@/components/search-dialog"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UNB Cyber Club",
  description: "UNB Cyber Club Management System",
  generator: "v0.dev",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <SidebarNav />
              <div className="flex w-full flex-1 flex-col">
                <header className="sticky top-0 z-30 flex h-16 w-full items-center gap-4 border-b bg-background px-4 md:px-6">
                  <SidebarTrigger />
                  <SearchDialog />
                  <div className="ml-auto flex items-center gap-2">
                    <NotificationsDropdown />
                    <ModeToggle />
                  </div>
                </header>
                <main className="flex-1">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
