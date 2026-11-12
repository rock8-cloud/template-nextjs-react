export const TARGET_TYPES = {
  star: 'Star',
  exoplanet: 'Exoplanet',
  nebula: 'Nebula',
  cluster: 'Star cluster',
  'black-hole': 'Black hole',
  galaxy: 'Galaxy',
} as const

export type TargetType = keyof typeof TARGET_TYPES

export interface Target {
  slug: string
  name: string
  type: TargetType
  distanceLightYears: number
  description: string
}

export const targets: Target[] = [
  {
    slug: 'proxima-centauri',
    name: 'Proxima Centauri',
    type: 'star',
    distanceLightYears: 4.25,
    description: 'The closest star to the Sun, a small red dwarf too faint to see without a telescope.',
  },
  {
    slug: 'vega',
    name: 'Vega',
    type: 'star',
    distanceLightYears: 25.04,
    description: 'A bright blue-white star in Lyra that was the northern pole star about 14,000 years ago.',
  },
  {
    slug: 'trappist-1e',
    name: 'TRAPPIST-1e',
    type: 'exoplanet',
    distanceLightYears: 40.7,
    description: 'A rocky, Earth-sized planet in the habitable zone of a cool red dwarf with seven planets.',
  },
  {
    slug: '51-pegasi-b',
    name: '51 Pegasi b',
    type: 'exoplanet',
    distanceLightYears: 50.6,
    description: 'A hot gas giant and the first planet found around a Sun-like star, back in 1995.',
  },
  {
    slug: 'pleiades',
    name: 'Pleiades',
    type: 'cluster',
    distanceLightYears: 444,
    description: 'A young open cluster of hot blue stars, known as the Seven Sisters and easy to spot by eye.',
  },
  {
    slug: 'betelgeuse',
    name: 'Betelgeuse',
    type: 'star',
    distanceLightYears: 550,
    description: 'A red supergiant on the shoulder of Orion that will end its life as a supernova.',
  },
  {
    slug: 'orion-nebula',
    name: 'Orion Nebula',
    type: 'nebula',
    distanceLightYears: 1344,
    description: 'A glowing cloud of gas and dust where new stars are forming, visible below the belt of Orion.',
  },
  {
    slug: 'crab-nebula',
    name: 'Crab Nebula',
    type: 'nebula',
    distanceLightYears: 6500,
    description: 'The expanding remains of a supernova seen in 1054, with a fast spinning pulsar at its center.',
  },
  {
    slug: 'cygnus-x-1',
    name: 'Cygnus X-1',
    type: 'black-hole',
    distanceLightYears: 7200,
    description: 'The first widely accepted black hole, pulling gas from a blue supergiant companion.',
  },
  {
    slug: 'omega-centauri',
    name: 'Omega Centauri',
    type: 'cluster',
    distanceLightYears: 17000,
    description: 'The largest globular cluster in the Milky Way, packed with around ten million stars.',
  },
  {
    slug: 'sagittarius-a-star',
    name: 'Sagittarius A*',
    type: 'black-hole',
    distanceLightYears: 26000,
    description: 'The supermassive black hole at the center of the Milky Way, four million times the mass of the Sun.',
  },
  {
    slug: 'andromeda-galaxy',
    name: 'Andromeda Galaxy',
    type: 'galaxy',
    distanceLightYears: 2500000,
    description: 'The nearest large spiral galaxy, on course to merge with the Milky Way in a few billion years.',
  },
]
