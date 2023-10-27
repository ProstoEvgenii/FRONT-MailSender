export const loader = function () {
    this.Static.records = []
    this.Static.usersAdded = []
    this.Static.usersAdded.count = null
    this.fn("makeRequest")
    this.Static.data = [
        {
         "Фамилия": "МЕЛИКЯН",
         "Имя": "НИКОЛАЙ",
         "Отчество": "ГАЙКОВИЧ",
         "Дата рождения": "10\/20\/1983",
         "E-mail": "evgeny.ryabov@bk.ru"
        },
        {
         "Фамилия": "Ширин",
         "Имя": "Антон",
         "Отчество": "Викторович",
         "Дата рождения": "10\/24\/2004",
         "E-mail": "makaskef@bk.ru"
        },
        {
         "Фамилия": "Куликов",
         "Имя": "Олег",
         "Отчество": "Александрович",
         "Дата рождения": "01\/20\/1989",
         "E-mail": "jackpen@bk.ru"
        },
        {
         "Фамилия": "Русаневич",
         "Имя": "Олег",
         "Отчество": "Валентинович",
         "Дата рождения": "10\/25\/1969",
         "E-mail": "makaskef@bk.ru"
        }
    ]
    return
}