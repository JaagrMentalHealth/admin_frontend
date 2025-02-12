"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { date: "Nov 01", order: 400, store: 240 },
  { date: "Nov 02", order: 300, store: 438 },
  { date: "Nov 03", order: 200, store: 380 },
  { date: "Nov 04", order: 278, store: 390 },
  { date: "Nov 05", order: 189, store: 480 },
  { date: "Nov 06", order: 239, store: 380 },
  { date: "Nov 07", order: 349, store: 430 },
]

export function OrderChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Line type="monotone" dataKey="order" stroke="#E11D48" strokeWidth={2} />
          <Line type="monotone" dataKey="store" stroke="#7C3AED" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

