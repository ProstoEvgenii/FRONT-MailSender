import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.getURL = function () {
    let url = `/api/Settings?uuid=${localStorage.uuid}`
    if (Static.add) {
        url += `&templates=${Static.add}`
    }

    return url
}

front.func.makeRequest = async function () {

    let url = Func.getURL()

    const response = await fetch(url);
    Static.data = await response.json()
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
        Static.eventForm.sendAt == null ||
        !Static.eventForm.day ||
        !Static.eventForm.month
    ) {
        alert( "Форма не заполнена полностью")
    } else {
        Func.updateEvents(Static.eventForm)
        Func.makeRequest()
    }
}

front.func.updateEvents = async function (updateForm) {
    const response = await fetch("/api/Events", {
        method: "POST",
        body: JSON.stringify(updateForm)
    });
    Static.updateEventsResponse = await response.json()
    if(Static.updateEventsResponse.documentsModified){
        alert("Событие успешно обновлено.")
    }else if (Static.updateEventsResponse.documentsInserted){
        alert("Событие успешно добавлено.")
    }
    
    Fn.init()
}

front.func.updateSettings = async function () {
    const response = await fetch("/api/Settings", {
        method: "POST",
        body: JSON.stringify(Static.settingsForm)
    });
    Static.updateSettings = await response.json()
    Fn.init()
}

front.loader = () => {
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
        sendAt: null,
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