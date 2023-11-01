import { Cemjsx } from "cemjs-all"
import calendar from '@svg/ann/calendar.svg'
import users from '@json/users'
import email from '@svg/ann/email.svg'
import magn from '@svg/ann/seach_magnifier.svg'

export default function () {
  return (
    <div class="history_inner">
      <div class="history_info">
        <p class="history_info__text">Пользователей: <span class="bold">55</span></p>
        <div class="history_info__details">

        </div>

      </div>
      <div class="info_send">
        <div class="input_field">
          <input type="email" placeholder="Введите email:" class="input_field__input" />
          <div class="input_field__icon">
            <img src={magn} alt="Поиск" />
          </div>
        </div>
        <button class="btn btn__primary">Найти</button>
      </div>
      <table class="history_table">
        <thead >
          <tr class="history_table-head">
            <th class="history_table__cell">№</th>
            <th class="history_table__cell">Фамилия</th>
            <th class="history_table__cell">Имя</th>
            <th class="history_table__cell">Отчество</th>
            <th class="history_table__cell">Дата рождения</th>
            <th class="history_table__cell">Email</th>
          </tr>
        </thead>
        <tbody class="history_table-body">
          {
            users.map((item, index) => {
              return (
                <tr>
                  <td class="history_table__cell">{index + 1}</td>
                  <td class="history_table__cell">{item.lastName}</td>
                  <td class="history_table__cell">{item.firstName}</td>
                  <td class="history_table__cell">{item.middleName}</td>
                  <td class="history_table__cell">{item.birthday}</td>
                  <td class="history_table__cell">{item.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  )
}