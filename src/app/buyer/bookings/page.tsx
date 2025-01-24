import { useState } from "react"
import type { Metadata } from "next"
import { BookingsList } from "@/components/buyer/bookings-list"
import { BookingsCalendar } from "@/components/buyer/bookings-calendar"
import { BookingDetails } from "@/components/buyer/booking-details"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Mis Reservas | ServiciosPro",
  description: "Gestiona tus reservas de servicios",
}

export default function BookingsPage() {
  const [selectedBooking, setSelectedBooking] = useState(null)

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Mis Reservas</h1>
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="list">Lista</TabsTrigger>
          <TabsTrigger value="calendar">Calendario</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <BookingsList onBookingSelect={setSelectedBooking} />
        </TabsContent>
        <TabsContent value="calendar">
          <BookingsCalendar onBookingSelect={setSelectedBooking} />
        </TabsContent>
      </Tabs>
      {selectedBooking && <BookingDetails booking={selectedBooking} onClose={() => setSelectedBooking(null)} />}
    </div>
  )
}

