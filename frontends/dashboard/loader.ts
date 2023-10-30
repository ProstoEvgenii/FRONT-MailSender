export const loader = function () {
    this.Static.records = []
    this.Static.usersAdded = []
    this.Static.usersAdded.count = null
    this.Static.birthdaysNumber = this.Static.record
    this.Static.params = {
        "sendAll": false
    }
    this.fn("makeRequest")
    
    return
}