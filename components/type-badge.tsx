import { TARGET_TYPES, type TargetType } from '@/data/targets'

const DOT_COLORS: Record<TargetType, string> = {
  star: 'bg-amber-300',
  exoplanet: 'bg-emerald-400',
  nebula: 'bg-rose-400',
  cluster: 'bg-sky-400',
  'black-hole': 'bg-violet-400',
  galaxy: 'bg-orange-400',
}

export function TypeDot({ type }: { type: TargetType }) {
  return <span aria-hidden className={`size-1.5 shrink-0 rounded-full ${DOT_COLORS[type]}`} />
}

export function TypeBadge({ type }: { type: TargetType }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-mute uppercase">
      <TypeDot type={type} />
      {TARGET_TYPES[type]}
    </span>
  )
}
