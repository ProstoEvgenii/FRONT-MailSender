import { Cemjsx } from "cemjs-all"

export default function () {

  return (
    <div class="home home_container">
      <div class="dashboard">
        <div>
          <div>
            <div>Пользователей: {this.Static.record.documentsCount} </div>
            <div>Дней рождений сегодня: {this.Static.record.countBirtdays} </div>
            <div>Поздравлено сегодня: {this.Static.record.countLogs} </div>
            <div></div>
          </div>
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
              // this.Static.records = []
            }

          }}
        >
          Отправить
        </button>
      </div>
      <br />
      <div>
        {
          this.Static.usersAdded.documentsInserted == null ? <div></div> :
            <div>Пользователей добавлено: {this.Static.usersAdded.documentsInserted}</div>
        }

      </div>
      <br />
      <button
        onclick={() => {
          if (this.Static.record.countBirtdays != 0) {
            this.Static.params.sendAll = true
            this.fn("makeRequest")
          }
        }}
      >
        Поздравить всех
      </button>
      <br />
      <div>
        {
          this.Static.record.sendEmailresult == "" ? <div></div> :
            <div>
              {this.Static.record.sendEmailresult}
            </div>
        }
      </div>
    </div >
  )
}