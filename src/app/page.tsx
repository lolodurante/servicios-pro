import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Zap, Droplets, PaintbrushIcon as Paint, Hammer, ChevronRight } from "lucide-react"
import Link from "next/link"

const serviceCategories = [
  {
    title: "Electricistas",
    description: "Instalaciones y reparaciones eléctricas",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "Plomeros",
    description: "Reparación de tuberías y servicios de plomería",
    icon: Droplets,
    color: "text-blue-500",
  },
  {
    title: "Pintores",
    description: "Servicios de pintura interior y exterior",
    icon: Paint,
    color: "text-purple-500",
  },
  {
    title: "Carpinteros",
    description: "Trabajos en madera y reparaciones",
    icon: Hammer,
    color: "text-orange-500",
  },
  {
    title: "Mantenimiento General",
    description: "Reparaciones y mantenimiento del hogar",
    icon: Wrench,
    color: "text-gray-500",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Servicios profesionales a tu alcance</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conectamos a profesionales calificados con personas que necesitan sus servicios
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Categorías de servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => (
            <Card key={category.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${category.color} bg-gray-100`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground mt-12">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">¿Eres un profesional?</h2>
            <p className="text-lg mb-8 opacity-90">Únete a nuestra plataforma y comienza a conseguir nuevos clientes</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/professional/register">Registrarse como profesional</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

