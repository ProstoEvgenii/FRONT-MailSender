import { Cemjsx } from "cemjs-all"
import letter from '@images/ann/letter.jpg'
import email from '@svg/ann/email.svg'

export default function () {
  return (
    <div class="info_inner">
      <div class="info_desc">
        <p>Пользователей:
          {
            this.Static.record.usersCount == null ? <span class="bold">-</span> :
              <span class="bold">
                {this.Static.record.usersCount}
              </span>
          }
        </p>
        <div class="info_desc__email">
          <p>Всего отправлено писем:
            {
              this.Static.record.logsCount == null ? <span class="bold">-</span> :
                <span class="bold">
                  {this.Static.record.logsCount}
                </span>
            }
          </p>
          <p>Отправлено сегодня:
            {
              this.Static.record.todaySent == null ? <span class="bold">-</span> :
                <span class="bold">
                  {this.Static.record.todaySent}
                </span>
            }
          </p>
        </div>
      </div>
      <div class="info_settings">
        <div class="info_settings__component">
          <p>Настройка расписания</p>
          <div class="toggle_row" >
            <p>Автоматическая отправка</p>
            <div class="switch">
              {/* <div class="switch__1">
                <input
                  id="switch-1"
                  type="checkbox"
                  ref="switch"
                  onchange={(e) => {
                    e.target.checked 
                  }}

                />
                <label for="switch-1"></label>
              </div> */}
            </div>

            <input
              value={this.Static.record.sendAutoAt ? this.Static.SendAutoAt = this.Static.record.sendAutoAt : ""}
              placeholder=""
              ref="inputTime"
              class="field__input"
              type="text"
              oninput={(e) => {
                this.Static.SendAutoAt = e.target.value
                // console.log('=dac098=',this.Static.SendAutoAt)
              }}
            />
            <p class="minutes">:00</p>
            <button
              class="btn btn__primary"
              onclick={() => {
                if (this.Ref.inputTime.value != "") {
                  // console.log('=7eb08c=', this.Ref.inputEmail.value)
                  // this.Static.sendTo = this.Ref.inputEmail.value
                  this.fn("makeRequest")
                }
              }}
            >
              Сохранить
            </button>
          </div>


        </div>
        <div class="info_settings__component">
          <p>Загрузка пользователей</p>
          <div class="users_upload">
            <div>
              <input
                type="file"
                ref="UploadUsers"
                accept=".json"

                onchange={() => {
                  if (this.Ref.UploadUsers.files[0].type == "application/json") {
                    this.Static.formData = new FormData();
                    this.Static.formData.append("jsonFile", this.Ref.UploadUsers.files[0]);
                  }
                }}
              />
            </div>
            <button
              class="btn btn__primary"
              onclick={() => {
                if (this.Static.formData) {
                  this.fn("updateBD")
                  this.Ref.UploadUsers.value = ""
                  this.Static.formData = null

                }

              }}
            >
              Загрузить
            </button>

          </div>
          <p>
            {
              this.Static.usersAdded.documentsInserted == null ? <span></span> :
                <span class="upload_response">Пользователей добавлено: {this.Static.usersAdded.documentsInserted}</span>
            }
          </p>
        </div>
      </div>
      <div class="info_preview">
        <p class="info_preview__title">Превью письма</p>
        <img src={letter} alt="Образец письма" />
      </div>
      <div >
        <div class="info_send">
          <div class="input_field">
            <input type="email"
              placeholder="Введите email:"
              ref="inputEmail"
              class="input_field__input"
            />
            <div class="input_field__icon">
              <img src={email} alt="Электронная почта" />
            </div>
          </div>
          <button
            class="btn btn__primary"
            onclick={() => {
              if (this.Ref.inputEmail.value != "") {
                // console.log('=7eb08c=', this.Ref.inputEmail.value)
                this.Static.sendTo = this.Ref.inputEmail.value
                this.fn("makeRequest")
              }
            }}
          >
            Отправить
          </button>
        </div>
        <div class="info_send__response">
          {
            this.Static.record.sendEmailresult == "" ? <span></span> :
              <span>{this.Static.record.sendEmailresult}</span>
          }
        </div>
      </div>


    </div>
    // <div class="home section">
    //   <div class="dashboard">
    //     <div>
    //       <div>
    //         <div>Пользователей: {this.Static.record.documentsCount} </div>
    //         <div>Дней рождений сегодня: {this.Static.record.countBirtdays} </div>
    //         <div>Поздравлено сегодня: {this.Static.record.countLogs} </div>
    //         <div></div>
    //       </div>
    //     </div>
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />

    //     <button
    //       onclick={() => {
    //         if (this.Static.formData) {
    //           this.fn("updateBD")
    //           this.Ref.inputField.value = ""
    //           this.Static.formData = null
    //           // this.Static.records = []
    //         }

    //       }}
    //     >
    //       Отправить
    //     </button>
    //   </div>
    //   <br />
    //   <div>
    //     {
    //       this.Static.usersAdded.documentsInserted == null ? <div></div> :
    //         <div>Пользователей добавлено: {this.Static.usersAdded.documentsInserted}</div>
    //     }

    //   </div>
    //   <br />
    //   <button
    //     onclick={() => {
    //       if (this.Static.record.countBirtdays != 0) {
    //         this.Static.params.sendAll = true
    //         this.fn("makeRequest")
    //       }
    //     }}
    //   >
    //     Поздравить всех
    //   </button>
    //   <br />
    //   <div>
    //     {
    //       this.Static.record.sendEmailresult == "" ? <div></div> :
    //         <div>
    //           {this.Static.record.sendEmailresult}
    //         </div>
    //     }
    //   </div>
    // </div >
  )
}