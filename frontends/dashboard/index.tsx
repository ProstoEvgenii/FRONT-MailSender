import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.getURL = function () {
    let url = `api/Dashboard?uuid=${localStorage.uuid}`

    if (Static.sendTemplate != null) {
        url += `&sendTemplate=${Static.sendTemplate}`
    }
    if (Static.sendTo != null) {
        url += `&sendTo=${Static.sendTo}`
    }
    Static.sendTemplate = null
    Static.sendTo = null
    return url
}
front.func.sendPost = async function (route, body) {
    const response = await fetch(`/api/${route}`, {
        method: "POST",
        body: body
    });
    var responseData = await response.json()
    Func.makeRequest()
    Fn.init()
    return responseData
}

front.func.updateBD = async function (route, body) {
    Static.usersAdded = await Func.sendPost(route, body)
}

front.func.updateTemplate = async function (route, body) {
    Static.TemplateAdded = await Func.sendPost(route, body)
    if (Static.TemplateAdded.documentsModified) {
        alert("Шаблон успешно обновлен.")
    } else if (Static.TemplateAdded.documentsInserted) {
        alert("Шаблон успешно добавлен.")
    }
}

front.func.makeRequest = async function () {
    let url = Func.getURL()
    const response = await fetch(url);
    Static.record = await response.json()
    Fn.init()
}

front.loader = () => {
    Static.record = []
    Static.usersAdded = []


    Static.sendTo = null
    Static.sendTemplate = null
    Func.makeRequest()
    return
}

front.display = () => {
    return (
        <main class="">
            <div class="wrapper">
                <Navigation />
            </div>
        </main>
    )
}

export { front }