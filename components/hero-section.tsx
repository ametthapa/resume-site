import { Download, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site-config"

export function HeroSection() {
  const { personal, bio } = siteConfig

  return (
    <section id="about" className="mb-32 min-h-screen pt-20 lg:pt-0">
      <div className="relative">
        {/* Decorative gradient blobs */}
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"></div>
        <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-gradient-to-br from-chart-3/20 to-chart-4/20 blur-3xl"></div>

        <div className="relative mb-12 flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Profile Photo */}
          <div className="relative shrink-0">
            <div className="absolute -inset-2 animate-pulse rounded-full bg-gradient-to-r from-primary via-accent to-chart-3 opacity-75 blur-xl"></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-chart-3 opacity-90"></div>
            <img
              src={personal.profileImage || "/placeholder.svg"}
              alt={personal.name}
              className="relative h-56 w-56 rounded-full border-4 border-background object-cover shadow-2xl"
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Name and Title */}
            <div>
              <h1 className="mb-3 bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl">
                {personal.name}
              </h1>
              <p className="text-2xl font-semibold text-foreground lg:text-3xl">{personal.title}</p>
            </div>

            {/* Contact Info - Inline Style */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm lg:justify-start lg:gap-6">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-chart-1/20 to-chart-2/20 px-4 py-2 font-medium text-foreground transition-all hover:from-chart-1/30 hover:to-chart-2/30 hover:shadow-lg hover:shadow-chart-1/20"
              >
                <div className="rounded-full bg-gradient-to-br from-chart-1 to-chart-2 p-1.5">
                  <Mail className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="group-hover:text-chart-1">{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-chart-3/20 to-chart-4/20 px-4 py-2 font-medium text-foreground transition-all hover:from-chart-3/30 hover:to-chart-4/30 hover:shadow-lg hover:shadow-chart-3/20"
              >
                <div className="rounded-full bg-gradient-to-br from-chart-3 to-chart-4 p-1.5">
                  <Phone className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="group-hover:text-chart-3">{personal.phone}</span>
              </a>

              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 px-4 py-2 font-medium text-foreground">
                <div className="rounded-full bg-gradient-to-br from-accent to-primary p-1.5">
                  <MapPin className="h-3.5 w-3.5 text-white" />
                </div>
                <span>{personal.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 lg:justify-center">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary via-accent to-chart-3 font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
              >
                <a href={personal.resumePDF} download>
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="space-y-4 text-lg leading-relaxed text-foreground">
          {bio.paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </section>
  )
}
