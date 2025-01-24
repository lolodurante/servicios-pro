import type { Metadata } from "next"
import { ProfileForm } from "@/components/profile-form"
import { ProfessionalProfileForm } from "@/components/professional-profile-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mi Perfil | ServiciosPro",
  description: "Gestiona tu información personal y preferencias",
}

// En una aplicación real, esto vendría de la autenticación del usuario
const userType = "professional" // o "buyer"

export default function ProfilePage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="personal">Información Personal</TabsTrigger>
              {userType === "professional" && <TabsTrigger value="professional">Perfil Profesional</TabsTrigger>}
            </TabsList>
            <TabsContent value="personal">
              <ProfileForm />
            </TabsContent>
            {userType === "professional" && (
              <TabsContent value="professional">
                <ProfessionalProfileForm />
              </TabsContent>
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

