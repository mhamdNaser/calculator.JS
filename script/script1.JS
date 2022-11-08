
function test_one(){
    let x = prompt('Enter your Degree : ',)
    switch (x >= 50 && x <= 100) {
        case x > 50 && x < 60:
            alert('D');
            console.log('D');
            document.getElementById("demo1").innerHTML = 'ENTER YOUR DEGREE : D' ;
            break;
        case x >= 60 && x < 70:
            alert('C');
            console.log('C');
            document.getElementById("demo1").innerHTML = 'ENTER YOUR DEGREE : C' ;
            break;
        case x >= 70 && x < 80:
            alert('B');
            console.log('B');
            document.getElementById("demo1").innerHTML = 'ENTER YOUR DEGREE : B' ;
            break;
        case x >= 80 && x < 90:
            alert('A');
            console.log('A');
            document.getElementById("demo1").innerHTML = 'ENTER YOUR DEGREE : A' ;
            break;
        case x >= 90 && x <= 100:
            alert('A+');
            console.log('A+');
            document.getElementById("demo1").innerHTML = 'ENTER YOUR DEGREE : A+' ;
            break;

        default:
            alert('FAIL');
            console.log('FAIL');
            document.getElementById("demo1").innerHTML = 'ENTER YOUR DEGREE : FAIL' ;
            break;
    }
}

function test_two(){
    let x = prompt('enter start number  "number > 0" ',)
    for( i = 0 ; i < x ; i++){
        console.log(i);
    }
    document.getElementById("demo1").innerHTML = 'Done For Loop' ;
}

function test_three(){
    let x = prompt('enter your number :')
    do{
        console.log(--x);
        document.getElementById("demo1").innerHTML = 'Done Do While Loop' ;
    }
    while(x > 0)
}

function test_four(){
    let x = prompt('enter your number :')
    while(x > 0)
    {
        console.log(--x);
        document.getElementById("demo1").innerHTML = 'Done While Loop' ;
    }
}

function test_continue(){
    let x = prompt('enter start number  "number > 0" ',)
    for( i = 0 ; i < x ; i++){
        if(i == 5){
            continue;
        }
        console.log(i);
    }
    document.getElementById("demo1").innerHTML = 'Done For Loop' ;
}


/* ---------- Second Test --------------- */
function test1_zero(){
    let first = "Muhammed";
    let last = "naser";

    let len = first.length;
    let resli = last.slice(-2);
    let str = first.substring(2,7);

    document.getElementById("demo3").innerHTML = len + ' ' + resli  + ' ' + str;
}

function test1_one(){
    let name =  "my name is : name set" ;
    document.getElementById("demo3").innerHTML = name.replace("name set", "muhammed naser");
}

function test1_two(){
    let first = "this my project name this the first pro for name ";
    document.getElementById("demo3").innerHTML = first.replaceAll("name", "Muhammed");

}

function test1_three(){
    let first = "Muhammed";
    document.getElementById("demo3").innerHTML =  first.toUpperCase();
}

function test1_four(){
    let first = "MUHAMMED";
    document.getElementById("demo3").innerHTML =  first.toLowerCase();
}

function test1_five(){
    let first = "Muhammed";
    let last = "Naser";
    let full = first.concat(" "+last);
    document.getElementById("demo3").innerHTML =  full ;
}