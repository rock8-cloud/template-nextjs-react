import type { NextRequest } from 'next/server'
import { TARGET_TYPES, targets } from '@/data/targets'
import { filterTargets, isTargetType } from '@/lib/targets'

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const type = searchParams.get('type') ?? undefined
  const q = searchParams.get('q') ?? undefined

  if (type !== undefined && !isTargetType(type)) {
    return Response.json(
      { error: `Unknown type. Use one of: ${Object.keys(TARGET_TYPES).join(', ')}` },
      { status: 400 },
    )
  }

  const result = filterTargets(targets, { type, q })
  return Response.json({ count: result.length, targets: result })
}
