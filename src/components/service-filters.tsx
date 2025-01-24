"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Search } from "lucide-react"
import { toast } from "sonner"

const professions = ["Todos", "Electricista", "Plomero", "Pintor", "Carpintero", "Albañil", "Jardinero"]

const zones = ["Todas las zonas", "Centro", "Norte", "Sur", "Este", "Oeste"]

export function ServiceFilters() {
  const handleLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          toast.success("Ubicación actualizada")
          // Aquí se pueden usar position.coords.latitude y position.coords.longitude
          // para filtrar servicios por proximidad
        },
        () => {
          toast.error("No se pudo obtener la ubicación")
        },
      )
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar servicios o profesionales..." className="pl-9" />
      </div>
      <div className="flex gap-4">
        <Select defaultValue="Todos">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Profesión" />
          </SelectTrigger>
          <SelectContent>
            {professions.map((profession) => (
              <SelectItem key={profession} value={profession}>
                {profession}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="Todas las zonas">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Zona" />
          </SelectTrigger>
          <SelectContent>
            {zones.map((zone) => (
              <SelectItem key={zone} value={zone}>
                {zone}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon" onClick={handleLocation} title="Usar mi ubicación">
          <MapPin className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

