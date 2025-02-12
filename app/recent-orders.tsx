import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const orders = [
  {
    id: "ABRC011",
    customer: "Cameron Williamson",
    product: "Cip-Product 1203-93",
    category: "Machine #1",
    amount: "$3,552.32",
    vendor: "Hardware, Services, Software",
    status: "Completed",
  },
  {
    id: "ABRC081",
    customer: "Esther Robertson",
    product: "Cip-Product 1203-93",
    category: "Machine #1",
    amount: "$3,552.32",
    vendor: "Hardware, Services, Software",
    status: "Cancelled",
  },
  // Add more orders as needed
]

export function RecentOrders() {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <button className="text-sm text-purple-600">Show All Orders</button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Vendor</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.category}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.vendor}</TableCell>
              <TableCell>
                <Badge variant={order.status === "Completed" ? "success" : "destructive"}>{order.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

