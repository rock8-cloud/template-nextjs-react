import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <p className="font-mono text-xs tracking-widest text-signal uppercase">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Lost in space</h1>
      <p className="mt-3 text-mute">This page is not in the catalog. It may have moved or never existed.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg border border-line px-4 py-2 text-sm transition-colors hover:border-signal hover:text-signal"
      >
        Back to all targets
      </Link>
    </div>
  )
}
