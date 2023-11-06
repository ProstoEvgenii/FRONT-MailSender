import { Cemjsx } from "cemjs-all"
export default function () {
    // console.log('=c937e1=',this.Static.record.events_records?.IsDaily)
    return (
        <div class="settings">

            <div class="settings__fields__container" >
                <p class="settingsTitle">Настройка почты</p>
                <div class="settings__fields">
                    <input
                        value={this.Static.record ? this.Static.settingsFormEmail.template = this.Static.record.settings?.template : ""}
                        placeholder="Название шаблона письма"
                        ref="inputTemplateName"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsFormEmail.template = e.target.value
                        }}
                    />

                    <input
                        value={this.Static.record ? this.Static.settingsFormEmail.emailLogin = this.Static.record.settings?.emailLogin : ""}
                        placeholder="E-mail"

                        class="field__input"
                        type="text"
                        ref="inputEmail"
                        oninput={(e) => {
                            this.Static.settingsFormEmail.emailLogin = e.target.value
                        }}
                    />

                    <input
                        placeholder="Пароль почты"
                        ref="inputEmailPass"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsFormEmail.emailPass = e.target.value
                        }}
                    />

                    <input
                        placeholder="smtp"
                        value={this.Static.record ? this.Static.settingsFormEmail.smtp = this.Static.record.settings?.smtp : ""}
                        ref="inputSmtp"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsFormEmail.smtp = e.target.value
                        }}
                    />

                    <input
                        placeholder="Порт"
                        value={this.Static.record ? this.Static.settingsFormEmail.port = this.Static.record.settings?.port : ""}
                        ref="inputPort"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsFormEmail.port = e.target.value
                        }}
                    />

                    <button
                        class="butn btn__primary"
                        onclick={() => {
                            this.fn("validateSettingsForm")
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
            <table class="history_table">
                <thead >
                    <tr class="history_table-head">
                        <th class="history_table__cell">№</th>
                        <th class="history_table__cell">Название</th>
                        <th class="history_table__cell">Шаблон</th>
                        <th class="history_table__cell">Время отравки</th>
                        <th class="history_table__cell">Режим</th>
                        {/* <th class="history_table__cell">Дата</th>
                        <th class="history_table__cell">вкл/выкл</th> */}
                    </tr>
                </thead>
                <tbody class="history_table-body">
                    {/* <tr>
                        <button
                            class="butn btn__primary"
                            onclick={() => {

                                // console.log('=c5880a=', this.Ref.sendMode.value)
                                this.Static.settingsFormNewEvent.isDaily=this.Ref.sendMode.value
                                this.fn("validateEventForm")
                            }}
                        >
                            Сохранить настройки
                        </button>
                        <td class="history_table__cell">
                            <input
                                type="text"
                                ref="inputEventName"
                                oninput={(e) => {
                                    this.Static.settingsFormNewEvent.name = e.target.value
                                }}

                            />
                        </td>
                        <td class="history_table__cell"
                        >
                            <input
                                type="text"
                                oninput={(e) => {
                                    this.Static.settingsFormNewEvent.template = e.target.value
                                }}
                            />
                        </td>
                        <td class="history_table__cell"
                        >
                            <input
                                type="number"
                                min="1"
                                max="24"
                                oninput={(e) => {
                                    this.Static.settingsFormNewEvent.sendAt = e.target.value
                                }}
                            />
                        </td>
                        <td class="history_table__cell"
                        >
                            <select
                                name=""
                                ref="sendMode"
                                id=""
                            >
                                Режим отправки
                                <option value="daily">Ежедневно</option>
                                <option value="onDate">В указанную дату</option>
                            </select>
                        </td>
                        <td class="history_table__cell">
                            <input
                                type="text"
                                placeholder="День (например, 28)"
                                oninput={(e) => {
                                    this.Static.settingsFormNewEvent.date = e.target.value
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Месяц (например, 05)"
                                oninput={(e) => {
                                    this.Static.settingsFormNewEvent.month = e.target.value
                                }}
                            />
                        </td>
                        <td class="history_table__cell">
                            {/* <input
                                type="text"
                                oninput={(e) => {
                                    this.Static.settingsFormNewEvent.active = e.target.value
                                }}
                            /> */}
                        {/* </td>
                    </tr> */}
                    {

                        this.Static.record.events_records?.map((item, index) => {
                            return (

                                <tr>
                                    <td class="history_table__cell">{index + 1}</td>
                                    <td class="history_table__cell">{item.name}</td>
                                    <td class="history_table__cell">{item.template}</td>
                                    <td class="history_table__cell">{item.sendAt}</td>
                                    <td
                                        class="history_table__cell" value="GHb"
                                    >
                                        Ежедневно
                                        {/* <div>{item.isDaily == "daily"? }</div> */}
                                        
                                         {/* <div class="switch">
                                            <div class="switch__1">
                                                <input
                                                    id="switch-1"
                                                    type="checkbox"
                                                    ref="switch"
                                                    // checked={false}
                                                    onchange={(e) => {

                                                        // console.log('=f0eae2=', e.target.checked)
                                                        // e.target.checked = item.IsDaily
                                                    }}

                                                />
                                                <label for="switch-1"></label>
                                            </div>
                                        </div>  */}
                                    </td>
                                    {/* <td class="history_table__cell">{item.date}</td>
                                    <td class="history_table__cell">{item.active}</td> */}
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>



        </div>

    )
}