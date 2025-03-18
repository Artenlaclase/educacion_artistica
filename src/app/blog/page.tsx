import Link from "next/link"
import Image from "next/image"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/Card"

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: "arte-herramienta-educativa",
    title: "El arte como herramienta educativa",
    excerpt:
      "Explorando las posibilidades del arte como medio para el desarrollo integral de los estudiantes y su impacto en el proceso de aprendizaje.",
    date: "2023-05-15",
    category: "Educación",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "tecnicas-pintura-aula",
    title: "Técnicas de pintura para implementar en el aula",
    excerpt:
      "Una guía práctica sobre diferentes técnicas de pintura que pueden ser adaptadas para estudiantes de distintas edades y niveles de habilidad.",
    date: "2023-04-22",
    category: "Técnicas Artísticas",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "cine-como-expresion",
    title: "El cine como forma de expresión artística en la educación",
    excerpt:
      "Análisis sobre cómo el lenguaje cinematográfico puede ser utilizado como herramienta pedagógica y medio de expresión para los estudiantes.",
    date: "2023-03-10",
    category: "Audiovisual",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "historia-arte-curriculum",
    title: "La historia del arte en el currículum escolar",
    excerpt:
      "Reflexiones sobre la importancia de incluir la historia del arte en la educación formal y estrategias para hacerla más accesible y relevante.",
    date: "2023-02-18",
    category: "Historia del Arte",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "creatividad-pensamiento-critico",
    title: "Fomentando la creatividad y el pensamiento crítico",
    excerpt:
      "Estrategias y actividades para desarrollar la creatividad y el pensamiento crítico a través de las artes visuales en diferentes contextos educativos.",
    date: "2023-01-25",
    category: "Pedagogía",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "arte-digital-educacion",
    title: "Arte digital en la educación contemporánea",
    excerpt:
      "Explorando las posibilidades que ofrecen las herramientas digitales para la creación artística y su implementación en entornos educativos.",
    date: "2022-12-08",
    category: "Arte Digital",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog de Arte y Educación</h1>
        <p className="text-xl text-muted-foreground">
          Reflexiones, recursos y experiencias sobre la educación artística y las artes visuales
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="p-6 flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                  {post.category}
                </span>
                <div className="flex items-center text-muted-foreground text-xs">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button asChild variant="outline" className="w-full">
                <Link href={`/blog/${post.id}`}>Leer artículo</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

