import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Film } from "lucide-react"

// Datos de ejemplo para la galería
const visualArts = [
  {
    id: "pintura-1",
    title: "Composición abstracta",
    student: "María González",
    year: "2023",
    technique: "Acrílico sobre lienzo",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "escultura-1",
    title: "Forma orgánica",
    student: "Carlos Rodríguez",
    year: "2023",
    technique: "Arcilla",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "dibujo-1",
    title: "Estudio de luz y sombra",
    student: "Ana Martínez",
    year: "2022",
    technique: "Carboncillo sobre papel",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "grabado-1",
    title: "Texturas urbanas",
    student: "Pablo Sánchez",
    year: "2022",
    technique: "Xilografía",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "mixta-1",
    title: "Collage experimental",
    student: "Laura Pérez",
    year: "2023",
    technique: "Técnica mixta",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "pintura-2",
    title: "Paisaje onírico",
    student: "Miguel Fernández",
    year: "2022",
    technique: "Óleo sobre lienzo",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "digital-1",
    title: "Retrato digital",
    student: "Sofía López",
    year: "2023",
    technique: "Arte digital",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "fotografia-1",
    title: "Geometrías cotidianas",
    student: "Daniel Torres",
    year: "2022",
    technique: "Fotografía",
    image: "/placeholder.svg?height=600&width=800",
  },
]

const audiovisualProjects = [
  {
    id: "corto-1",
    title: "El viaje interior",
    students: "Grupo A - Taller de Cine",
    year: "2023",
    duration: "8 min",
    image: "/placeholder.svg?height=600&width=800",
    videoUrl: "#",
  },
  {
    id: "documental-1",
    title: "Memoria urbana",
    students: "Grupo B - Taller de Cine",
    year: "2023",
    duration: "12 min",
    image: "/placeholder.svg?height=600&width=800",
    videoUrl: "#",
  },
  {
    id: "animacion-1",
    title: "Metamorfosis",
    students: "Grupo C - Taller de Cine",
    year: "2022",
    duration: "5 min",
    image: "/placeholder.svg?height=600&width=800",
    videoUrl: "#",
  },
  {
    id: "experimental-1",
    title: "Fragmentos",
    students: "Grupo D - Taller de Cine",
    year: "2022",
    duration: "7 min",
    image: "/placeholder.svg?height=600&width=800",
    videoUrl: "#",
  },
  {
    id: "corto-2",
    title: "El último día",
    students: "Grupo E - Taller de Cine",
    year: "2023",
    duration: "10 min",
    image: "/placeholder.svg?height=600&width=800",
    videoUrl: "#",
  },
  {
    id: "documental-2",
    title: "Voces del barrio",
    students: "Grupo F - Taller de Cine",
    year: "2022",
    duration: "15 min",
    image: "/placeholder.svg?height=600&width=800",
    videoUrl: "#",
  },
]

export default function GaleriaPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Galería de Trabajos</h1>
        <p className="text-xl text-muted-foreground">
          Obras y proyectos realizados por estudiantes en las clases de artes visuales y el taller de cine
        </p>
      </div>

      <Tabs defaultValue="artes-visuales" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="artes-visuales" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Artes Visuales
          </TabsTrigger>
          <TabsTrigger value="audiovisuales" className="flex items-center gap-2">
            <Film className="h-4 w-4" />
            Audiovisuales
          </TabsTrigger>
        </TabsList>

        <TabsContent value="artes-visuales">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visualArts.map((artwork) => (
              <Link href={`/galeria/artes-visuales/${artwork.id}`} key={artwork.id}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="relative aspect-square">
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {artwork.student}, {artwork.year}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{artwork.technique}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="audiovisuales">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiovisualProjects.map((project) => (
              <Link href={`/galeria/audiovisuales/${project.id}`} key={project.id}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.students}, {project.year}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Duración: {project.duration}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

