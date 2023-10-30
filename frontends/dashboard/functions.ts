export const getURL = function () {
  let url = "/api/Dashboard/"
  if (this.Static.params.sendAll) {
    url += "?sendAll=true"
  }
  
  this.Static.records = []
  this.Static.params.sendAll = false
  return url
}

export const makeRequest = async function () {
  let url = this.fn("getURL")

  const response = await fetch(url);
  this.Static.record = await response.json()
  // this.Static.records.push(this.Static.record)
  this.init()
  
  // console.log('=016d6e=',this.Static.records[0].sendEmail)
}

export const updateBD = async function () {
  const response = await fetch("/api/Dashboard/upload", {
    method: "POST",
    body: this.Static.formData
  });
  this.Static.usersAdded = await response.json()
  this.fn("makeRequest")
  // if (!response.ok) {
  //   this.init()
  //   throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
  // }
  this.init()
}

