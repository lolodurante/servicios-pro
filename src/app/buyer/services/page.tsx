import { ServiceGrid } from "@/components/service-grid"
import { ServiceFilters } from "@/components/service-filters"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-6">
        <h1 className="text-3xl font-bold mb-6">Servicios Disponibles</h1>
        <ServiceFilters />
        <ServiceGrid />
      </div>
    </div>
  )
}

