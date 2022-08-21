import { AxiosInstance } from 'axios'
import '@vue/runtime-core'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $ajax: AxiosInstance;
  }
}
