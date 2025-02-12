import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PostsTableToolbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Input placeholder="Search..." />
        <Button>Add Post</Button>
      </div>
      <div>
        <Button variant="ghost">Export</Button>
      </div>
    </div>
  )
}

