export const loader = function () {
    this.Static.records = []
    this.Static.usersAdded = []
    this.Static.usersAdded.count = null
    this.fn("makeRequest")
    
    return
}