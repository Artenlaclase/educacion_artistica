"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"
import { useToast } from "../../../hooks/use-toast"

export default function ContactoPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Responderé a tu mensaje lo antes posible.",
    })

    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarme. Estaré encantado de responder a tus
            inquietudes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
              <CardDescription>Escríbeme un correo</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">raul.rosales@ejemplo.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Teléfono
              </CardTitle>
              <CardDescription>Llámame o envía un mensaje</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">+123 456 7890</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Ubicación
              </CardTitle>
              <CardDescription>Dónde encontrarme</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Departamento de Artes Visuales
                <br />
                Universidad Ejemplo
                <br />
                Ciudad, País
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Envíame un mensaje</CardTitle>
            <CardDescription>
              Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="asunto">Asunto</Label>
                <Input
                  id="asunto"
                  name="asunto"
                  placeholder="Asunto de tu mensaje"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 p-8 bg-muted rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Horario de atención</h2>
          <p className="text-muted-foreground mb-4">
            Estoy disponible para consultas y reuniones en los siguientes horarios:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <div>
              <p className="font-medium">Lunes a Viernes</p>
              <p className="text-muted-foreground">9:00 - 17:00</p>
            </div>
            <div>
              <p className="font-medium">Sábados</p>
              <p className="text-muted-foreground">10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

