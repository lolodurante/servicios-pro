"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { User, Mail, Phone, Briefcase, Clock, DollarSign, FileText, Image } from "lucide-react"

const professionalProfileFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  profession: z.string().min(2).max(50),
  experience: z.string().min(1).max(3),
  hourlyRate: z.string().min(1),
  bio: z.string().max(500),
  avatar: z.instanceof(File).optional(),
  gallery: z.array(z.instanceof(File)).max(5, "Puedes subir hasta 5 imágenes").optional(),
})

type ProfessionalProfileFormValues = z.infer<typeof professionalProfileFormSchema>

const defaultValues: Partial<ProfessionalProfileFormValues> = {
  name: "Juan Pérez",
  email: "juan@example.com",
  phone: "+1234567890",
  profession: "Plomero",
  experience: "10",
  hourlyRate: "50",
  bio: "Plomero profesional con más de 10 años de experiencia en instalaciones y reparaciones.",
}

export function ProfessionalProfileForm() {
  const form = useForm<ProfessionalProfileFormValues>({
    resolver: zodResolver(professionalProfileFormSchema),
    defaultValues,
  })

  function onSubmit() {
    toast.success("Perfil profesional actualizado correctamente")
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
                      <FormLabel>Foto de perfil profesional</FormLabel>
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
                      <FormDescription>Sube una foto de perfil profesional. Debe ser menor a 2MB.</FormDescription>
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
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input {...field} className="pl-10" />
                        </div>
                      </FormControl>
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
                          <Input {...field} type="email" className="pl-10" />
                        </div>
                      </FormControl>
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
                          <Input {...field} className="pl-10" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profesión</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input {...field} className="pl-10" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Años de experiencia</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input {...field} type="number" className="pl-10" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hourlyRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tarifa por hora ($)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input {...field} type="number" className="pl-10" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Biografía profesional</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <FileText className="absolute left-3 top-3 text-gray-400" />
                          <Textarea {...field} className="min-h-[100px] pl-10 pt-2" />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Describe tu experiencia y especialidades. Máximo 500 caracteres.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gallery"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Galería de trabajos</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => field.onChange(Array.from(e.target.files || []))}
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Sube hasta 5 imágenes de tus trabajos anteriores. Cada imagen debe ser menor a 5MB.
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
          Actualizar perfil profesional
        </Button>
      </form>
    </Form>
  )
}

