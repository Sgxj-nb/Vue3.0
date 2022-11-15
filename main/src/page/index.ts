export declare interface rou<T = any> {
  id: Number;
  name: string;
  path: string;
  pid: Number;
  meta?: T,
  component?: Function
}

export declare interface router<T = any> {
  name: string,
  children: Array<object>,
  path: string,
  component: T,
  CreatedAt: string,
  ID: number,
  UpdatedAt: string,
  hidden: ConstrainBooleanParameters,
  menuId: string,
  meta: Object,
  sort: number,
  parentId: string,
  authoritys: T,
  btns: T
}
