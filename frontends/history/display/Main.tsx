import { Cemjsx } from "cemjs-all"
import calendar from '@svg/ann/calendar.svg'
import users from '@json/users'

export default function () {
  return (
    <div class="history_inner">

      <div class="history_info">
        <p class="history_info__text">Всего отправлено поздравлений: <span class="bold">55</span></p>
        <div class="history_info__details">
          <p class="history_info__text">Вчера: <span class="bold">5</span></p>
          <p class="history_info__text">Сегодня: <span class="bold">15</span></p>
          <p class="history_info__text">Завтра: <span class="bold">30</span></p>
        </div>
      </div>

      <div class="history_filter">
        <div class="history_filter__calendar">
          <img src={calendar} alt="Фильтр календар" />
        </div>

        <div class="history_filter__date">
          05.11.2023
        </div>
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