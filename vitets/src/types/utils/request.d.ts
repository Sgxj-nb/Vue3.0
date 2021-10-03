/**
 * @创建请求所需类型
 * */

declare namespace MyRequest {
  interface response {
    code: number | string,
    msg: string,
    data: any
  }

  class request {
    /**
     * @post方法
     * @url 请求路径 (摸块接口.接口名称)
     * @param data 请求参数
     * @param config 请求配置
     * */

    public post(url: string, data?: any, config?: object): Promise<response>

    /**
     * @get方法
     * @url 请求路径 (摸块接口.接口名称)
     * @param data 请求参数
     * @param config 请求配置
     * */

    public get(url: string, params?: any, config?: object): Promise<response>
  }
}