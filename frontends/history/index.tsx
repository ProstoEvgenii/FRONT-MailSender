import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.getURL = function () {
    let url = `/api/History?uuid=${localStorage.uuid}`
    Static.record = []
    return url
}


front.func.makeRequest = async function () {
    let url = Func.getURL()

    const response = await fetch(url);
    Static.response = await response.json()
    Static.records = Static.response.records


    if (!Static.records) {
        Static.records = []
        console.log('=8df5ac=', "Пустой массив")
        return
    }


    Static.limitPerPage = 15
    Static.pageCount = Math.ceil(Static.response.logsCount / Static.limitPerPage)
    Static.Pages = []
    for (let i = 1; i <= Static.pageCount; i++) {
        Static.Pages.push({ number: i, class: 'pagination-number ' })
    }
    Static.lastPage = Static.Pages.at(-1).number
    Static.Pages[Static.currentPage - 1].class += 'active'
    Fn.init()
}

front.loader = () => {
    Static.records = []

    Static.currentPage = 1

    Static.outertDigitsNumber = 2
    Static.Begin = 0
    Static.End = 5

    Static.test = 1
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