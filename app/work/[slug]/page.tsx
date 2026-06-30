import { projects, getProjectBySlug } from '@/data/projects'
import { notFound } from 'next/navigation'
import ProjectPageClient from '@/components/ProjectPageClient'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: `${project.brand} — ${project.outcomeTitle.slice(0, 60)} | Divyesh Annavarapu`,
    description: project.decisionChanged.slice(0, 160),
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const idx = projects.findIndex(p => p.slug === params.slug)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return <ProjectPageClient project={project!} prev={prev} next={next} />
}
