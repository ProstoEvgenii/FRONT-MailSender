import { Cemjsx, Fn, front } from "cemjs-all"
import logo from '@svg/ann/logo.svg'
import exit from '@svg/ann/exit.svg'
import menu from '@json/menu'


export default function () {
  return (
    <div class="header_inner">
      <div class="header_logo">
        <a href="/dashboard" onclick={Fn.link}>
          <img
            class="header_logo-img"
            src={logo}
          ></img>
        </a>
      </div>
      <nav class="header_list">
        <ul class="header_menu">
          {
            menu.map(item => {
              return (
                <li
                  class={["header_menu_item", front.Variable.activeMenu == item.name ? "header_menu_item-active" : null]}
                  onclick={() => {
                    front.Variable.activeMenu = item.name;
                    Fn.initAll();
                  }}
                >
                  <a href={item.link} onclick={Fn.link}>{item.name}</a>
                </li>
              )
            })
          }
          {/* <li
            class={["header_menu_item", this.Static.page == "cemjs" ? "header_menu_item-active" : null]}

          ><a href="/dashboard" onclick={this.Fn.link}>Информация</a>
          </li>
          <li
            class={["header_menu_item", this.Static.page == "examples" ? "header_menu_item-active" : null]}
          ><a href="/users" onclick={this.Fn.link}>База данных</a></li>
          <li
            class={["header_menu_item", this.Static.page == "examples" ? "header_menu_item-active" : null]}
          ><a href="/users" onclick={this.Fn.link}>История</a></li>
          <li
            class={["header_menu_item", this.Static.page == "examples" ? "header_menu_item-active" : null]}
          ><a href="/settings" onclick={this.Fn.link}>Настройки</a></li> */}
        </ul>

        <div class="header_logo"
          onclick={() => {
            front.Variable.userAuth = false
            Fn.linkChange("/")
          }}>
          <img src={exit} alt="Выход из профиля" />
        </div>
      </nav>
    </div>
  )
}