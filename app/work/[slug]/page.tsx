import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectPageClient from './ProjectPageClient'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Divyesh Annavarapu`,
    description: project.summary,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()
  return <ProjectPageClient project={project} />
}
