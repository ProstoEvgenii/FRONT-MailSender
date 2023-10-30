import { Cemjsx } from "cemjs-all"

export default function () {

  return (
    <div class="home home_container">
      <div class="dashboard">
        <div>
          {
            this.Static.records.lenght ? <div></div> :
              this.Static.records.map((item) => {
                return (
                  <div>
                    <div>В коллекции users: {item.count} записей</div>
                    <div>Дней рождений сегодня: {item.countBirtdays} </div>
                    <div></div>
                  </div>
                )
              })
          }
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>Отправить .json файл, чтобы обновить записи в БД</div>
        <input ref="inputField" type="file" accept=".json"
          onchange={() => {
            if (this.Ref.inputField.files[0].type == "application/json") {
              this.Static.formData = new FormData();
              this.Static.formData.append("jsonFile", this.Ref.inputField.files[0])

            }
          }}
        />
        <button
          onclick={() => {
            if (this.Static.formData) {
              this.fn("updateBD")
              this.Ref.inputField.value = ""
              this.Static.formData = null
              this.Static.records = []
            }

          }}
        >
          Отправить
        </button>
      </div>
      <br />
      <div>
        {
          this.Static.usersAdded.count == null ? <div></div> :
            <div>Пользователей добавлено: {this.Static.usersAdded.count}</div>
        }

      </div>
      <br />
      <button
        onclick={() => {
          // console.log('=ae82dc=', this.Static.records[0].countBirtdays)
          if (this.Static.records[0].countBirtdays != 0) {
            console.log('=36933a=', this.Static.params.sendAll)
            this.Static.params.sendAll = true
            this.fn("makeRequest")
            this.Static.params.sendAll = false
            

          }

        }}
      >
        Поздравить всех
      </button>
    </div >
  )
}