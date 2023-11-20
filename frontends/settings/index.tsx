import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.getURL = function () {
    let url = `/api/Settings?uuid=${localStorage.uuid}`
    if (Static.add != false) {
        url += `&tmplates=${Static.add}`
    }

    return url
}

front.func.makeRequest = async function () {

    let url = Func.getURL()

    const response = await fetch(url);
    Static.data = await response.json()
    console.log('=6f7e12=', Static.data)
    Fn.init()

}

front.func.validateForm = function () {
    if (Static.settingsForm.emailLogin === "" || Static.settingsForm.emailPass === "" || Static.settingsForm.smtp === "" || Static.settingsForm.port === 0 || Static.settingsForm.port === "") {
        console.log('=386d17=', "Форма не заполнена полностью")

    } else {
        Func.updateSettings()
        Func.makeRequest()
    }
}

front.func.validateFormEvent = function () {
    if (
        Static.eventForm.name === "" ||
        Static.eventForm.templateName === "" ||
        Static.eventForm.from === "" ||
        Static.eventForm.subject === "" ||
        Static.eventForm.day === 0 ||
        Static.eventForm.month === 0 ||
        Static.eventForm.sendAt === null ||
        !Static.eventForm.month ||
        !Static.eventForm.day
    ) {
        console.log('=386d17=', "Форма не заполнена полностью")
    } else {
        Func.updateEvents()
        Func.makeRequest()
    }
}



front.func.updateEvents = async function () {
    const response = await fetch("/api/Events", {
        method: "POST",
        body: JSON.stringify(Static.eventForm)
    });
    Static.postResponse = await response.json()
    console.log('=150db9=', Static.postResponse)

    // if (!response.ok) {
    //   this.init()
    //   throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
    // }
    Fn.init()
}

front.func.updateSettings = async function () {
    const response = await fetch("/api/Settings", {
        method: "POST",
        body: JSON.stringify(Static.settingsForm)
    });
    Static.postResponse = await response.json()
    console.log('=150db9=', Static.postResponse)
    // if (!response.ok) {
    //   this.init()
    //   throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
    // }
    Fn.init()
}

front.loader = () => {
    Static.getTempltes = false
    Static.arr = [
        11111,
        22222,
    ]
    Func.makeRequest()
    Static.settingsForm = {
        template: "",
        emailLogin: "",
        emailPass: "",
        smtp: "",
        port: 0
    }
    Static.add = false
    Static.eventForm = {
        name: "",
        templateName: "",
        sendAt: 0,
        from: "",
        subject: "",
        isDaily: false,
        day: 0,
        month: 0,
    }
    Static.postResponse = {
        documentsInserted: 0,
        documentsModified: 0
    }
    return
}

front.display = () => {
    return (
        <main class="info section">
            <div class="wrapper">
                <Navigation />
            </div>
        </main>
    )
}

export { front }