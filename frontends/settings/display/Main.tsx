import { Cemjsx } from "cemjs-all"
export default function () {
    return (
        <div class="home home_container">
            <div>
                {/* <p><b>Название шаблона письма:</b></p> */}
                <input
                    value={this.Static.record.template ? this.Static.record.template : ""}
                    placeholder="Название шаблона письма"
                    ref="inputTemplateName"
                    type="text"
                    oninput={(e) => {
                        this.Static.settingsForm.template = e.target.value
                    }}
                />
                <br />
                <input
                    value={this.Static.record.emailLogin ? this.Static.record.emailLogin : ""}
                    placeholder="E-mail"
                    ref="inputEmail"
                    type="text"
                    oninput={(e) => {
                        this.Static.settingsForm.emailLogin = e.target.value

                    }}
                />
                <br />
                <input
                    placeholder="Пароль почты"
                    ref="inputEmailPass"
                    type="text"
                    oninput={(e) => {
                        this.Static.settingsForm.emailPass = e.target.value
                    }}
                />
                <br />
                <input
                    placeholder="smtp"
                    value={this.Static.record.smtp ? this.Static.record.smtp : ""}
                    ref="inputSmtp"
                    type="text"
                    oninput={(e) => {

                        this.Static.settingsForm.smtp = e.target.value

                    }}
                />
                <br />
                <input
                    placeholder="Порт"
                    value={this.Static.record.port ? this.Static.record.port : ""}
                    ref="inputPort"
                    type="text"
                    oninput={(e) => {
                        this.Static.settingsForm.port = e.target.value

                    }}
                />
                <br />
                <button
                    onclick={() => {
                        this.fn("validateForm")
                    }}
                >
                    Сохранить настройки
                </button>
            </div>
        </div>

    )
}