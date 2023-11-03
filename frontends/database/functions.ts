export const getURL = function () {
  let url = "/api/Database"
  return url
}

export const makeRequest = async function () {
  let url = this.fn("getURL")

  const response = await fetch(url);
  this.Static.record = await response.json()
  this.Static.records = this.Static.record.records
  this.init()

}



