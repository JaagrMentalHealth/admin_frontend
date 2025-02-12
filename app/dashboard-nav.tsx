"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, ShoppingCart, Store, BarChart, MessageSquare, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/" },
  { icon: Package, label: "Product", href: "/product" },
  { icon: ShoppingCart, label: "Order", href: "/order" },
  { icon: Store, label: "Store", href: "/store" },
  { icon: BarChart, label: "Report", href: "/report" },
  { icon: MessageSquare, label: "Message", href: "/message" },
  { icon: Settings, label: "Setting", href: "/settings" },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="flex w-64 flex-col border-r bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-purple-600">Denovers</h1>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
              pathname === item.href ? "bg-purple-50 text-purple-600" : "text-gray-600 hover:bg-gray-50",
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-4">
        <Button variant="ghost" className="w-full justify-start gap-2 text-red-600">
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  )
}

