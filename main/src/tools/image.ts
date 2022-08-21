export function getImageUrl(name: string) {
  // 一定要通过相对路径才能得到完成的url
  return new URL(`./img/${name}`, import.meta.url).href
}