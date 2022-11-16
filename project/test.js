let users = JSON.parse(localStorage.getItem("users")) || []

// clear local storage ----    
function logSubmit(event) {


    let obj = {name: take, lname: take1, mail: mail, password: password}
    users.push(obj)
    
    let useCon = /[A-Za-z]/
    let useCon1 = /[0-9]/
    try{
        if( useCon.test(take.value)) throw obj.name= take.value
        else if( useCon1.test(take.value)) throw alert("not true")
    }
    catch(err){
        err
    }
    // console.log(users)
    localStorage.setItem("users", JSON.stringify(users));

event.preventDefault();
window.open('./login.html')
}


const take = document.getElementById('fName')
const take1 = document.getElementById('lname')
const mail = document.getElementById('Email')
const password = document.getElementById('password')
const form = document.getElementById('form')
form.addEventListener('submit', logSubmit)

nondata = () => {
    localStorage.clear()
}
