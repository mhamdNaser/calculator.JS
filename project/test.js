let users = JSON.parse(localStorage.getItem("users"))

// clear local storage ----    
function logSubmit(event) {


    
    let obj = {id: StudentNumber , name: take.value, lname: take1.value, mail: mail.value, password: password.value}
    users.push(obj)

    if (localStorage.length == 0 ){
        localStorage.setItem("users", JSON.stringify(users));
    }
    else{
        users.map(e => {
            console.log(e.id)
            if (e.id.value == StudentNumber.value){
                alert("youare here")
            }
            else{
                localStorage.setItem("users", JSON.stringify(users));
            }
        })
    }
    // let useCon = /[A-Za-z]/
    // let useCon1 = /[0-9]/
    // try{
    //     if( useCon.test(take.value)) throw obj.name= take.value
    //     else if( useCon1.test(take.value)) throw alert("not true")
    // }
    // catch(err){
    //     err
    // }
    // console.log(users)

event.preventDefault();
}

const StudentNumber = document.getElementById('stuNumber')
const take = document.getElementById('fName')
const take1 = document.getElementById('lname')
const mail = document.getElementById('Email')
const password = document.getElementById('password')
const form = document.getElementById('form')
form.addEventListener('submit', logSubmit)

nondata = () => {
    localStorage.clear()
}
