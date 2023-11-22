import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all"
import letter from '@images/ann/letter.jpg'
import email from '@svg/ann/email.svg'

export default function () {
  return (
    <div class="info_inner">
      <div class="info_desc">
        <div class="info_desc__email">
          <p>
            Пользователей:
            {
              Static.record.usersCount == null ? <span class="bold">-</span> :
                <span class="bold">
                  {Static.record.usersCount}
                </span>
            }
          </p>
          <p>
            Дней рождений сегодня:
            {
              Static.record.countBirtdays == null ? <span class="bold">-</span> :
                <span class="bold">
                  {Static.record.countBirtdays}
                </span>
            }
          </p>
        </div>
        <div class="info_desc__email">
          <p>Всего отправлено писем:
            {
              Static.record.logsCount == null ? <span class="bold">-</span> :
                <span class="bold">
                  {Static.record.logsCount}
                </span>
            }
          </p>
          <p>Отправлено сегодня:
            {
              Static.record.todaySent == null ? <span class="bold">-</span> :
                <span class="bold">
                  {Static.record.todaySent}
                </span>
            }
          </p>
        </div>
      </div>
      <div class="info_settings">
        <div class="info_settings__component">
          <p>Загрузка шаблона</p>
          <div class="users_upload">
            <input
              class="field__input"
              ref="UploadTemplateName"
              style="width: 9rem"
              type="text" />
            <div>
              <input
                type="file"
                ref="UploadTemplate"
                accept=".html"
                onchange={() => {
                  if (Ref.UploadTemplate.files[0].type == "text/html") {
                    Static.formTemplateUpload = new FormData();
                    Static.formTemplateUpload.append("jsonFileTemplate", Ref.UploadTemplate.files[0])
                  }
                }}
              />
            </div>
            <button
              class="btn btn__primary"
              onclick={() => {
                if (Static.formTemplateUpload && Ref.UploadTemplateName.value) {
                  Static.formTemplateUpload.append("name", Ref.UploadTemplateName.value)
                  Func.updateTemplate("Templates", Static.formTemplateUpload)
                  Ref.UploadTemplate.value = ""
                  Static.formTemplateUpload = null
                }
              }}
            >
              Загрузить
            </button>
          </div>
          <p>
            {
              Static.usersAdded.documentsInserted == null ? <span></span> :
                <span class="upload_response">Пользователей добавлено: {Static.usersAdded.documentsInserted}</span>
            }
          </p>
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
                  if (Ref.UploadUsers.files[0].type == "application/json") {
                    Static.formData = new FormData();
                    Static.formData.append("jsonFile", Ref.UploadUsers.files[0]);
                  }
                }}
              />
            </div>
            <button
              class="btn btn__primary"
              onclick={() => {
                if (Static.formData) {
                  Func.updateBD("Dashboard", Static.formData)
                  Ref.UploadUsers.value = ""
                  Static.formData = null
                }
              }}
            >
              Загрузить
            </button>

          </div>
          <p>
            {
              Static.usersAdded.documentsInserted == null ? <span></span> :
                <span class="upload_response">Пользователей добавлено: {Static.usersAdded.documentsInserted}</span>
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
              if (Ref.inputEmail.value != "") {
                Static.sendTo = Ref.inputEmail.value
                Func.makeRequest()
              }
            }}
          >
            Отправить
          </button>
        </div>
        <div class="info_send__response">
          {
            Static.record.sendEmailresult == "" ? <span></span> :
              <span>{Static.record.sendEmailresult}</span>
          }
        </div>
      </div>
    </div>
  )
}