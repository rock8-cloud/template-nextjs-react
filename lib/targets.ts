import { TARGET_TYPES, targets, type Target, type TargetType } from '@/data/targets'

export interface TargetFilter {
  type?: TargetType
  q?: string
}

export function isTargetType(value: string): value is TargetType {
  return value in TARGET_TYPES
}

export function filterTargets(list: Target[], { type, q }: TargetFilter): Target[] {
  const query = q?.trim().toLowerCase() ?? ''

  return list.filter((target) => {
    if (type && target.type !== type) return false
    if (!query) return true
    return [target.name, target.description, TARGET_TYPES[target.type]].some((text) =>
      text.toLowerCase().includes(query),
    )
  })
}

export function getTarget(slug: string): Target | undefined {
  return targets.find((target) => target.slug === slug)
}

export function getNeighbors(slug: string): { nearer?: Target; farther?: Target } {
  const sorted = [...targets].sort((a, b) => a.distanceLightYears - b.distanceLightYears)
  const index = sorted.findIndex((target) => target.slug === slug)
  if (index === -1) return {}
  return { nearer: sorted[index - 1], farther: sorted[index + 1] }
}
