import type { Metadata } from "next"
import { ProfessionalProfile } from "@/components/profile"
import { ReviewsList } from "@/components/reviews-list"
import { ServiceGallery } from "@/components/service-gallery"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Perfil Profesional | ServiciosPro",
  description: "Detalles del profesional y sus servicios",
}

// En una aplicación real, estos datos vendrían de una base de datos
const professionalData = {
  id: "1",
  name: "María González",
  profession: "Plomera",
  rating: 4.9,
  reviews: 89,
  price: "Desde $40/hora",
  image: "/placeholder.svg?height=400&width=400",
  description: "Experta en reparaciones de tuberías y sistemas de agua. Servicio de emergencia 24/7.",
  availability: "Disponible mañana",
  badges: ["Verificado"],
  location: "Zona Norte",
  experience: "12 años",
  specialties: [
    "Reparación de tuberías",
    "Instalación de sistemas de agua",
    "Detección de fugas",
    "Mantenimiento preventivo",
    "Emergencias 24/7",
  ],
  gallery: Array(6).fill("/placeholder.svg?height=300&width=400"),
  schedule: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 6:00 PM",
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Cerrado",
  },
}

const reviews = [
  {
    id: "1",
    author: "Carlos Méndez",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Excelente servicio. María llegó puntual y resolvió el problema rápidamente. Muy profesional y conocedora de su trabajo.",
    images: ["/placeholder.svg?height=200&width=300"],
  },
  {
    id: "2",
    author: "Ana Torres",
    rating: 5,
    date: "2024-01-10",
    comment:
      "Muy buena experiencia. Detectó una fuga que otros plomeros no pudieron encontrar. Precio justo y trabajo impecable.",
  },
  {
    id: "3",
    author: "Roberto Sánchez",
    rating: 4,
    date: "2024-01-05",
    comment: "Buen servicio en general. Resolvió el problema aunque tardó un poco más de lo esperado.",
  },
]

export default function ProfessionalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container">
        <ProfessionalProfile professional={professionalData} />

        <Tabs defaultValue="reviews" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            <TabsTrigger value="gallery">Galería</TabsTrigger>
          </TabsList>
          <TabsContent value="reviews" className="mt-6">
            <ReviewsList reviews={reviews} />
          </TabsContent>
          <TabsContent value="gallery" className="mt-6">
            <ServiceGallery images={professionalData.gallery} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

