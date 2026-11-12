import Link from 'next/link'

const NAV = [
  { href: '/', label: 'Targets' },
  { href: '/about', label: 'About' },
  { href: '/api/targets', label: 'API' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-line/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-ink">
          <svg aria-hidden viewBox="0 0 24 24" className="size-6 text-signal">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            <circle cx="12" cy="12" r="1.75" fill="currentColor" />
          </svg>
          Space Targets
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={item.href.startsWith('/api') ? false : undefined}
              className="rounded-md px-3 py-2 text-mute transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
