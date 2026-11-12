import { targets } from '@/data/targets'

const MAX_LOG = Math.log10(Math.max(...targets.map((target) => target.distanceLightYears)))

export function DistanceScale({ lightYears }: { lightYears: number }) {
  const percent = Math.max(4, (Math.log10(lightYears) / MAX_LOG) * 100)

  return (
    <div aria-hidden className="h-px w-full bg-line">
      <div className="relative h-px bg-signal/70" style={{ width: `${percent}%` }}>
        <span className="absolute -top-[3px] right-0 size-[7px] rounded-full bg-signal" />
      </div>
    </div>
  )
}
