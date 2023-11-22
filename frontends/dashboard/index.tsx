import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.getURL = function () {
    let url = `api/Dashboard?uuid=${localStorage.uuid}`
    if (Static.sendTo != null) {
        url += `&sendTo=${Static.sendTo}`
    }
    if (Static.SendAutoAt != null) {
        url += `&sendAutoAt=${Static.SendAutoAt}`
    }

    Static.SendAutoAt = null
    Static.sendTo = null
    return url
}
front.func.sendPost = async function (route, body) {
    // console.log('=a115f2=', route, body)
    const response = await fetch(`/api/${route}`, {
        method: "POST",
        body: body
    });
    var responseData = await response.json()
    Func.makeRequest()
    Fn.init()
    // if (!response.ok) {
    //   this.init()
    //   throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
    // }
    return responseData

}

front.func.updateBD = async function (route, body) {
    Static.usersAdded = Func.sendPost(route, body)
}

front.func.updateTemplate = async function (route, body) {
    Static.TemplateAdded = Func.sendPost(route, body)
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


    Static.SendAutoAt = null
    Static.sendTo = null
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