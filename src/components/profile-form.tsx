"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, FileText } from "lucide-react"

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    })
    .max(30, {
      message: "El nombre no puede tener más de 30 caracteres.",
    }),
  email: z
    .string()
    .min(1, {
      message: "Este campo no puede estar vacío.",
    })
    .email({
      message: "Por favor, introduce una dirección de correo electrónico válida.",
    }),
  phone: z
    .string()
    .min(1, {
      message: "Este campo no puede estar vacío.",
    })
    .regex(/^\+?[0-9]{10,14}$/, {
      message: "Por favor, introduce un número de teléfono válido.",
    }),
  address: z
    .string()
    .min(1, {
      message: "Este campo no puede estar vacío.",
    })
    .max(100, {
      message: "La dirección no puede tener más de 100 caracteres.",
    }),
  bio: z.string().max(160).min(4),
  avatar: z.instanceof(File).optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
  name: "Juan Pérez",
  email: "juan@example.com",
  phone: "+1234567890",
  address: "Calle Principal 123, Ciudad",
  bio: "Soy un usuario activo en busca de servicios profesionales de calidad.",
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  })

  function onSubmit(data: ProfileFormValues) {
    toast.success("Perfil actualizado correctamente")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <FormField
                  control={form.control}
                  name="avatar"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Foto de perfil</FormLabel>
                      <FormControl>
                        <div className="flex flex-col items-center space-y-4">
                          <Avatar className="w-32 h-32">
                            <AvatarImage src={field.value ? URL.createObjectURL(field.value) : undefined} />
                            <AvatarFallback>JP</AvatarFallback>
                          </Avatar>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => field.onChange(e.target.files?.[0])}
                            className="w-full"
                          />
                        </div>
                      </FormControl>
                      <FormDescription>Sube una foto de perfil. Debe ser menor a 2MB.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="md:w-2/3 space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input placeholder="Tu nombre" {...field} className="pl-10" />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Este es tu nombre público. Puede ser tu nombre real o un seudónimo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input placeholder="tu@ejemplo.com" {...field} className="pl-10" />
                        </div>
                      </FormControl>
                      <FormDescription>Tu dirección de correo electrónico principal.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input placeholder="+1234567890" {...field} className="pl-10" />
                        </div>
                      </FormControl>
                      <FormDescription>Tu número de teléfono de contacto.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input placeholder="Tu dirección" {...field} className="pl-10" />
                        </div>
                      </FormControl>
                      <FormDescription>Tu dirección principal para los servicios.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <FileText className="absolute left-3 top-3 text-gray-400" />
                          <Textarea
                            placeholder="Cuéntanos un poco sobre ti"
                            className="min-h-[100px] pl-10 pt-2"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Puedes escribir una breve descripción sobre ti. Máximo 160 caracteres.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Button type="submit" className="w-full">
          Actualizar perfil
        </Button>
      </form>
    </Form>
  )
}

