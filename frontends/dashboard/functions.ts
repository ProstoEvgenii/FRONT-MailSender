export const getURL = function () {
  let url = "/api/Dashboard"


  if (this.Static.sendTo != null) {
    url += `?sendTo=${this.Static.sendTo}`
  }

  console.log('=bd0042=',url)
  return url
}

export const makeRequest = async function () {
  let url = this.fn("getURL")

  const response = await fetch(url);
  this.Static.record = await response.json()
  this.init()

}

export const updateBD = async function () {
  const response = await fetch("/api/Dashboard", {
    method: "POST",
    body: this.Static.formData
  });
  this.Static.usersAdded = await response.json()
  console.log('=6dd074=', this.Static.usersAdded)
  this.fn("makeRequest")
  // if (!response.ok) {
  //   this.init()
  //   throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
  // }
  this.init()
}

