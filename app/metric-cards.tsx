import { ArrowUpRight, Users, ShoppingCart, Wallet } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const metrics = [
  {
    label: "Total Earnings",
    value: "$559,250",
    change: "+1.23%",
    icon: Wallet,
  },
  {
    label: "Total Orders",
    value: "59,250",
    change: "+1.23%",
    icon: ShoppingCart,
  },
  {
    label: "Total Customers",
    value: "559,250",
    change: "+1.23%",
    icon: Users,
  },
  {
    label: "My Balance",
    value: "$559,250",
    change: "-1.23%",
    isNegative: true,
    icon: Wallet,
  },
]

export function MetricCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-center justify-between">
            <metric.icon className="h-5 w-5 text-purple-600" />
            <span
              className={cn("flex items-center gap-1 text-sm", metric.isNegative ? "text-red-500" : "text-emerald-500")}
            >
              {metric.change}
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div className="mt-4">
            <div className="text-sm text-gray-500">{metric.label}</div>
            <div className="text-2xl font-semibold">{metric.value}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}

