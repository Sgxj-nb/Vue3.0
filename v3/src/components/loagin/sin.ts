import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export interface Formname {
  username: string
  passsword: string
  loading: boolean
}

export const useSigninEffect = () => {
  const user = useRouter()

  const from = reactive<Formname>({
    username: '',
    passsword: '',
    loading: false
  })

  const onSubmit = (values: Formname) => {
    from.loading = true
  }
  return { ...toRefs(from), onSubmit }
}
