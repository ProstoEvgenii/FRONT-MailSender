import { Cemjsx, Static, Fn, front } from "cemjs-all"
import lock from '@svg/ann/lock.svg'
import email from '@svg/ann/email.svg'
import eye from '@svg/ann/eye.svg'

export default function () {
  return (
    <main class="home ">
      <div class="wrapper home_inner">
        <h1 class="title_main">Система отправки поздравительных писем</h1>
        <div class="home_form">
          <h2 class="title_general">Авторизация</h2>
          <div class="input_field">
            <input type="email" placeholder={Static.form.login.placeholder} class="input_field__input"
              oninput={(e: any) => {
                Static.form.login.value = e.target.value;
              }}
            />
            <div class="input_field__icon">
              <img src={email} alt="Электронная почта" />
            </div>
          </div>
          {/* <input type="che" checked/> */}
          <div class="input_field">
            <input type="password" placeholder={Static.form.password.placeholder} class="input_field__input"
              oninput={(e: any) => {
                Static.form.password.value = e.target.value;
              }}
            />
            <div class="input_field__icon">
              <img src={lock} alt="Пароль" />
            </div>
            <div class="input_field__visible">
              <img src={eye} alt="Показать пароль" />
            </div>
          </div>

          <button class="btn btn__passive"
            onclick={async () => {
              let data = {
                login: Static.form.login.value,
                password: Static.form.password.value,
                uuid: localStorage.uuid
              }
              let answer = await front.Services.functions.sendApi("/api/UserAuth", data)
              console.log('=d9d066=', data)
              if (answer.error) {
                alert(answer.error)
                return
              }
              front.Variable.userAuth = true
              Fn.linkChange("/dashboard")
              return
            }}
          >Войти</button>
        </div>
      </div>
      {/* <div class="home_email">
        <input ref="inputField" type="text" />
        <button
          onclick={async () => {
            if (this.Ref.inputField.value != "") {
              const response = await fetch("/api", {
                method: "POST",
                body: JSON.stringify({ "email": this.Ref.inputField.value })
              });
              if (!response.ok) {
                throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
              }
              console.log('=5bfbb5=',)
              let result = await response.json()
              console.log('=2ec36d=', result)
            }
          }}


        >
          Отправить
        </button>
      </div> */}
    </main>
  )
}