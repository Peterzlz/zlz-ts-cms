// export const BASE_URL = "http://123.207.32.32:5000"
// export const TIME_OUT = 10000

let BASE_URL = ""
if (process.env.NODE_ENV === "devolopment") {
  BASE_URL = "http://123.207.32.32:5000"
} else {
  BASE_URL = "http://123.207.32.32:5000"
}

export default BASE_URL
export const TIME_OUT = 10000
