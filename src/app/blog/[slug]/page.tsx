import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarIcon, ArrowLeft, User, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: "arte-herramienta-educativa",
    title: "El arte como herramienta educativa",
    excerpt:
      "Explorando las posibilidades del arte como medio para el desarrollo integral de los estudiantes y su impacto en el proceso de aprendizaje.",
    date: "2023-05-15",
    category: "Educación",
    image: "/placeholder.svg?height=800&width=1200",
    author: "Raul Rosales",
    content: `
      <p>El arte ha sido reconocido a lo largo de la historia como una poderosa herramienta para el desarrollo humano. En el contexto educativo, su valor trasciende la mera enseñanza de técnicas artísticas para convertirse en un vehículo que potencia múltiples aspectos del desarrollo integral de los estudiantes.</p>
      
      <h2>Desarrollo cognitivo a través del arte</h2>
      
      <p>Cuando los estudiantes se involucran en procesos creativos, están ejercitando habilidades cognitivas fundamentales. La planificación de una obra artística, la resolución de problemas técnicos, la toma de decisiones estéticas y la evaluación constante del proceso creativo son actividades que estimulan el pensamiento crítico y analítico.</p>
      
      <p>Las artes visuales, en particular, fomentan la percepción espacial, la atención al detalle y la comprensión de conceptos abstractos como la proporción, el equilibrio y la armonía. Estos aprendizajes no quedan confinados al ámbito artístico, sino que se transfieren a otras áreas del conocimiento.</p>
      
      <h2>Desarrollo emocional y expresión personal</h2>
      
      <p>Quizás uno de los aspectos más valiosos del arte en la educación es su capacidad para proporcionar canales de expresión emocional. En un sistema educativo frecuentemente centrado en lo cognitivo, el arte ofrece espacios seguros donde los estudiantes pueden explorar, identificar y comunicar sus emociones.</p>
      
      <p>A través de la creación artística, los jóvenes desarrollan un lenguaje visual propio que les permite exteriorizar aquello que a veces resulta difícil de verbalizar. Este proceso no solo contribuye a su autoconocimiento, sino que también fortalece su inteligencia emocional y su capacidad de empatía.</p>
      
      <h2>Inclusión y diversidad en el aula de arte</h2>
      
      <p>El arte posee un extraordinario potencial inclusivo. En el aula de artes visuales, estudiantes con diferentes capacidades, estilos de aprendizaje y bagajes culturales pueden encontrar vías de participación y éxito. La flexibilidad inherente a los procesos creativos permite adaptar las propuestas a las necesidades específicas de cada estudiante.</p>
      
      <p>Además, el arte facilita el diálogo intercultural y la valoración de la diversidad. A través del estudio de manifestaciones artísticas de diferentes épocas y culturas, los estudiantes amplían su visión del mundo y desarrollan respeto por la pluralidad de expresiones humanas.</p>
      
      <h2>Implementación práctica en el aula</h2>
      
      <p>La integración efectiva del arte como herramienta educativa requiere un enfoque metodológico que trascienda la mera manualidad. Algunas estrategias que han demostrado ser efectivas incluyen:</p>
      
      <ul>
        <li>Proyectos interdisciplinarios que conecten el arte con otras áreas del currículum</li>
        <li>Aprendizaje basado en la indagación, donde los estudiantes exploran preguntas significativas a través de medios artísticos</li>
        <li>Rutinas de pensamiento visual que desarrollan la observación, la interpretación y el razonamiento</li>
        <li>Espacios de reflexión y metacognición sobre los procesos creativos</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>El arte no debería ser considerado un lujo o un complemento en la educación, sino un componente esencial para el desarrollo integral de los estudiantes. Su capacidad para estimular simultáneamente aspectos cognitivos, emocionales, sociales y culturales lo convierte en una herramienta educativa de valor incalculable.</p>
      
      <p>Como educadores, tenemos la responsabilidad de reivindicar el lugar del arte en nuestras aulas y de explorar su potencial transformador. Solo así podremos ofrecer a nuestros estudiantes una educación verdaderamente completa, que no solo les prepare académicamente, sino que también nutra su sensibilidad, su creatividad y su humanidad.</p>
    `,
  },
  {
    id: "tecnicas-pintura-aula",
    title: "Técnicas de pintura para implementar en el aula",
    excerpt:
      "Una guía práctica sobre diferentes técnicas de pintura que pueden ser adaptadas para estudiantes de distintas edades y niveles de habilidad.",
    date: "2023-04-22",
    category: "Técnicas Artísticas",
    image: "/placeholder.svg?height=800&width=1200",
    author: "Raul Rosales",
    content: "<p>Contenido del artículo sobre técnicas de pintura...</p>",
  },
  {
    id: "cine-como-expresion",
    title: "El cine como forma de expresión artística en la educación",
    excerpt:
      "Análisis sobre cómo el lenguaje cinematográfico puede ser utilizado como herramienta pedagógica y medio de expresión para los estudiantes.",
    date: "2023-03-10",
    category: "Audiovisual",
    image: "/placeholder.svg?height=800&width=1200",
    author: "Raul Rosales",
    content: "<p>Contenido del artículo sobre cine como expresión...</p>",
  },
  {
    id: "historia-arte-curriculum",
    title: "La historia del arte en el currículum escolar",
    excerpt:
      "Reflexiones sobre la importancia de incluir la historia del arte en la educación formal y estrategias para hacerla más accesible y relevante.",
    date: "2023-02-18",
    category: "Historia del Arte",
    image: "/placeholder.svg?height=800&width=1200",
    author: "Raul Rosales",
    content: "<p>Contenido del artículo sobre historia del arte...</p>",
  },
  {
    id: "creatividad-pensamiento-critico",
    title: "Fomentando la creatividad y el pensamiento crítico",
    excerpt:
      "Estrategias y actividades para desarrollar la creatividad y el pensamiento crítico a través de las artes visuales en diferentes contextos educativos.",
    date: "2023-01-25",
    category: "Pedagogía",
    image: "/placeholder.svg?height=800&width=1200",
    author: "Raul Rosales",
    content: "<p>Contenido del artículo sobre creatividad...</p>",
  },
  {
    id: "arte-digital-educacion",
    title: "Arte digital en la educación contemporánea",
    excerpt:
      "Explorando las posibilidades que ofrecen las herramientas digitales para la creación artística y su implementación en entornos educativos.",
    date: "2022-12-08",
    category: "Arte Digital",
    image: "/placeholder.svg?height=800&width=1200",
    author: "Raul Rosales",
    content: "<p>Contenido del artículo sobre arte digital...</p>",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-8 pl-0">
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary">
              {post.category}
            </span>
            <div className="flex items-center text-muted-foreground text-sm">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center mb-6">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image src="/placeholder.svg?height=100&width=100" alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm font-medium">{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <Separator className="my-12" />

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Categoría: </span>
            <Link
              href={`/blog/categoria/${post.category.toLowerCase()}`}
              className="text-sm font-medium ml-1 text-primary hover:underline"
            >
              {post.category}
            </Link>
          </div>

          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

