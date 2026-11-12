const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 })
const compact = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'long',
  maximumSignificantDigits: 3,
})

const VOYAGER_YEARS_PER_LIGHT_YEAR = 17_600

export function formatNumber(value: number): string {
  return value >= 1_000_000 ? compact.format(value) : number.format(value)
}

export function formatDistance(lightYears: number): string {
  return `${formatNumber(lightYears)} ly`
}

export function formatVoyagerTravel(lightYears: number): string {
  const years = Number((lightYears * VOYAGER_YEARS_PER_LIGHT_YEAR).toPrecision(2))
  return `about ${formatNumber(years)} years`
}
