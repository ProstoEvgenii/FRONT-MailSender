import { Cemjsx } from "cemjs-all"

export default function () {
  // console.log('=2d1657=', this.Static.records)
  // console.log('=629acd=',this.Static.usersAdded.count)
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
                  </div>

                )

              })

          }

        </div>

        <br />
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
            // console.log('=f5ce4c=', this.Ref.inputField.files)
            if (this.Static.formData) {
              this.fn("updateBD")
              // this.fn("makeRequest")
              this.Ref.inputField.value = ""
              this.Static.formData = null
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
        }</div>
    </div >
  )
}