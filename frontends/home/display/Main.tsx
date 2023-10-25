import { Cemjsx } from "cemjs-all"
import space from '@svg/space.svg'


export default function () {
  return (
    <div class="home home_container">
      <div class="home_email">
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
      </div>
    </div >
  )
}