// "use client"

// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { Calendar, User } from "lucide-react"
// import { format } from "date-fns"
// import Image from "next/image"
// import { stripHtml } from "string-strip-html"

// interface BlogCardProps {
//     title: string
//     content: string
//     slug: string
//     thumbnail: string
//     tags: string[]
//     author: string
//     date: string | Date
// }

// export const BlogCard = ({
//     title,
//     content,
//     slug,
//     thumbnail,
//     tags,
//     author,
//     date,
// }: BlogCardProps) => {
//     return (
//         <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl group">
//             {/* Thumbnail */}
//             <div className="relative">
//                 <Image
//                     src={thumbnail}
//                     alt={title}
//                     className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     height={52}
//                     width={60}
//                 />
//             </div>

//             {/* Blog Details */}
//             <CardHeader className="px-5 pt-5 space-y-2">
//                 <h2 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
//                     {title}
//                 </h2>

//                 {/* Author & Date */}
//                 <div className="flex items-center gap-4 text-xs text-muted-foreground">
//                     <span className="flex items-center gap-1">
//                         <User size={14} />
//                         {author}
//                     </span>
//                     <span className="flex items-center gap-1">
//                         <Calendar size={14} />
//                         {format(new Date(date), "MMM dd, yyyy")}
//                     </span>
//                 </div>
//             </CardHeader>

//             <CardContent className="px-5">
//                 <p className="text-muted-foreground text-sm line-clamp-3">
//                     {content}
//                     {stripHtml(content).result}
//                 </p>
//             </CardContent>

//             {/* Footer with Tags + Read More */}
//             <CardFooter className="flex justify-between items-center px-5 pb-5">
//                 <div className="flex flex-wrap gap-2">
//                     {tags.slice(0, 3).map((tag) => (
//                         <Badge key={tag} variant="secondary" className="text-xs">
//                             #{tag}
//                         </Badge>
//                     ))}
//                     {tags.length > 3 && (
//                         <Badge variant="outline" className="text-xs">
//                             +{tags.length - 3}
//                         </Badge>
//                     )}
//                 </div>

//                 <Button asChild size="sm" className="rounded-full">
//                     <Link href={`/blogs/${slug}`}>Read More</Link>
//                 </Button>
//             </CardFooter>
//         </Card>
//     )
// }



"use client"

import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { format } from "date-fns"
import Image from "next/image"

interface BlogCardProps {
    title: string
    slug: string
    thumbnail: string
    tags: string[]
    author: string
    date: string | Date
}

export const BlogCard = ({
    title,
    slug,
    thumbnail,
    tags,
    author,
    date,
}: BlogCardProps) => {
    return (
        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl group">
            {/* Thumbnail */}
            <div className="relative">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    height={208}
                    width={400}
                />
            </div>

            {/* Blog Details */}
            <CardHeader className="px-5 pt-5 space-y-2">
                <h2 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {title}
                </h2>

                {/* Author & Date */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <User size={14} />
                        {author}
                    </span>
                    <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {format(new Date(date), "MMM dd, yyyy")}
                    </span>
                </div>
            </CardHeader>

            {/* Footer with Tags + Read More */}
            <CardFooter className="flex justify-between items-center px-5 pb-5">
                <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                        </Badge>
                    ))}
                    {tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                            +{tags.length - 3}
                        </Badge>
                    )}
                </div>

                <Button asChild size="sm" className="rounded-full">
                    <Link href={`/blogs/${slug}`}>Read More</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}


