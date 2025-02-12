import type { Metadata } from "next"
import { PostsTable } from "@/components/posts-table"
import { PostsTableToolbar } from "@/components/post-table-toolbar"

export const metadata: Metadata = {
  title: "Posts",
  description: "Manage your blog posts",
}

export default function PostsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
      </div>
      <div className="space-y-4">
        <PostsTableToolbar />
        <PostsTable />
      </div>
    </div>
  )
}

