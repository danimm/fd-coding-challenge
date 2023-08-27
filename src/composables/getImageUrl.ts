export function getImageUrl(imageName: string) {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href
}
