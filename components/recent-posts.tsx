import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentPosts = [
  {
    title: "Getting Started with React",
    author: "John Doe",
    authorImage: "/avatars/john-doe.png",
    date: "2 days ago",
  },
  {
    title: "10 Tips for Better SEO",
    author: "Jane Smith",
    authorImage: "/avatars/jane-smith.png",
    date: "4 days ago",
  },
  {
    title: "The Future of AI in Web Development",
    author: "Alex Johnson",
    authorImage: "/avatars/alex-johnson.png",
    date: "1 week ago",
  },
]

export function RecentPosts() {
  return (
    <div className="space-y-8">
      {recentPosts.map((post, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={post.authorImage} alt={post.author} />
            <AvatarFallback>{post.author[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{post.title}</p>
            <p className="text-sm text-muted-foreground">
              {post.author} • {post.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

