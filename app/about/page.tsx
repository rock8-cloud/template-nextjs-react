import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'What this starter contains and where to edit things.',
}

const FILES = [
  { path: 'data/targets.ts', text: 'The list of targets. Edit it to change what the site shows.' },
  { path: 'app/page.tsx', text: 'The home page with the search box and the type filter.' },
  { path: 'app/targets/[slug]/page.tsx', text: 'The detail page for one target.' },
  { path: 'app/api/', text: 'The JSON API: targets, one target and a health check.' },
  { path: 'components/', text: 'The header, the footer, the cards and the explorer.' },
  { path: 'app/globals.css', text: 'The colors and fonts, as Tailwind theme variables.' },
]

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-2xl">
      <p className="font-mono text-xs tracking-widest text-signal uppercase">About</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">A starter you can build on</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-mute">
        <p>
          Space Targets is a small Next.js app. It has a list page, detail pages, a JSON API and a shared
          layout. That is enough to show how the pieces fit together.
        </p>
        <p>
          There is no database and no setup. The data lives in one TypeScript file, so the app runs the
          moment it is deployed. Replace the data and the pages with your own.
        </p>
      </div>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Where to edit things</h2>
      <ul className="mt-4 divide-y divide-line rounded-lg border border-line bg-panel">
        {FILES.map((file) => (
          <li key={file.path} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:gap-6">
            <code className="shrink-0 font-mono text-sm text-signal sm:w-64">{file.path}</code>
            <span className="text-sm text-mute">{file.text}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-mute">
        Ready to look around?{' '}
        <Link href="/" className="text-ink underline decoration-line underline-offset-4 hover:text-signal">
          Browse the targets
        </Link>
        .
      </p>
    </article>
  )
}
