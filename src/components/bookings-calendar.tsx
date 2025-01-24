"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Datos de ejemplo - en una aplicación real, estos vendrían de una API
const bookings = [
  {
    id: 1,
    service: "Reparación de tuberías",
    professional: "María González",
    date: new Date(2024, 1, 15),
    time: "10:00 AM",
    status: "Confirmado",
  },
  {
    id: 2,
    service: "Instalación eléctrica",
    professional: "Carlos Rodríguez",
    date: new Date(2024, 1, 18),
    time: "2:00 PM",
    status: "Pendiente",
  },
  {
    id: 3,
    service: "Pintura de interiores",
    professional: "Ana Martínez",
    date: new Date(2024, 1, 20),
    time: "9:00 AM",
    status: "Completado",
  },
]

export function BookingsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const selectedDateBookings = bookings.filter((booking) => booking.date.toDateString() === date?.toDateString())

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow" />
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Reservas para {date?.toLocaleDateString()}</CardTitle>
          <CardDescription>
            {selectedDateBookings.length
              ? `${selectedDateBookings.length} reserva(s) programada(s)`
              : "No hay reservas para este día"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {selectedDateBookings.map((booking) => (
            <div key={booking.id} className="mb-4 last:mb-0">
              <h3 className="font-semibold">{booking.service}</h3>
              <p className="text-sm text-muted-foreground">{booking.professional}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm">{booking.time}</span>
                <Badge
                  variant={
                    booking.status === "Confirmado"
                      ? "default"
                      : booking.status === "Pendiente"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {booking.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

