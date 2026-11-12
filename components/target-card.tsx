import Link from 'next/link'
import type { Target } from '@/data/targets'
import { formatDistance } from '@/lib/format'
import { DistanceScale } from './distance-scale'
import { TypeBadge } from './type-badge'

export function TargetCard({ target }: { target: Target }) {
  return (
    <Link
      href={`/targets/${target.slug}`}
      className="group flex flex-col rounded-lg border border-line bg-panel p-5 transition-colors hover:border-signal/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
    >
      <div className="flex items-center justify-between gap-4">
        <TypeBadge type={target.type} />
        <span className="font-mono text-xs text-ink tabular-nums">
          {formatDistance(target.distanceLightYears)}
        </span>
      </div>
      <h2 className="mt-4 text-xl font-semibold tracking-tight text-ink group-hover:text-signal">
        {target.name}
      </h2>
      <p className="mt-2 mb-5 text-sm leading-relaxed text-mute">{target.description}</p>
      <div className="mt-auto">
        <DistanceScale lightYears={target.distanceLightYears} />
      </div>
    </Link>
  )
}
