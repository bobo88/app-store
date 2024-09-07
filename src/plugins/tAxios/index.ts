import type { TAxiosRequestConfig, PlAxiosPromise } from './type'
import config from './config'
import http from './http'
const httpClient = (option: TAxiosRequestConfig) => {
  option.baseURL = config.baseUrl
  option.headers = Object.assign({}, config.defaultHeaders(), option.headers)
  return http(option)
}

export const getUrl = (url: string): string => {
  return url
}

//plAxios实列
const plAxiosInstance = {
  /**
   * get 请求
   * @param {TAxiosRequestConfig} option 参数
   * @returns {TAxiosRequestConfig<T>}返回值
   */
  get: <T>(option: TAxiosRequestConfig) => {
    option.url = getUrl(option.url)
    option.method = 'get'
    return httpClient(option) as unknown as PlAxiosPromise<T>
  },
  /**
   * post 请求
   * @param {TAxiosRequestConfig} option 参数
   * @returns {TAxiosRequestConfig<T>}返回值
   */
  post: <T>(option: TAxiosRequestConfig) => {
    option.url = getUrl(option.url)
    option.method = 'post'
    return httpClient(option) as unknown as PlAxiosPromise<T>
  }
}
export default plAxiosInstance
