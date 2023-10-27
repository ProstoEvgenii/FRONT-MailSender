
export const makeRequest = async function () {
  const response = await fetch("/api");
  this.Static.record = await response.json()
  this.Static.records.push(this.Static.record)
  this.init()
}
export const updateBD = async function () {
  const response = await fetch("/api/upload", {
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

