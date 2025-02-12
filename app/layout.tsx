import { DashboardNav } from "@/components/dashboard-nav"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react" // Added import for React

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen">
            <DashboardNav />
            <main className="flex-1 overflow-y-auto bg-background">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
