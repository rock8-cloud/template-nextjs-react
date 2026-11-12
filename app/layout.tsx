import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Space Targets',
    template: '%s - Space Targets',
  },
  description: 'A small catalog of places in space and how far away they are.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col bg-void font-sans text-ink antialiased">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 sm:py-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
