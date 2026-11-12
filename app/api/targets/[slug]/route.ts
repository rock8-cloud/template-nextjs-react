import { getTarget } from '@/lib/targets'

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const target = getTarget(slug)

  if (!target) {
    return Response.json({ error: 'Target not found' }, { status: 404 })
  }

  return Response.json(target)
}
