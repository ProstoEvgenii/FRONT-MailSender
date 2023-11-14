export const getURL = function () {

  let url = `/api/History?uuid=${localStorage.uuid}`


  this.Static.record = []
  // console.log('=abb828=',url)
  return url
}

export const makeRequest = async function () {
  let url = this.fn("getURL")

  const response = await fetch(url);
  this.Static.response = await response.json()
  // this.Static.currentPage = this.Static.response.pageNumber
  this.Static.records = this.Static.response.records
  // console.log('=2ced7f=',this.Static.records)


  if (!this.Static.records) {
    this.Static.records = []
    console.log('=8df5ac=', "Пустой массив")
    return
  }


  this.Static.limitPerPage = 15
  this.Static.pageCount = Math.ceil(this.Static.response.logsCount / this.Static.limitPerPage)
  this.Static.Pages = []
  for (let i = 1; i <= this.Static.pageCount; i++) {
    this.Static.Pages.push({ number: i, class: 'pagination-number ' })
  }
  this.Static.lastPage = this.Static.Pages.at(-1).number
  this.Static.Pages[this.Static.currentPage - 1].class += 'active'
  this.init()

}
