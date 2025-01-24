import { ServiceCard } from "@/components/service-card"

const services = [
  {
    id: 1,
    name: "Juan Pérez",
    profession: "Electricista",
    rating: 4.8,
    reviews: 127,
    price: "Desde $35/hora",
    image: "/placeholder.svg?height=300&width=400",
    description: "Especialista en instalaciones eléctricas residenciales y comerciales. 15 años de experiencia.",
    availability: "Disponible hoy",
    badges: ["Verificado", "Premium"],
  },
  {
    id: 2,
    name: "María González",
    profession: "Plomera",
    rating: 4.9,
    reviews: 89,
    price: "Desde $40/hora",
    image: "/placeholder.svg?height=300&width=400",
    description: "Experta en reparaciones de tuberías y sistemas de agua. Servicio de emergencia 24/7.",
    availability: "Disponible mañana",
    badges: ["Verificado"],
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    profession: "Pintor",
    rating: 4.7,
    reviews: 156,
    price: "Desde $25/hora",
    image: "/placeholder.svg?height=300&width=400",
    description: "Pintura interior y exterior. Acabados profesionales garantizados.",
    availability: "Disponible hoy",
    badges: ["Premium"],
  },
  {
    id: 4,
    name: "Ana Martínez",
    profession: "Carpintera",
    rating: 4.9,
    reviews: 94,
    price: "Desde $45/hora",
    image: "/placeholder.svg?height=300&width=400",
    description: "Diseño y fabricación de muebles a medida. Reparaciones y restauraciones.",
    availability: "Próxima disponibilidad: Lunes",
    badges: ["Verificado", "Premium"],
  },
  {
    id: 5,
    name: "Roberto Sánchez",
    profession: "Electricista",
    rating: 4.6,
    reviews: 73,
    price: "Desde $30/hora",
    image: "/placeholder.svg?height=300&width=400",
    description: "Especializado en domótica y sistemas eléctricos inteligentes.",
    availability: "Disponible hoy",
    badges: ["Verificado"],
  },
  {
    id: 6,
    name: "Laura Torres",
    profession: "Plomera",
    rating: 4.8,
    reviews: 112,
    price: "Desde $38/hora",
    image: "/placeholder.svg?height=300&width=400",
    description: "Instalación y reparación de sistemas de calefacción y fontanería.",
    availability: "Disponible mañana",
    badges: ["Premium"],
  },
]

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}

