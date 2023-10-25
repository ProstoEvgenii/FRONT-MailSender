import { Cemjsx } from "cemjs-all"

export default function () {
    return (
      <div class="home home_container">
        <div class="dashboard">
          {/* <input ref="inputField" type="text" /> */}
          <button
            onclick={async () => {
              if (this.Static.data != "") {
                const response = await fetch("/api/updateBD", {
                  method: "POST",
                  body: JSON.stringify([
                    {
                     "Фамилия": "МЕЛИКЯН",
                     "Имя": "НИКОЛАЙ",
                     "Отчество": "ГАЙКОВИЧ",
                     "Дата рождения": "10\/20\/1983",
                     "E-mail": "evgeny.ryabov@bk.ru"
                    },
                    {
                     "Фамилия": "Ширин",
                     "Имя": "Антон",
                     "Отчество": "Викторович",
                     "Дата рождения": "10\/24\/2004",
                     "E-mail": "makaskef@bk.ru"
                    },
                    {
                     "Фамилия": "Куликов",
                     "Имя": "Олег",
                     "Отчество": "Александрович",
                     "Дата рождения": "01\/20\/1989",
                     "E-mail": "jackpen@bk.ru"
                    },
                    {
                     "Фамилия": "Русаневич",
                     "Имя": "Олег",
                     "Отчество": "Валентинович",
                     "Дата рождения": "10\/25\/1969",
                     "E-mail": "makaskef@bk.ru"
                    }
                ])
                });
                if (!response.ok) {
                  throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
                }
                // console.log('=5bfbb5=',)
                let result = await response.json()
                console.log('=2ec36d=', result)
              }
            }}
  
  
          >
            Отправить
          </button>
        </div>
      </div >
    )
  }