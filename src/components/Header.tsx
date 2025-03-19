"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Palette, Menu } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"
import { ThemeToggle } from "@/components/Theme-toggle"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { href: "/", label: "Inicio" },
    { href: "/blog", label: "Blog" },
    { href: "/galeria", label: "Galería" },
    { href: "/sobre-mi", label: "Sobre Mí" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Palette className="h-6 w-6" />
          <span className="font-bold text-lg">Prof. Raul Rosales</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === route.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      pathname === route.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

