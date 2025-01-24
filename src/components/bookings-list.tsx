"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

// Datos de ejemplo - en una aplicación real, estos vendrían de una API
const bookings = [
  {
    id: 1,
    service: "Reparación de tuberías",
    professional: "María González",
    date: "2024-02-15",
    time: "10:00 AM",
    status: "Confirmado",
    location: "Av. Principal 123",
  },
  {
    id: 2,
    service: "Instalación eléctrica",
    professional: "Carlos Rodríguez",
    date: "2024-02-18",
    time: "2:00 PM",
    status: "Pendiente",
    location: "Calle 45 #789",
  },
  {
    id: 3,
    service: "Pintura de interiores",
    professional: "Ana Martínez",
    date: "2024-02-20",
    time: "9:00 AM",
    status: "Completado",
    location: "Plaza Central 456",
  },
]

export function BookingsList({ onBookingSelect }: { onBookingSelect: (booking: any) => void }) {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const sortedBookings = [...bookings].sort((a, b) => {
    if (!sortColumn) return 0
    if (a[sortColumn as keyof typeof a] < b[sortColumn as keyof typeof b]) {
      return sortDirection === "asc" ? -1 : 1
    }
    if (a[sortColumn as keyof typeof a] > b[sortColumn as keyof typeof b]) {
      return sortDirection === "asc" ? 1 : -1
    }
    return 0
  })

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead onClick={() => handleSort("service")} className="cursor-pointer">
            Servicio
          </TableHead>
          <TableHead onClick={() => handleSort("professional")} className="cursor-pointer">
            Profesional
          </TableHead>
          <TableHead onClick={() => handleSort("date")} className="cursor-pointer">
            Fecha y Hora
          </TableHead>
          <TableHead onClick={() => handleSort("status")} className="cursor-pointer">
            Estado
          </TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedBookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell>{booking.service}</TableCell>
            <TableCell>{booking.professional}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {booking.date}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                {booking.time}
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {booking.location}
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  booking.status === "Confirmado" ? "default" : booking.status === "Pendiente" ? "secondary" : "outline"
                }
              >
                {booking.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="sm" onClick={() => onBookingSelect(booking)}>
                Ver detalles
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

