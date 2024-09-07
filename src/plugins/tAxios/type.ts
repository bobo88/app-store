import type { AxiosRequestConfig, AxiosResponseHeaders, Method } from 'axios'

export interface TAxiosRequestConfig<T = any> extends AxiosRequestConfig<T> {
  url: string
}
interface TResponseHeaders {
  'content-encoding': string
  'content-type': string
}
export interface TResponsePromise<T = any> {
  results: never[]
  code: number
  data: T extends Record<string, any> ? T : any
  feed?: T extends Record<string, any> ? T : any
  msg: string
  success?: string
  notSuccess?: string
  headers: Partial<TResponseHeaders> & AxiosResponseHeaders
}
export interface PlAxiosPromise<T> extends Promise<TResponsePromise<T>> {}
export type PlMethod = Method
