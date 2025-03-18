import Link from "next/link"
import Image from "next/image"
import { Palette, Film, BookOpen, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Arte y Educación"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Prof. Raul Rosales</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Educación Artística y Artes Visuales</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/blog">
                <BookOpen className="mr-2 h-5 w-5" />
                Blog
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/galeria">
                <Palette className="mr-2 h-5 w-5" />
                Galería
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-center">Destacados</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Blog Post */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=400&width=600" alt="Arte y educación" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <BookOpen className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">Blog</span>
              </div>
              <h3 className="text-xl font-bold mb-2">El arte como herramienta educativa</h3>
              <p className="text-muted-foreground mb-4">
                Explorando las posibilidades del arte como medio para el desarrollo integral...
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/arte-herramienta-educativa">Leer más</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Featured Gallery Item - Visual Art */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Obra de estudiante"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <Palette className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">Artes Visuales</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Exposición de Primavera</h3>
              <p className="text-muted-foreground mb-4">
                Colección de obras realizadas por estudiantes durante el semestre...
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/galeria/artes-visuales">Ver galería</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Featured Gallery Item - Film */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Proyecto audiovisual"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <Film className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">Taller de Cine</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cortometrajes Estudiantiles</h3>
              <p className="text-muted-foreground mb-4">
                Proyectos audiovisuales creados en el taller de cine por nuestros estudiantes...
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/galeria/audiovisuales">Ver proyectos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Profesor Raul Rosales"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Sobre el Profesor</h2>
              <p className="text-lg mb-6">
                El profesor Raul Rosales es un educador dedicado y artista visual con más de 15 años de experiencia en
                la enseñanza de artes visuales y educación artística. Su enfoque pedagógico combina la teoría con la
                práctica, fomentando la creatividad y el pensamiento crítico en sus estudiantes.
              </p>
              <Button asChild>
                <Link href="/sobre-mi">
                  <User className="mr-2 h-5 w-5" />
                  Conocer más
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

