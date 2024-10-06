const username = document.getElementById("username")
const usernameMsg = document.getElementById("username-msg")

const password = document.getElementById("password")
const passwordMsg = document.getElementById("password-msg")

function validUsernamePass() {
    if (username.value == "") {
        usernameMsg.textContent = "invalid username"
    } else {
        usernameMsg.textContent = ""
    }
    if (password.value == "") {
        passwordMsg.textContent = "invalid password"
    } else {
        passwordMsg.textContent= ""
    }

    if (username.value == "" || password.value == "") {
        console.log("invalid username or password")
        return false
    }
    return true
}

function login() {
    if (validUsernamePass() == false){
        return
    }
}