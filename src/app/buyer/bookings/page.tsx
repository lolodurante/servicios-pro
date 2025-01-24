import type { Metadata } from "next"
import { BookingsList } from "@/components/bookings-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Mis Reservas | ServiciosPro",
  description: "Gestiona tus reservas de servicios",
}

export default function BookingsPage() {

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Mis Reservas</h1>
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="list">Lista</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
        </TabsContent>
      </Tabs>
    </div>
  )
}

