export const loader = function () {
    // this.fn("printHello")
    this.fn("makeRequest")
    this.Static.settingsForm = {
        template: "",
        emailLogin: "",
        emailPass: "",
        smtp: "",
        port: 0
    }
    this.Static.eventForm = {
        name: "",
        templateName: "",
        sendAt: 0,
        from: "",
        subject: "",
        isDaily: false,
        day: 0,
        month: 0,
    }
    this.Static.postResponse = {
        documentsInserted: 0,
        documentsModified: 0
    }
    return
}
