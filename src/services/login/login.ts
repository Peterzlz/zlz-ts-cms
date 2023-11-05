import hyRequest from ".."

function getLoginDate(account: string, password: string) {
  return hyRequest.post({
    url: "/login",
    data: {
      name: account,
      password: password
    }
  })
}

export default getLoginDate
