import { LucideSearch } from "lucide-react"

export const Search = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className} {...props}>
      <LucideSearch />
    </div>
  )
}

