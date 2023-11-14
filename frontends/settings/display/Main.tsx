import { Cemjsx } from "cemjs-all"


const RenderTable = function ({ items }) {

  if (!items) {
    return (
      <tbody class="history_table-body">
        <tr>
          <td>События не найдены.</td>
        </tr>
      </tbody>
    )
  }
  return (
    <tbody class="history_table-body">
      {
        items.map((item, index) => {
          return (
            <tr>
              <td class="history_table__cell">{index + 1}</td>
              <td class="history_table__cell" >{item.name}</td>
              <td class="history_table__cell" >{item.from}</td>
              <td class="history_table__cell" >{item.subject}</td>
              <td class="history_table__cell">
                {item.templateName}
              </td>
              <td class="history_table__cell">
                {item.sendAt}
              </td>
              <td class="history_table__cell">{item.isDaily ? "Ежедневно" : `${item.day}.${item.month}`}</td>
              <td class="history_table__cell">{item.Email}</td>
              <td><button
                onclick={() => {
                  console.log('=f5e25d=', item.name)
                }}
              ></button></td>
            </tr>
          )
        })
      }
    </tbody>
  )
}
export default function () {
  return (
    <div class="settings info section">

      <div class="settings__fields__container" >
        <p class="settingsTitle">Настройка почты</p>
        <div class="settings__fields">
          {/* <input
                        value={this.Static.data.template ? this.Static.settingsForm.template = this.Static.data.template : ""}
                        placeholder="Название шаблона письма"
                        ref="inputTemplateName"
                        class="field__input"
                        type="text"
                        oninput={(e) => {
                            this.Static.settingsForm.template = e.target.value
                        }}
                    /> */}

          <input
            value={this.Static.data ? this.Static.settingsForm.emailLogin = this.Static.data.emailLogin : ""}
            placeholder="E-mail"
            ref="inputEmail"
            class="field__input"
            type="text"
            oninput={(e) => {
              this.Static.settingsForm.emailLogin = e.target.value
            }}
          />

          <input
            placeholder="Пароль приложения"
            ref="inputEmailPass"
            class="field__input"
            type="text"
            oninput={(e) => {
              this.Static.settingsForm.emailPass = e.target.value
            }}
          />

          <input
            placeholder="smtp"
            value={this.Static.data ? this.Static.settingsForm.smtp = this.Static.data.smtp : ""}
            ref="inputSmtp"
            class="field__input"
            type="text"
            oninput={(e) => {
              this.Static.settingsForm.smtp = e.target.value
            }}
          />

          <input
            placeholder="Порт"
            value={this.Static.data ? this.Static.settingsForm.port = this.Static.data.port : ""}
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
      <button
        class="butn btn__primary "
        onclick={() => {

          this.Ref.newEvent.classList.remove("hidden")

        }}
      >
        Добавить
      </button>
      <table class="history_table">
        <thead >
          <tr class="history_table-head">
            <th class="history_table__cell">№</th>
            <th class="history_table__cell">Название</th>
            <th class="history_table__cell">Отправитель</th>
            <th class="history_table__cell">Тема письма</th>
            <th class="history_table__cell">Шаблон</th>
            <th class="history_table__cell">Время отравки</th>
            <th class="history_table__cell">Дата отправки(dd.mm)</th>
            <th class="history_table__cell">Вкл/Выкл</th>
          </tr>
          <tr ref="newEvent" class="hidden">
            <td class="history_table__cell">
            </td>
            <td class="history_table__cell">
              <input
                placeholder=""
                ref="inputTime"
                class="field__input "
                type="text"
                oninput={(e) => {
                  this.Static.eventForm.name = e.target.value
                }}
              />
            </td>
            <td class="history_table__cell">
              <input
                placeholder=""
                ref="inputTime"
                class="field__input "
                type="text"
                oninput={(e) => {
                  this.Static.eventForm.from = e.target.value
                }}
              />
            </td>
            <td class="history_table__cell">
              <input
                placeholder=""
                ref="inputTime"
                class="field__input "
                type="text"
                oninput={(e) => {
                  this.Static.eventForm.subject = e.target.value
                }}
              />
            </td>
            <td class="history_table__cell">
              <input
                placeholder=""
                ref="inputTime"
                class="field__input "
                type="text"
                oninput={(e) => {
                  this.Static.eventForm.templateName = e.target.value
                  console.log('=b300e5=', e.target.value)
                }}
              />
            </td>
            <td class="history_table__cell">
              <input
                placeholder=""
                ref="inputTime"
                class="field__input "
                type="text"
                oninput={(e) => {
                  this.Static.eventForm.sendAt = parseInt(e.target.value)
                }}
              />
            </td>
            <td class="history_table__cell">
              День:
              <input
                placeholder=""
                ref="inputTime"
                class="field__input "
                type="text"
                oninput={(e) => {
                  this.Static.eventForm.day = parseInt(e.target.value)
                }}
              />
              Месяц:
              <input
                placeholder=""
                ref="inputTime"
                class="field__input "
                type="text"
                oninput={(e) => {
                  this.Static.eventForm.month = parseInt(e.target.value)
                }}
              />
            </td>
            <td class="history_table__cell">
              <button
                class="butn btn__primary "
                onclick={() => {

                  this.Ref.newEvent.classList.add("hidden")
                  this.fn("validateFormEvent")
                  console.log('=1832df=', this.Static.eventForm)
                }}
              >
                Сохранить
              </button>
            </td>
          </tr>
        </thead>
        <RenderTable items={this.Static.data ? this.Static.data.records : []} />
      </table>


    </div>

  )
}