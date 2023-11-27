import { Cemjsx, Static, Fn, Func, Ref, } from "cemjs-all"


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
                {item.sendAt}:00
              </td>
              <td class="history_table__cell">{item.isDaily ? "Ежедневно" : `${item.day}.${item.month}`}</td>
              <td class="history_table__cell">
                <button
                  class={["butn", item.active ? 'btn__active' : 'btn__passive']}
                  onclick={() => {
                    Static.eventForm = item
                    Static.eventForm.uuid = localStorage.uuid
                    Static.eventForm.active = !item.active
                    Func.updateEvents(Static.eventForm)
                    Func.makeRequest()
                  }}
                >
                  {
                    item.active ? "Активно" : "Неактивно"
                  }

                </button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  )
}

const RenderOptionsFromArray = function ({ items }) {
  if (!items) {
    return (
      < select name="" id="" >
        <option value="" >Выберите шаблон</option>
        <option value="">Не найдены</option>
      </select>
    )
  }
  return (
    < select name="" id=""
      onchange={(e) => {
        Static.eventForm.templateName = e.target.value
      }}
    >
      <option value="">Выберите шаблон</option>
      {
        items.map((item, index) => {
          return (
            <option value={item}>{item}</option>
          )

        })
      }
    </select >
  )
}
const RenderOptionsFromInt = function ({ numberMin, numberMax, placeholder, formKey }) {
  const options = [];

  for (let i = numberMin; i < numberMax; i++) {
    if (formKey == "sendAt") {
      options.push(<option key={i} value={i}>{i}:00</option>);
    } else {
      options.push(<option key={i} value={i}>{i}</option>);
    }

  }
  return (
    < select name="" id=""
      onchange={(e) => {
        Static.eventForm[formKey] = parseInt(e.target.value)
      }}
    >
      <option value="0">{placeholder}</option>
      {
        options.map((item, index) => {
          return (
            item
          )
        })
      }
    </select >
  )
}




export default function () {
  return (
    <div class="settings info section">

      <div class="settings__fields__container" >
        <p class="settingsTitle">Настройка почты</p>
        <div class="settings__fields">
          <input
            value={Static.data ? Static.settingsForm.emailLogin = Static.data.emailLogin : ""}
            placeholder="E-mail"
            ref="inputEmail"
            class="field__input"
            type="text"
            oninput={(e) => {
              Static.settingsForm.emailLogin = e.target.value
            }}
          />
          <input
            placeholder="Пароль приложения"
            ref="inputEmailPass"
            class="field__input"
            type="text"
            oninput={(e) => {
              Static.settingsForm.emailPass = e.target.value
            }}
          />

          <input
            placeholder="smtp"
            value={Static.data ? Static.settingsForm.smtp = Static.data.smtp : ""}
            ref="inputSmtp"
            class="field__input"
            type="text"
            oninput={(e) => {
              Static.settingsForm.smtp = e.target.value
            }}
          />

          <input
            placeholder="Порт"
            value={Static.data ? Static.settingsForm.port = Static.data.port : ""}
            ref="inputPort"
            class="field__input"
            type="text"
            oninput={(e) => {
              Static.settingsForm.port = e.target.value
            }}
          />

          <button
            class="butn btn__primary"
            onclick={() => {
              Func.validateForm()
            }}
          >
            Сохранить настройки
          </button>
          <div></div>

          <div>
            {
              Static.postResponse.documentsInserted == 0 ? <div></div> :
                <div>
                  Настройки cохранены
                </div>
            }
          </div>
          <div>
            {
              Static.postResponse.documentsModified == 0 ? <div></div> :
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
                placeholder="Название события"
                ref="inputTime"
                class="field__input "
                type="text"
                oninput={(e) => {
                  Static.eventForm.name = e.target.value
                }}
              />
            </td>
            <td class="history_table__cell">
              <input
                placeholder=""
                class="field__input "
                type="text"
                oninput={(e) => {
                  Static.eventForm.from = e.target.value
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
                  Static.eventForm.subject = e.target.value
                }}
              />
            </td>
            <td class="history_table__cell">
              <RenderOptionsFromArray items={Static.data ? Static.data.templates : []} />
            </td>
            <td class="history_table__cell">
              <RenderOptionsFromInt numberMin={0} numberMax={24} placeholder={"Выберите время"} formKey={"sendAt"} />
            </td>
            <td class="history_table__cell">
              День:
              <RenderOptionsFromInt numberMin={1} numberMax={32} placeholder={"Выберите день"} formKey={"day"} />
              Месяц:
              <RenderOptionsFromInt numberMin={1} numberMax={13} placeholder={"Выберите месяц"} formKey={"month"} />
            </td>
            <td class="history_table__cell">
              <button
                class="butn btn__primary "
                onclick={() => {
                  if (Static.add) {
                    if (Static.eventForm.day == 0 && Static.eventForm.month == 0) {
                      Static.eventForm.isDaily = true
                    } else {
                      Static.eventForm.isDaily = false
                    }
                    Func.validateFormEvent()
                    Ref.newEvent.classList.add("hidden")
                    Static.add = false
                  }
                }}
              >
                Сохранить
              </button>
              <button
                class="butn btn__cancel "
                onclick={() => {
                  if (Static.add) {
                    Ref.newEvent.classList.add("hidden")
                    Static.add = false
                  }
                }}
              >
                Отменить
              </button>
            </td>
          </tr>
        </thead>
        <RenderTable items={Static.data ? Static.data.records : []} />
      </table>
      <div
        class={[!Static.updateEventsResponse ? "" : "hidden"]}
      >
        {Static.updateEventsResponse}
      </div>
      <button
        class="butn btn__primary "
        onclick={async () => {
          Static.add = true
          Ref.newEvent.classList.remove("hidden")
          Func.makeRequest()
        }}
      >
        Добавить событие
      </button>
      <br />

    </div>

  )
}