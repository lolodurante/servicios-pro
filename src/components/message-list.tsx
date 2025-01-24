"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search } from "lucide-react"

// Datos de ejemplo - en una aplicación real, estos vendrían de una API
const conversations = [
  {
    id: 1,
    name: "María González",
    lastMessage: "Gracias por tu mensaje. Estaré allí a las 10 AM.",
    avatar: "/placeholder.svg?height=32&width=32",
    unread: true,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    lastMessage: "¿Podemos reprogramar para el próximo martes?",
    avatar: "/placeholder.svg?height=32&width=32",
    unread: false,
  },
  {
    id: 3,
    name: "Ana Martínez",
    lastMessage: "El trabajo está completado. ¿Puedes confirmar si todo está bien?",
    avatar: "/placeholder.svg?height=32&width=32",
    unread: true,
  },
]

export function MessageList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar conversaciones"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-250px)]">
        {filteredConversations.map((conversation) => (
          <Button key={conversation.id} variant="ghost" className="w-full justify-start px-4 py-3 hover:bg-accent">
            <Avatar className="h-9 w-9 mr-3">
              <AvatarImage src={conversation.avatar} alt={conversation.name} />
              <AvatarFallback>{conversation.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{conversation.name}</span>
                {conversation.unread && <span className="h-2 w-2 rounded-full bg-primary" />}
              </div>
              <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
            </div>
          </Button>
        ))}
      </ScrollArea>
    </div>
  )
}

