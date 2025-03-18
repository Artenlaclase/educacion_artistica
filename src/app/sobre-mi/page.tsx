import Image from "next/image"
import Link from "next/link"
import { CalendarDays, GraduationCap, Award, BookOpen, Palette, Film } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Separator } from "@/components/ui/Separator"

export default function SobreMiPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Profesor Raul Rosales"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Educación</p>
                    <p className="text-sm text-muted-foreground">Maestría en Artes Visuales</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Experiencia</p>
                    <p className="text-sm text-muted-foreground">15+ años en educación artística</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Especialidad</p>
                    <p className="text-sm text-muted-foreground">Artes visuales y audiovisuales</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <Button asChild className="w-full">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>

          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-6">Sobre Mí</h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                Soy Raul Rosales, profesor de Educación Artística y Artes Visuales con más de 15 años de experiencia en
                la enseñanza a nivel secundario y universitario. Mi pasión es fomentar la creatividad y el pensamiento
                crítico a través de las artes visuales y audiovisuales.
              </p>

              <p>
                Mi formación académica incluye una Licenciatura en Bellas Artes y una Maestría en Artes Visuales con
                especialización en Educación Artística. He complementado mi formación con diversos cursos y talleres en
                técnicas artísticas contemporáneas, cine y nuevos medios.
              </p>

              <p>
                Como artista visual, he participado en diversas exposiciones colectivas e individuales, explorando
                principalmente la pintura, la fotografía y el videoarte. Mi práctica artística nutre mi labor docente,
                permitiéndome compartir con mis estudiantes no solo conocimientos teóricos, sino también experiencias
                reales del mundo del arte.
              </p>

              <h2>Filosofía Educativa</h2>

              <p>
                Creo firmemente en el poder transformador del arte en la educación. Mi enfoque pedagógico se basa en:
              </p>

              <ul>
                <li>
                  <strong>Aprendizaje experiencial:</strong> Fomento la experimentación y el descubrimiento como vías
                  principales de aprendizaje.
                </li>
                <li>
                  <strong>Pensamiento crítico:</strong> Promuevo el análisis, la reflexión y el cuestionamiento a través
                  de la creación y apreciación artística.
                </li>
                <li>
                  <strong>Inclusión y diversidad:</strong> Valoro y celebro las diferentes perspectivas, estilos y
                  expresiones artísticas de cada estudiante.
                </li>
                <li>
                  <strong>Conexión con el contexto:</strong> Vinculo la práctica artística con la realidad social,
                  cultural e histórica de los estudiantes.
                </li>
              </ul>

              <h2>Áreas de Especialización</h2>

              <p>Mi labor docente se centra principalmente en las siguientes áreas:</p>

              <ul>
                <li>Educación artística y desarrollo de currículum</li>
                <li>Técnicas de pintura y dibujo</li>
                <li>Fotografía y artes visuales digitales</li>
                <li>Lenguaje cinematográfico y producción audiovisual</li>
                <li>Historia del arte contemporáneo</li>
                <li>Arte como herramienta de transformación social</li>
              </ul>

              <p>
                Además de mi labor en el aula, coordino el Taller de Cine, un espacio extracurricular donde los
                estudiantes exploran el lenguaje audiovisual y desarrollan proyectos cinematográficos desde la
                conceptualización hasta la postproducción.
              </p>

              <h2>Publicaciones y Conferencias</h2>

              <p>
                He publicado diversos artículos sobre educación artística en revistas especializadas y he participado
                como ponente en conferencias y seminarios sobre arte y educación a nivel nacional e internacional.
              </p>

              <p>
                A través de este sitio web, busco compartir recursos, reflexiones y experiencias que puedan ser útiles
                para otros educadores, estudiantes y personas interesadas en el arte y la educación artística.
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-16" />

        <h2 className="text-3xl font-bold mb-8 text-center">Áreas de Especialización</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Palette className="h-6 w-6 text-primary" />
              <div>
                <CardTitle>Artes Visuales</CardTitle>
                <CardDescription>Técnicas y expresión</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enseñanza de diversas técnicas artísticas como pintura, dibujo, escultura y artes digitales, fomentando
                la expresión personal y el dominio técnico.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Film className="h-6 w-6 text-primary" />
              <div>
                <CardTitle>Producción Audiovisual</CardTitle>
                <CardDescription>Lenguaje cinematográfico</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Formación en narrativa audiovisual, técnicas de filmación, edición y postproducción para la creación de
                cortometrajes y proyectos audiovisuales.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <div>
                <CardTitle>Historia del Arte</CardTitle>
                <CardDescription>Análisis y contexto</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Estudio de movimientos artísticos, artistas relevantes y contextos históricos, con énfasis en el arte
                moderno y contemporáneo y su influencia en la cultura actual.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en colaborar?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estoy abierto a colaboraciones en proyectos educativos, artísticos o de investigación relacionados con el
            arte y la educación.
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

