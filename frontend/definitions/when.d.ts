declare module "when" {
  export interface Promise {
    then(): this
    catch(): this
  }

  export function pipeline(promises: Array<Promise>): Promise

  export function promise(...args: any[]): Promise
}
