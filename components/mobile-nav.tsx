"use client"

import { Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <div className="fixed left-0 right-0 top-0 z-50 lg:hidden">
      <div className="flex items-center justify-between border-b border-border bg-background/80 p-4 backdrop-blur-sm">
        <div>
          <h1 className="text-xl font-bold text-primary">Alex Morgan</h1>
          <p className="text-xs text-muted-foreground">Full Stack Developer</p>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-full">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-sm">
          <nav className="p-4">
            <ul className="space-y-3">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
