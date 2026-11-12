import { TargetExplorer } from '@/components/target-explorer'
import { TARGET_TYPES, targets } from '@/data/targets'
import { formatDistance } from '@/lib/format'

export default function HomePage() {
  const sorted = [...targets].sort((a, b) => a.distanceLightYears - b.distanceLightYears)
  const stats = [
    { label: 'Targets', value: String(targets.length) },
    { label: 'Types', value: String(Object.keys(TARGET_TYPES).length) },
    { label: 'Nearest', value: formatDistance(sorted[0].distanceLightYears) },
    { label: 'Farthest', value: formatDistance(sorted[sorted.length - 1].distanceLightYears) },
  ]

  return (
    <>
      <div className="mb-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl min-w-0 flex-1">
          <p className="font-mono text-xs tracking-widest text-signal uppercase">Field catalog</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Places worth pointing a telescope at
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-mute">
            Stars, planets, nebulae and a couple of black holes, sorted by how long their light takes to
            reach us.
          </p>
        </div>
        <dl className="grid shrink-0 grid-cols-2 gap-x-10 gap-y-6 sm:flex">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-xs tracking-wide text-mute uppercase">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight whitespace-nowrap tabular-nums">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <TargetExplorer targets={sorted} />
    </>
  )
}
