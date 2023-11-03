import { Cemjsx } from "cemjs-all"
import users from '@json/users'
import magn from '@svg/ann/seach_magnifier.svg'

export default function () {
  console.log('=3a71ee=', this.Static.record)
  return (
    <div class="history_inner">
      <div class="database_info">
        
          
            {
              this.Static.records == null ? <span class="bold"></span> :
              <p class="history_info__text">Пользователей: <span class="bold">{this.Static.record.usersCount}</span></p>
            }
          
        <div class="history_info__details">

        </div>

      </div>
      <div class="info_send">
        <div class="input_field">
          <input type="email" placeholder="Поиск" class="input_field__input" />
          <div class="input_field__icon">
            <img src={magn} alt="Поиск" />
          </div>
        </div>
        <button
          class="btn btn__primary"
          onclick={() => {

          }}
        >Найти</button>
      </div>
      <br />
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
            this.Static.records.map((item, index) => {
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