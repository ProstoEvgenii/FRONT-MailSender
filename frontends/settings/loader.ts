export const loader = function () {
    this.fn("makeRequest")
    this.Static.settingsForm = {
        template: "",
        emailLogin: "",
        emailPass: "",
        smtp: "",
        port: 0
    }
    return
}
