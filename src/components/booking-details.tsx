import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, User } from "lucide-react"

interface BookingDetailsProps {
  booking: {
    id: number
    service: string
    professional: string
    date: string
    time: string
    status: string
    location: string
  }
  onClose: () => void
}

export function BookingDetails({ booking, onClose }: BookingDetailsProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalles de la Reserva</DialogTitle>
          <DialogDescription>Información completa sobre tu reserva de servicio.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <User className="h-4 w-4" />
            <div className="col-span-3">
              <p className="text-sm font-medium">Profesional</p>
              <p className="text-sm text-muted-foreground">{booking.professional}</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Calendar className="h-4 w-4" />
            <div className="col-span-3">
              <p className="text-sm font-medium">Fecha</p>
              <p className="text-sm text-muted-foreground">{booking.date}</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Clock className="h-4 w-4" />
            <div className="col-span-3">
              <p className="text-sm font-medium">Hora</p>
              <p className="text-sm text-muted-foreground">{booking.time}</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <MapPin className="h-4 w-4" />
            <div className="col-span-3">
              <p className="text-sm font-medium">Ubicación</p>
              <p className="text-sm text-muted-foreground">{booking.location}</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
          <Button type="button" variant="default">
            Modificar Reserva
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

