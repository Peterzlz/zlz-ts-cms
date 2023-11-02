// export const BASE_URL = "http://123.207.32.32:5000"
// export const TIME_OUT = 10000

let BASE_URL = ""
// 区分生产环境和开发环境的接口地址
if (import.meta.env.PROD) {
  BASE_URL = "http://codercba.com:5000" // 开发环境接口
} else {
  BASE_URL = "http://123.207.32.32:5000" // 生产环境接口
}

export { BASE_URL }
export const TIME_OUT = 10000
