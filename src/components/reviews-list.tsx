import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Image from "next/image"

interface Review {
  id: string
  author: string
  rating: number
  date: string
  comment: string
  images?: string[]
}

interface ReviewsListProps {
  reviews: Review[]
}

export function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarFallback>{review.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{review.author}</span>
                  <span className="text-muted-foreground">•</span>
                  <time className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</time>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">{review.comment}</p>
          {review.images && review.images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {review.images.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Review image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

