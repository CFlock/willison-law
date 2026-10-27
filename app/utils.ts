const images = import.meta.glob<string>("./images/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export function getImageUrl(path: string): string {
  return images[`./images/${path}`];
}