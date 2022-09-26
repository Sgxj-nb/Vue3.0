export declare interface rou<T = any> {
  id: Number;
  name: string;
  path: string;
  pid: Number;
  meta?: T,
  component?: Function
}