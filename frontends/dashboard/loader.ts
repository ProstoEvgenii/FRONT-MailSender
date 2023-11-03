export const loader = function () {
    this.Static.record = []
    this.Static.usersAdded = []
    
    // if (!this.Static.usersAdded.documentsInserted){
    //     console.log('=71b308=',this.Static.usersAdded.documentsInserted)
    // }
    
    this.Static.SendAutoAt = null
    this.Static.sendTo = null
    this.fn("makeRequest")


    return
}