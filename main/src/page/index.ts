export declare interface rou<T> {
  id: Number;
  name: string;
  path: string;
  pid: Number;
  meta?: T,
  component?: Function
}