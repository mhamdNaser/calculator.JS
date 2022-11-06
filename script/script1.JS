
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
    for( i = x ; i > 0 ; i--){
        console.log(--x);
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