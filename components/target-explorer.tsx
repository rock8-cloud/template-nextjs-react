'use client'

import { useState } from 'react'
import { TARGET_TYPES, type Target, type TargetType } from '@/data/targets'
import { filterTargets } from '@/lib/targets'
import { TargetCard } from './target-card'
import { TypeDot } from './type-badge'

const TYPE_IDS = Object.keys(TARGET_TYPES).filter((id): id is TargetType => id in TARGET_TYPES)

const chipClass = (active: boolean) =>
  `inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${
    active
      ? 'border-signal bg-signal text-void'
      : 'border-line text-mute hover:border-mute hover:text-ink'
  }`

export function TargetExplorer({ targets }: { targets: Target[] }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState<TargetType>()

  const visible = filterTargets(targets, { type, q: query })
  const filtered = query !== '' || type !== undefined

  const reset = () => {
    setQuery('')
    setType(undefined)
  }

  return (
    <section aria-label="Targets">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block lg:w-80">
          <span className="sr-only">Search targets</span>
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-mute"
          >
            <circle cx="9" cy="9" r="5.5" />
            <path d="m13.5 13.5 3.5 3.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or description"
            className="w-full rounded-lg border border-line bg-panel py-2 pr-3 pl-9 text-sm text-ink placeholder:text-mute/70 focus:border-signal focus:outline-none"
          />
        </label>

        <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={type === undefined}
            onClick={() => setType(undefined)}
            className={chipClass(type === undefined)}
          >
            All
          </button>
          {TYPE_IDS.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={type === id}
              onClick={() => setType(type === id ? undefined : id)}
              className={chipClass(type === id)}
            >
              {type !== id && <TypeDot type={id} />}
              {TARGET_TYPES[id]}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-6 font-mono text-xs tracking-wide text-mute uppercase">
        Showing {visible.length} of {targets.length}
      </p>

      {visible.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((target) => (
            <TargetCard key={target.slug} target={target} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-dashed border-line px-6 py-16 text-center">
          <p className="text-lg font-medium text-ink">Nothing out there matches</p>
          <p className="mt-2 text-sm text-mute">Try a different search or pick another type.</p>
          {filtered && (
            <button
              type="button"
              onClick={reset}
              className="mt-6 rounded-lg border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </section>
  )
}
