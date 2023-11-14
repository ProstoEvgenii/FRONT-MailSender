export const getURL = function () {
    let url = `/api/Settings?uuid=${localStorage.uuid}`

    return url
}

export const makeRequest = async function () {
    let url = this.fn("getURL")

    const response = await fetch(url);
    this.Static.data = await response.json()
    console.log('=6f7e12=', this.Static.data)
    this.init()

}


export const validateForm = function () {
    if (this.Static.settingsForm.emailLogin === "" || this.Static.settingsForm.emailPass === "" || this.Static.settingsForm.smtp === "" || this.Static.settingsForm.port === 0 || this.Static.settingsForm.port === "") {
        console.log('=386d17=', "Форма не заполнена полностью")

    } else {
        this.fn("updateSettings")
        this.fn("makeRequest")  
    }
}
export const validateFormEvent = function () {
    if (
        this.Static.eventForm.name === "" ||
        this.Static.eventForm.templateName === "" ||
        this.Static.eventForm.from === "" ||
        this.Static.eventForm.subject === "" ||
        this.Static.eventForm.day === 0 ||
        this.Static.eventForm.month === 0 ||
        this.Static.eventForm.sendAt === null  ||
        !this.Static.eventForm.month ||
        !this.Static.eventForm.day
    ) {
        console.log('=386d17=', "Форма не заполнена полностью")
    } else {
        this.fn("updateEvents")
        this.fn("makeRequest")
    }
}

export const updateEvents = async function () {
    const response = await fetch("/api/Events", {
        method: "POST",
        body: JSON.stringify(this.Static.eventForm)
    });
    this.Static.postResponse = await response.json()
    console.log('=150db9=', this.Static.postResponse)

    // if (!response.ok) {
    //   this.init()
    //   throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
    // }
    this.init()
}

export const updateSettings = async function () {
    const response = await fetch("/api/Settings", {
        method: "POST",
        body: JSON.stringify(this.Static.settingsForm)
    });
    this.Static.postResponse = await response.json()
    console.log('=150db9=', this.Static.postResponse)
    // if (!response.ok) {
    //   this.init()
    //   throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
    // }
    this.init()
}

