import { Cemjsx } from "cemjs-all"
import letter from '@images/ann/letter.jpg'
import email from '@svg/ann/email.svg'

export default function () {
  return (
    <div class="info_inner">
      <div class="info_desc">
        <p>Всего отправлено: <span class="bold">1200</span></p>
        <p>Всего записей:  <span class="bold">456</span></p>


      </div>

      <div class="info_preview">
        <p class="info_preview__title">Превью письма</p>
        <img src={letter} alt="Образец письма" />


      </div>

      <div class="info_send">
        <div class="input_field">
          <input type="email" placeholder="Введите email:" class="input_field__input" />
          <div class="input_field__icon">
            <img src={email} alt="Электронная почта" />
          </div>
        </div>
        <button class="btn btn__primary">Отправить</button>
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
    //     <div>Отправить .json файл, чтобы обновить записи в БД</div>
    //     <input ref="inputField" type="file" accept=".json"
    //       onchange={() => {
    //         if (this.Ref.inputField.files[0].type == "application/json") {
    //           this.Static.formData = new FormData();
    //           this.Static.formData.append("jsonFile", this.Ref.inputField.files[0])

    //         }
    //       }}
    //     />
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