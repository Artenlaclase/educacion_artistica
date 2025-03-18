import Link from "next/link"
import { Palette, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Palette className="h-6 w-6" />
            <span className="font-bold text-lg">Prof. Raul Rosales</span>
          </Link>
          <p className="text-muted-foreground">Educación Artística y Artes Visuales</p>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-4">Enlaces</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="text-muted-foreground hover:text-primary transition-colors">
                Galería
              </Link>
            </li>
            <li>
              <Link href="/sobre-mi" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-4">Contacto</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>raul.rosales@ejemplo.com</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+123 456 7890</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 mt-1" />
              <span>
                Departamento de Artes Visuales
                <br />
                Universidad Ejemplo
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-4">Síguenos</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Prof. Raul Rosales. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

