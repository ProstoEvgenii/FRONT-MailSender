export const loader = function () {
    this.Static.text = "Framework CemJS!!!";

    this.Static.form = {
        login: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Email адрес",
            view: false,
            disable: false
        },
        password: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Пароль",
            view: false,
            disable: false
        },
        isValid: false,
    }


    return
}