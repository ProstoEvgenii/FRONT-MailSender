import { Cemjsx } from "cemjs-all"
import calendar from '@svg/ann/calendar.svg'
import users from '@json/users'

const RenderTable = function ({ items }) {

  if (!items) {
    return (
      <tbody class="history_table-body">
        <tr>
          <td>Пользовател не найдены.</td>
        </tr>
      </tbody>
    )
  }


  return (
    <tbody class="history_table-body">
    {
      items.map((item, index) => {
        return (
          
            <tr>
              <td class="history_table__cell">{(index + 1 + (this.Static.currentPage - 1) * this.Static.limitPerPage)}</td>
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
  )

}

export default function () {
  // console.log('=b011af=',)
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
        </div>
      </div>

      <div class="history_filter">
        <div class="history_filter__calendar">
          <img src={calendar} alt="Фильтр календар" />
        </div>

        {/* <div class="history_filter__date">
          05.11.2023
        </div> */}
      </div>
      <div class='test-container'>
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
          <RenderTable items={this.Static.records} />
        </table>
        <nav class="pagination-container">
          <button
            class="pagination-button"
            aria-label="Previous page"
            title="Previous page"
            onclick={() => {
              if (this.Static.currentPage > 1) {
                this.Static.Pages.forEach(element => {
                  element.class = 'pagination-number '
                });
                this.Static.currentPage -= 1
                this.fn('pagination');

                this.init()
              }
            }}
          >
            &lt;
          </button>
          <div id="pagination-numbers" ref='paginationNumbers'>
            <span class='hidden' ref='first_two' >
              {
                this.Static.Pages?.slice(0, this.Static.outertDigitsNumber).map((item, index) => {
                  return (
                    <button class={item.class}
                      onclick={(e) => {
                        console.log('=1b0f05=', "first_two")
                        this.Static.Pages.forEach(element => {
                          element.class = 'pagination-number '
                        });
                        this.Static.currentPage = item.number
                        this.fn('pagination');
                        item.class += "active"
                        if (this.Static.currentPage < 3) {
                          this.Ref.first_two.classList.add('hidden')
                          this.Static.Begin = 0
                          this.Static.End = 5
                        }
                        this.init()
                      }}
                    >
                      {item.number}</button>
                  )
                })
              }
              <span class='dots' ref='first_two_dots'>...</span>
            </span>
            {
              this.Static.Pages?.slice(this.Static.Begin, this.Static.End).map((item, index) => {
                return (
                  <button class={item.class} ref="pagination_number"
                    onclick={(e) => {
                      this.Static.Pages.forEach(element => {
                        element.class = 'pagination-number '
                      });
                      this.Static.currentPage = item.number
                      this.fn('pagination');
                      item.class += "active"
                      this.init()
                    }}
                  >
                    {item.number}
                  </button>
                )
              })
            }
            <span class={["", this.Static.pageCount >= 5 ? "" : "hidden"]} ref='two_last'>
              <span class='dots'>...</span>
              {
                this.Static.Pages?.slice(-this.Static.outertDigitsNumber).map((item, index) => {
                  return (
                    <button class={item.class}
                      onclick={(e) => {
                        this.Static.Pages.forEach(element => {
                          element.class = 'pagination-number '
                        });
                        console.log('=d3212c=', "two_last")
                        this.Static.currentPage = item.number
                        this.fn('pagination');
                        item.class += "active"
                        if (this.Static.currentPage >= this.Static.lastPage - 3) {
                          this.Ref.two_last.classList.add('hidden')
                          this.Ref.first_two.classList.remove('hidden')
                          this.Static.Begin = this.Static.Pages.at(-6).number
                          this.Static.End = this.Static.lastPage
                        }
                        this.init()
                      }}
                    >
                      {item.number}</button>
                  )
                })
              }
            </span>
          </div>
          <button class="pagination-button" id="next-button"
            aria-label="Next page"
            title="Next page"
            onclick={() => {
              if (this.Static.currentPage < this.Static.lastPage) {
                this.Static.Pages.forEach(element => {
                  element.class = 'pagination-number '
                });
                this.Static.currentPage += 1
                // this.fn("makeRequest")
                this.fn('pagination')
                this.init()
              }
            }}
          >
            &gt;
          </button>
        </nav>
      </div>
    </div>

  )
}