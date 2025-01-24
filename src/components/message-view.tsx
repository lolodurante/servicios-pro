"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

// Datos de ejemplo - en una aplicación real, estos vendrían de una API
const conversation = {
  id: 1,
  professional: {
    name: "María González",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  messages: [
    {
      id: 1,
      sender: "professional",
      content: "Hola, gracias por contactarme. ¿En qué puedo ayudarte?",
      timestamp: "2024-02-14T10:30:00Z",
    },
    {
      id: 2,
      sender: "buyer",
      content: "Hola María, necesito reparar una fuga en mi baño. ¿Cuándo podrías venir a revisarla?",
      timestamp: "2024-02-14T10:35:00Z",
    },
    {
      id: 3,
      sender: "professional",
      content: "Entiendo. Tengo disponibilidad para mañana en la tarde o pasado mañana en la mañana. ¿Qué te parece?",
      timestamp: "2024-02-14T10:40:00Z",
    },
    {
      id: 4,
      sender: "buyer",
      content: "Mañana en la tarde sería perfecto. ¿A qué hora podrías llegar?",
      timestamp: "2024-02-14T10:45:00Z",
    },
    {
      id: 5,
      sender: "Certainly, I'll continue the text stream from the cut-off point",

timestamp: "2024-02-14T10:45:00Z",
    },
    {
      id: 5,
      sender: "professional",
      content: "Puedo estar allí a las 3:00 PM. ¿Te parece bien?",
      timestamp: "2024-02-14T10:50:00Z",
    },
  ],
}

export function MessageView() {
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Aquí iría la lógica para enviar el mensaje
      console.log("Enviando mensaje:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <Card className="flex flex-col h-[calc(100vh-200px)]">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={conversation.professional.avatar} alt={conversation.professional.name} />
            <AvatarFallback>{conversation.professional.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">{conversation.professional.name}</h2>
            <p className="text-sm text-muted-foreground">Plomera profesional</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full">
          {conversation.messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.sender === "buyer" ? "text-right" : "text-left"}`}>
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.sender === "buyer" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <p>{message.content}</p>
                <span className="text-xs text-muted-foreground mt-1 block">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex-shrink-0">
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Escribe un mensaje..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

