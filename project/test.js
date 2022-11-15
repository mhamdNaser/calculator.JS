var array = [];
getdata = (e) => {

    var user_fName = document.getElementById("fName").value;
    var user_lname = document.getElementById("lname").value;
    var user_Email = document.getElementById("Email").value;
    var user_password = document.getElementById("password").value;
    var user_Number = document.getElementById("Number").value;

    array[0] = user_fName
    array[1] = user_lname
    array[2] = user_Email
    array[3] = user_password
    array[4] = user_Number
    if( user_fName == ""){
        alert("enter name")
    }
    else{
        localStorage.setItem( user_fName, JSON.stringify(array));
        window.open("./login.html");
    }
};

checkdata = () => {
    var newArr = JSON.parse(localStorage.getItem(array))
    var userName = document.getElementById("UserName").value;
    var passcheck = document.getElementById("pass").value;

  console.log(JSON.parse(localStorage.key.value))
//   if (userName == x) {
//     alert("hello")
//     if (passcheck == y) {
//         console.log("wellcom");
//     } else {
//       console.log("Email or password ");
//     }
//   } else {
//     console.log("wrong Email or password");
//   }

}
nondata = () => {
  localStorage.clear();
};

function funarr(item, index, arr){
    localStorage.setItem( arr[index], JSON.stringify(te));
}
