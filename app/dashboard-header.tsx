import { Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search } from "@/components/ui/search" // Import the Search component

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Input placeholder="Search..." className="w-[300px] pl-8" />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-medium">Dianne Russell</div>
            <div className="text-sm text-gray-500">Admin</div>
          </div>
          <Avatar>
            <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wg3lMcRxifgKXncyWnEcRCEw05e8jP.png" />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

