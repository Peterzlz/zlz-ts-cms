import { defineStore } from "pinia"
import getLoginDate from "@/services/login/login"

const useLoginStore = defineStore("login", {
  state: () => ({
    id: localStorage.getItem("id") ?? "",
    name: localStorage.getItem("name") ?? "",
    token: localStorage.getItem("token") ?? ""
  }),

  actions: {
    async fetchLoginDataAction(account: string, password: string) {
      const res = await getLoginDate(account, password)
      console.log(res.data)

      // 将登录接口获取到数据保存到状态state中
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token

      // 将登录接口获取到的数据保存到缓存中
      localStorage.setItem("id", this.id)
      localStorage.setItem("name", this.name)
      localStorage.setItem("token", this.token)
    }
  }
})

export default useLoginStore
