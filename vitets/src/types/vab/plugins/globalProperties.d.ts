export { }

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // 代码补全
    $request: MyRequest.request,
    $baseTableHeight: (formType?: number) => number,
    $image: (src: string) => void
  }
}