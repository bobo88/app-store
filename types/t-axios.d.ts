declare namespace T_AXIOS {
  interface TResponsePromise<T = any> {
    results: never[]
    code: number
    data: T extends Record<string, any> ? T : any
    feed?: T extends Record<string, any> ? T : any
    msg: string
    success?: string
    notSuccess?: string
    headers: Partial<PlResponseHeaders> & AxiosResponseHeaders
  }
  interface PlAxiosPromise<T> extends Promise<TResponsePromise<T>> {}
  type PlMethod = Method
}
