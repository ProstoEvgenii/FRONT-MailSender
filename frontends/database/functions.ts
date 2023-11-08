export const getURL = function () {
  let url = "/api/Database"

  if (this.Static.currentPage != 0) {
    url += `?page=${this.Static.currentPage}`
  }
  return url
}

export const makeRequest = async function () {
  let url = this.fn("getURL")

  // console.log('=acaba4=', url)

  const response = await fetch(url);
  this.Static.response = await response.json()
  this.Static.currentPage = this.Static.response.pageNumber
  this.Static.records = this.Static.response.records


  if (!this.Static.records) {
    console.log('=8df5ac=', "Пустой массив")
    return
  }

  this.Static.pageCount = Math.ceil(this.Static.response.usersCount / 20)
  this.Static.Pages = []
  for (let i = 1; i <= this.Static.pageCount; i++) {
    this.Static.Pages.push({ number: i, class: 'pagination-number ' })
  }
  // if (this.Static.pageCount <=5){
  //   this.Ref.two_last.classList.add('hidden')

  // }

  this.Static.lastPage = this.Static.Pages.at(-1).number
  this.Static.Pages[this.Static.currentPage - 1].class += 'active'
  this.init()

}

export const pagination = function () {


  console.log('=3e1be4=', this.Static.currentPage)
  this.fn("makeRequest")

  if (this.Static.currentPage == this.Static.End && this.Static.currentPage <= this.Static.lastPage - 2) {
    this.Ref.first_two.classList.remove('hidden')
    this.Static.Begin += 2
    this.Static.End += 2
  } else if (this.Static.currentPage == this.Static.End - 1 && this.Static.currentPage >= 5 && this.Static.currentPage <= this.Static.lastPage - 2) {
    this.Static.Begin += 1
    this.Static.End += 1
  } else if (this.Static.Begin == 2 && this.Static.currentPage <= 4) {
    this.Ref.first_two.classList.add('hidden')
    this.Static.Begin -= 2
    this.Static.End -= 2
  } else if (this.Static.Begin == 3 && this.Static.currentPage <= 5) {
    this.Static.Begin -= 1
    this.Static.End -= 1
  } else if (this.Static.Begin >= 4 && this.Static.currentPage == this.Static.Begin + 2) {
    this.Static.Begin -= 1
    this.Static.End -= 1
  } else if (this.Static.Begin >= 4 && this.Static.currentPage == this.Static.Begin + 1) {
    this.Static.Begin -= 2
    this.Static.End -= 2
  }

  if (this.Static.currentPage >= this.Static.lastPage - 3) {
    this.Ref.two_last.classList.add('hidden')
  } else if (this.Static.currentPage <= this.Static.lastPage - 2) {
    this.Ref.two_last.classList.remove('hidden')
  }

  return
}


