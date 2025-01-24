import type { Metadata } from "next"
import { MessageList } from "@/components/buyer/message-list"
import { MessageView } from "@/components/buyer/message-view"

export const metadata: Metadata = {
  title: "Mis Mensajes | ServiciosPro",
  description: "Gestiona tus conversaciones con profesionales",
}

export default function MessagesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Mis Mensajes</h1>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        <MessageList />
        <MessageView />
      </div>
    </div>
  )
}

