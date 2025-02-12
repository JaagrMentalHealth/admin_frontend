import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MessageSquare, Users, Eye } from "lucide-react"

const stats = [
  {
    title: "Total Posts",
    value: "245",
    icon: FileText,
    description: "32 published this month",
  },
  {
    title: "Comments",
    value: "1,234",
    icon: MessageSquare,
    description: "43 pending moderation",
  },
  {
    title: "Total Users",
    value: "573",
    icon: Users,
    description: "12 new this week",
  },
  {
    title: "Page Views",
    value: "132K",
    icon: Eye,
    description: "+24.5% from last month",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

