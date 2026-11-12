import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>Space Targets - a Next.js starter. Distances are rounded.</p>
        <p className="flex gap-5">
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <a href="/api/health" className="hover:text-ink">
            Health
          </a>
        </p>
      </div>
    </footer>
  )
}
