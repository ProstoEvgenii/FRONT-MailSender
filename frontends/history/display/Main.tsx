import { Cemjsx } from "cemjs-all"
import calendar from '@svg/ann/calendar.svg'
import users from '@json/users'

export default function () {
  return (
    <div class="history_inner">

      <div class="history_info">
        {/* <p class="history_info__text">Всего отправлено поздравлений: <span class="bold">55</span></p> */}
        {
            this.Static.record == null ? <p class="history_info__text"><span class="bold"></span></p> :
              <p class="history_info__text">Всего отправлено поздравлений: <span class="bold">{this.Static.record.logsCount}</span></p>
          }
        <div class="history_info__details">
          {
            this.Static.record == null ? <p class="history_info__text"><span class="bold"></span></p> :
              <p class="history_info__text">Вчера: <span class="bold">{this.Static.record.yesterdayLogsCount}</span></p>
          }
          {
            this.Static.record == null ? <p class="history_info__text"><span class="bold"></span></p> :
              <p class="history_info__text">Сегодня: <span class="bold">{this.Static.record.todayLgsCount}</span></p>
          }
          {
            this.Static.record == null ? <p class="history_info__text"><span class="bold"></span></p> :
              <p class="history_info__text">Завтра: <span class="bold">{this.Static.record.tommorowLogsCount}</span></p>
          }

          {/* <p class="history_info__text">Вчера: <span class="bold">5</span></p>
          <p class="history_info__text">Сегодня: <span class="bold">15</span></p>
          <p class="history_info__text">Завтра: <span class="bold">30</span></p> */}
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
            this.Static.record.records?.map((item, index) => {
              return (
                <tr>
                  <td class="history_table__cell">{index + 1}</td>
                  <td class="history_table__cell">{item.LastName}</td>
                  <td class="history_table__cell">{item.FirstName}</td>
                  <td class="history_table__cell">{item.MiddleName}</td>
                  <td class="history_table__cell">{item.DateOfBirth}</td>
                  <td class="history_table__cell">{item.Email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  )
}