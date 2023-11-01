export const loader = function () {
    this.Static.record = []
    this.Static.usersAdded = []
    this.Static.usersAdded.documentsInserted = null

    this.Static.params = {
        "sendAll": false
    }

     this.fn("makeRequest")
    //  this.Static.birthdaysNumber = this.Static.records[0].sendEmail
    // console.log('=016d6e=',this.Static.records[0].sendEmail)
    // console.log('=55ec34=',"Переменная")
    console.log('=746716====================', this.Static.records)

    return
}