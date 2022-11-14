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
    
    localStorage.setItem( JSON.stringify(user_fName) , JSON.stringify(array))

    window.open('./login.html');
}

checkdata = () => {
    var userName = document.getElementById('UserName').value;
    var passcheck = document.getElementById('pass').value;

    alert("hello");
    var x = localStorage.setItem( JSON.parse(array.fname))
    var y = localStorage.setItem( JSON.parse(array.passw))
    
    if( userName == x && passcheck == y)
    {
         
    }

}

nondata = () => {
    localStorage.clear();
}
