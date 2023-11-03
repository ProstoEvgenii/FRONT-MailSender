export const getURL = function () {
  let url = "/api/History"
  // if (this.Static.params.sendAll) {
  //   url += "?sendAll=true"
  // }

  this.Static.record = []
  return url
}

export const makeRequest = async function () {
  let url = this.fn("getURL")

  const response = await fetch(url);
  this.Static.record = await response.json()
  this.init()

}
