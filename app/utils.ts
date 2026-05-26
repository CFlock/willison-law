export function getImageUrl(path: string): string {
  return new URL(`./images/${path}`, import.meta.url).href
}