"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, MessageSquare, Star, Wrench } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Professional {
  id: string
  name: string
  profession: string
  rating: number
  reviews: number
  price: string
  image: string
  description: string
  availability: string
  badges: string[]
  location: string
  experience: string
  specialties: string[]
  schedule: {
    [key: string]: string
  }
}

interface ProfessionalProfileProps {
  professional: Professional
}

export function ProfessionalProfile({ professional }: ProfessionalProfileProps) {
  const router = useRouter()

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6">
        <div className="space-y-6">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={professional.image || "/placeholder.svg"}
              alt={professional.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-lg">{professional.rating}</span>
              <span className="text-muted-foreground">({professional.reviews} reseñas)</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {professional.badges.map((badge) => (
              <Badge key={badge} variant={badge === "Premium" ? "default" : "secondary"}>
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{professional.name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Wrench className="h-4 w-4" />
              <span>{professional.profession}</span>
              <span className="mx-2">•</span>
              <MapPin className="h-4 w-4" />
              <span>{professional.location}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4" />
              <span>{professional.experience} de experiencia</span>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Acerca de</h2>
            <p className="text-muted-foreground">{professional.description}</p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Especialidades</h2>
            <div className="flex flex-wrap gap-2">
              {professional.specialties.map((specialty) => (
                <Badge key={specialty} variant="outline">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Horario</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(professional.schedule).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="capitalize">{day}</span>
                  <span className="text-muted-foreground">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button className="flex-1" onClick={() => router.push(`/buyer/booking/${professional.id}`)}>
              <Calendar className="h-4 w-4 mr-2" />
              Reservar
            </Button>
            <Button variant="outline" onClick={() => router.push(`/buyer/messages/${professional.id}`)}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Mensaje
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

