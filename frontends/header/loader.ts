export const loader = function () {

    // console.log('=471314=', this.Variable.userAuth)
    this.Variable.activeMenu = "";


    if (!this.Variable.userAuth) {
        window.location.href = "/";
    }
    return
}

