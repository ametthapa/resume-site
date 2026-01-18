import { Navigation } from "@/components/navigation"
import { MobileNav } from "@/components/mobile-nav"
import { HeroSection } from "@/components/hero-section"
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site-config"

export default function Home() {
  const { experience, projects, contact, social, footer, personal, education } = siteConfig

  return (
    <div className="min-h-screen">
      <Navigation />
      <MobileNav />

      <main className="ml-0 lg:ml-64">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-24">
          {/* About Section */}
          <HeroSection />

          {/* Experience Section */}
          <section id="experience" className="mb-32 min-h-screen">
            <h2 className="mb-12 text-3xl font-bold text-primary">Experience</h2>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-l-4 border-l-${job.colorScheme} border-t-border bg-card p-6 shadow-lg shadow-${job.colorScheme}/5 transition-all hover:border-l-${job.colorScheme} hover:bg-secondary hover:shadow-xl hover:shadow-${job.colorScheme}/10`}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className={`text-sm font-medium text-${job.colorScheme}`}>{job.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-card-foreground">{job.title}</h3>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 flex items-center gap-2 font-medium text-primary hover:text-accent"
                      >
                        {job.company}
                        {/* <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
                      </a>
                    </div>
                  </div>
                  <ul className="mb-4 leading-relaxed text-muted-foreground list-disc pl-5">
                    {job.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => {
                      const colors = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]
                      const color = colors[techIndex % colors.length]
                      return (
                        <span
                          key={techIndex}
                          className={`rounded-full bg-${color}/20 px-3 py-1 text-xs font-semibold text-${color} ring-1 ring-${color}/30`}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-32 min-h-screen">
            <h2 className="mb-12 text-3xl font-bold text-primary">Education</h2>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-l-4 border-l-${edu.colorScheme} border-t-border bg-card p-6 shadow-lg shadow-${edu.colorScheme}/5 transition-all hover:border-l-${edu.colorScheme} hover:bg-secondary hover:shadow-xl hover:shadow-${edu.colorScheme}/10`}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className={`text-sm font-medium text-${edu.colorScheme}`}>{edu.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-card-foreground">{edu.courseName}</h3>
                      <a
                        href={edu.universityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 flex items-center gap-2 font-medium text-primary hover:text-accent"
                      >
                        {edu.university}
                        {/* <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
                      </a><small>{edu.location}</small>
                      
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          {/* <section id="projects" className="mb-32 min-h-screen">
            <h2 className="mb-12 text-3xl font-bold text-primary">Featured Projects</h2>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-${project.colorScheme}/10 via-transparent to-transparent p-[2px] transition-all hover:from-${project.colorScheme}/30 hover:via-${project.colorScheme}/20 hover:to-transparent`}
                >
                  <div className="flex h-full flex-col gap-6 rounded-2xl bg-card p-6 lg:flex-row">
                    <div className="flex-1">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-2 flex items-center gap-2 text-2xl font-semibold text-card-foreground hover:text-primary"
                      >
                        {project.title}
                        <ArrowUpRight
                          className={`h-5 w-5 text-${project.colorScheme} transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`}
                        />
                      </a>
                      <p className="mb-4 leading-relaxed text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => {
                          const colors = ["chart-1", "chart-5", "chart-2", "chart-4"]
                          const color = colors[techIndex % colors.length]
                          return (
                            <span
                              key={techIndex}
                              className={`rounded-full bg-${color}/20 px-3 py-1 text-xs font-semibold text-${color} ring-1 ring-${color}/30`}
                            >
                              {tech}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                    <div
                      className={`h-48 w-full overflow-hidden rounded-xl bg-muted ring-2 ring-${project.colorScheme}/20 lg:h-auto lg:w-64`}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section> */}

          {/* Contact Section */}
          <section id="contact" className="min-h-screen pb-20">
            <h2 className="mb-12 text-3xl font-bold text-primary">{contact.title}</h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">{contact.description}</p>

              <Card className="overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-primary/10 via-accent/10 to-chart-3/10 p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-sm font-medium text-muted-foreground">Email</h3>
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent hover:underline"
                    >
                      <Mail className="h-5 w-5" />
                      {personal.email}
                    </a>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-medium text-muted-foreground">Connect With Me</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-chart-1 text-chart-1 hover:bg-chart-1/10 bg-transparent"
                      >
                        <a href={social.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-chart-2 text-chart-2 hover:bg-chart-2/10 bg-transparent"
                      >
                        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                      {/* <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-chart-3 text-chart-3 hover:bg-chart-3/10 bg-transparent"
                      >
                        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="mr-2 h-4 w-4" />
                          Twitter
                        </a>
                      </Button> */}
                    </div>
                  </div>
                </div>
              </Card>

              <div className="mt-16 space-y-4">
                <div className="rounded-lg border border-border bg-card p-6 text-center">
                  <p className="mb-2 text-sm font-medium text-foreground">
                    Built with passion using modern technologies
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {footer.builtWith.map((tech, index) => {
                      const colors = ["chart-1", "chart-2", "chart-3", "chart-4"]
                      const color = colors[index % colors.length]
                      return (
                        <span
                          key={index}
                          className={`rounded-full bg-${color}/20 px-3 py-1 text-xs font-semibold text-${color}`}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
