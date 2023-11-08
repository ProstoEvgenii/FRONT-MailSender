export const loader = function () {
    this.Static.records = []

    this.Static.currentPage = 1

    this.Static.outertDigitsNumber = 2
    this.Static.Begin = 0
    this.Static.End = 5

    this.Static.test = 1

    this.fn("makeRequest")


    return
}