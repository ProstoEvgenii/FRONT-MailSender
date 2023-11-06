export const getURL = function () {
    let url = "/api/Settings"
    // if (this.Static.params.sendAll) {
    //     url += "?sendAll=true"
    // }

    // this.Static.params.sendAll = false
    this.Static.record = []
    return url
}

export const makeRequest = async function () {
    let url = this.fn("getURL")

    const response = await fetch(url);
    this.Static.record = await response.json()
    console.log('=6f7e12=', this.Static.record.settings.template)
    this.init()

}


export const validateSettingsForm = function () {
    if (this.Static.settingsFormEmail.emailLogin === "" || this.Static.settingsFormEmail.emailPass === "" || this.Static.settingsFormEmail.smtp === "" || this.Static.settingsFormEmail.port === 0 || this.Static.settingsFormEmail.port === "") {
        console.log('=386d17=', "Форма не заполнена полностью")

    } else {
        this.fn("updateSettings")
    }
}

export const updateSettings = async function () {
    const response = await fetch("/api/Settings", {
        method: "POST",
        body: JSON.stringify(this.Static.settingsFormEmail)
    });
    this.Static.postResponse = await response.json()
    console.log('=150db9=', this.Static.postResponse)
    // this.fn("makeRequest")
    // if (!response.ok) {
    //   this.init()
    //   throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
    // }
    this.init()
}


export const validateEventForm = function () {
    if (this.Static.settingsFormNewEvent.name === "" || this.Static.settingsFormNewEvent.template === "" || this.Static.settingsFormNewEvent.sendAt === "" || this.Static.settingsFormNewEvent.sendAt === 0) {
        console.log('=386d17=', "Форма не заполнена полностью")

    } else {
        this.fn("updateEvents")
    }
}
export const updateEvents = async function () {
    const response = await fetch("/api/Events", {
        method: "POST",
        body: JSON.stringify(this.Static.settingsFormNewEvent)
    });
    this.Static.postResponse = await response.json()
    console.log('=150db9=', this.Static.postResponse)
    // this.fn("makeRequest")
    // if (!response.ok) {
    //   this.init()
    //   throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
    // }
    this.init()
}