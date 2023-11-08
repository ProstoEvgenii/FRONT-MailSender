export const getURL = function () {
    let url = `/api/Settings?uuid=${localStorage.uuid}`

    // if (localStorage.uuid) {
    //     url += `?uuid=${localStorage.uuid}`
    // }


    this.Static.record = []
    console.log('=91f0aa=', url)
    return url
}

export const makeRequest = async function () {
    let url = this.fn("getURL")

    const response = await fetch(url);
    this.Static.record = await response.json()
    console.log('=6f7e12=', this.Static.record)
    this.init()

}


export const validateForm = function () {
    if (this.Static.settingsForm.emailLogin === "" || this.Static.settingsForm.emailPass === "" || this.Static.settingsForm.smtp === "" || this.Static.settingsForm.port === 0 || this.Static.settingsForm.port === "") {
        console.log('=386d17=', "Форма не заполнена полностью")

    } else {
        this.fn("updateSettings")
    }
}

export const updateSettings = async function () {
    const response = await fetch("/api/Settings", {
        method: "POST",
        body: JSON.stringify(this.Static.settingsForm)
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

