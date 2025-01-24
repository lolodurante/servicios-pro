"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, MessageSquare, Star } from "lucide-react"
import { useRouter } from "next/navigation"

interface Service {
  id: number
  name: string
  profession: string
  rating: number
  reviews: number
  price: string
  image: string
  description: string
  availability: string
  badges: string[]
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const router = useRouter()

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{service.name}</h3>
            <p className="text-muted-foreground">{service.profession}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{service.rating}</span>
            <span className="text-muted-foreground">({service.reviews})</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {service.badges.map((badge) => (
            <Badge key={badge} variant={badge === "Premium" ? "default" : "secondary"}>
              {badge}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{service.availability}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium mt-2">
          <span>{service.price}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1" onClick={() => router.push(`/buyer/booking/${service.id}`)}>
          <Calendar className="h-4 w-4 mr-2" />
          Reservar
        </Button>
        <Button variant="outline" onClick={() => router.push(`/buyer/messages/${service.id}`)}>
          <MessageSquare className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

