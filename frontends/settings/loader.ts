export const loader = function () {
    this.fn("printHello")
    this.fn("makeRequest")


    this.Static.settingsFormEmail = {

        template: "",
        emailLogin: "",
        emailPass: "",
        smtp: "",
        port: 0

    }
    this.Static.settingsFormNewEvent = {
        name: "",
        template: "",
        sendAt: 0,
        isDaily: false,
        date: "",
        month: "",
        active: false
    }


    this.Static.postResponse = {
        documentsInserted: 0,
        documentsModified: 0
    }
    return
}
