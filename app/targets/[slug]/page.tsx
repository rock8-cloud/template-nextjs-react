import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DistanceScale } from '@/components/distance-scale'
import { TypeBadge } from '@/components/type-badge'
import { TARGET_TYPES, targets, type Target } from '@/data/targets'
import { formatDistance, formatNumber, formatVoyagerTravel } from '@/lib/format'
import { getNeighbors, getTarget } from '@/lib/targets'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return targets.map((target) => ({ slug: target.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const target = getTarget(slug)
  if (!target) return { title: 'Target not found' }

  return {
    title: target.name,
    description: target.description,
    alternates: { canonical: `/targets/${target.slug}` },
    openGraph: { title: target.name, description: target.description, type: 'article' },
  }
}

function NeighborLink({ label, target }: { label: string; target?: Target }) {
  if (!target) return <span />

  return (
    <Link
      href={`/targets/${target.slug}`}
      className="group rounded-lg border border-line bg-panel p-4 transition-colors hover:border-signal/50"
    >
      <span className="font-mono text-xs tracking-wide text-mute uppercase">{label}</span>
      <span className="mt-1 block font-medium group-hover:text-signal">{target.name}</span>
    </Link>
  )
}

export default async function TargetPage({ params }: PageProps) {
  const { slug } = await params
  const target = getTarget(slug)
  if (!target) notFound()

  const { nearer, farther } = getNeighbors(target.slug)
  const facts = [
    { label: 'Type', value: TARGET_TYPES[target.type] },
    { label: 'Distance', value: formatDistance(target.distanceLightYears) },
    { label: 'Light left it', value: `${formatNumber(target.distanceLightYears)} years ago` },
    { label: 'Voyager 1 would need', value: formatVoyagerTravel(target.distanceLightYears) },
  ]

  return (
    <article className="mx-auto max-w-3xl">
      <Link href="/" className="text-sm text-mute transition-colors hover:text-ink">
        &larr; All targets
      </Link>

      <div className="mt-8">
        <TypeBadge type={target.type} />
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{target.name}</h1>
        <p className="mt-4 text-lg leading-relaxed text-mute">{target.description}</p>
      </div>

      <div className="mt-10">
        <DistanceScale lightYears={target.distanceLightYears} />
        <div className="mt-2 flex justify-between font-mono text-xs text-mute">
          <span>Sun</span>
          <span>log scale</span>
        </div>
      </div>

      <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-panel p-5">
            <dt className="font-mono text-xs tracking-wide text-mute uppercase">{fact.label}</dt>
            <dd className="mt-1 text-xl font-semibold tracking-tight tabular-nums">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <nav aria-label="Nearby targets" className="mt-10 grid grid-cols-2 gap-4">
        <NeighborLink label="Nearer" target={nearer} />
        <NeighborLink label="Farther" target={farther} />
      </nav>
    </article>
  )
}
