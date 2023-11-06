import { Cemjsx } from "cemjs-all"
export default function () {
    // console.log('=c937e1=',this.Static.postResponse)
    return (
        <div class="settings info section">

            <div class="settings__fields__container" >
                <p class="settingsTitle">Настройка почты</p>
                <div class="settings__fields">
                    <input
                        value={this.Static.record.template ? this.Static.settingsForm.template = this.Static.record.template : ""}
                        placeholder="Название шаблона письма"
                        ref="inputTemplateName"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsForm.template = e.target.value
                        }}
                    />

                    <input
                        value={this.Static.record.emailLogin ? this.Static.settingsForm.emailLogin = this.Static.record.emailLogin : ""}
                        placeholder="E-mail"
                        ref="inputEmail"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsForm.emailLogin = e.target.value
                        }}
                    />

                    <input
                        placeholder="Пароль почты"
                        ref="inputEmailPass"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsForm.emailPass = e.target.value
                        }}
                    />

                    <input
                        placeholder="smtp"
                        value={this.Static.record.smtp ? this.Static.settingsForm.smtp = this.Static.record.smtp : ""}
                        ref="inputSmtp"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsForm.smtp = e.target.value
                        }}
                    />

                    <input
                        placeholder="Порт"
                        value={this.Static.record.port ? this.Static.settingsForm.port = this.Static.record.port : ""}
                        ref="inputPort"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsForm.port = e.target.value
                        }}
                    />

                    <button
                        class="butn btn__primary"
                        onclick={() => {
                            this.fn("validateForm")
                        }}
                    >
                        Сохранить настройки
                    </button>
                    <div></div>

                    <div>
                        {
                            this.Static.postResponse.documentsInserted == 0 ? <div></div> :
                                <div>
                                    Настройки cохранены
                                </div>
                        }
                    </div>
                    <div>
                        {
                            this.Static.postResponse.documentsModified == 0 ? <div></div> :
                                <div>
                                    Настройки обновлены
                                </div>
                        }
                    </div>
                </div>
            </div>


        </div>

    )
}