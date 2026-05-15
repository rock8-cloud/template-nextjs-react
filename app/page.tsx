'use client'

import { useEffect, useState } from 'react'

interface SpaceTarget {
  id: number
  name: string
  type: string
  distance_light_years: number
}

export default function Home() {
  const [technology, setTechnology] = useState<string | null>(null)
  const [targets, setTargets] = useState<SpaceTarget[]>([])
  const [connected, setConnected] = useState<boolean | null>(null)

  useEffect(() => {
    Promise.all([
      fetch('/api/info').then(r => r.json()),
      fetch('/api/targets').then(r => r.json()),
    ])
      .then(([info, data]: [{ technology: string }, SpaceTarget[]]) => {
        setTechnology(info.technology)
        setTargets(data)
        setConnected(true)
      })
      .catch(() => setConnected(false))
  }, [])

  const dotClass = connected === null ? 'dot loading' : connected ? 'dot' : 'dot offline'
  const beLabel  = connected === null ? 'Connecting…' : connected ? technology! : 'Backend not connected'

  return (
    <div className="container">
      <div className="stars" />
      <div className="content">
        <div className="rocket">
          <span className="rocket-icon">🚀</span>
        </div>

        <h1>Space <span className="gradient">Targets</span></h1>

        <div className="badges">
          <div className="badge">
            <span className="dot" />
            <span>Next.js / React</span>
          </div>
          <div className="badge">
            <span className={dotClass} />
            <span>{beLabel}</span>
          </div>
        </div>

        {connected && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th className="right">Distance (ly)</th>
                </tr>
              </thead>
              <tbody>
                {targets.map(t => (
                  <tr key={t.id}>
                    <td>{t.name}</td>
                    <td>{t.type}</td>
                    <td className="right">{t.distance_light_years.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
