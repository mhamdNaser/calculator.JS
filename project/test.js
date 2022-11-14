getdata = () => {
    var user_fName = document.getElementById('fName').value;
    var user_lname = document.getElementById('lname').value;
    var user_Email = document.getElementById('Email').value;
    var user_password = document.getElementById('password').value;
    var user_phoneNumber = document.getElementById('phoneNumber').value;
    const array = {
        fname: user_fName,
        lname: user_lname, 
        Email: user_Email,
        passw: user_password,
        phone: user_phoneNumber
    }
    
    localStorage.setItem( user_fName , JSON.stringify(array))

    window.open('./login.html');
}

checkdata = () => {
    var userName = document.getElementById('UserName').value;
    var passcheck = document.getElementById('pass').value;

    var x = JSON.parse(localStorage.getItem(fname))

    if(!x){
        console.log('user doesnt exist');
    }
    
    var password = document.getElementById("password").value;
    
    if (userFromLocalStorage.passw !== passcheck){
        console.log('wrong password');
    }
    
    console.log('logged in successfully');

}

nondata = () => {
    localStorage.clear();
}
