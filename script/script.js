function Function_4th(){
    
    const p = 3.14;
    let x = prompt('Enter the desired radius of the circle :',);
    let Area = p * x *x ;
    alert(Number(Area));
    console.log(Number(Area ));
    document.getElementById("demo").innerHTML = Area  ;
}

function Function_third(){
    
    
    let x = prompt('ENTER YOUR DEGREE :',);

    if ( x < 50 ){
        alert('FAIL');
        console.log('FAIL');
        document.getElementById("demo").innerHTML = 'ENTER YOUR DEGREE : FAIL' ;
    }
    else if( x > 50 && x <= 59 ){
        alert('D');
        console.log('D');
        document.getElementById("demo").innerHTML = 'ENTER YOUR DEGREE : D' ;
    }
    else if( x >= 60 && x <= 69 ){
        alert('C');
        console.log('C');
        document.getElementById("demo").innerHTML = 'ENTER YOUR DEGREE : C' ;
    }
    else if( x >= 70 && x <= 79 ){
        alert('B');
        console.log('B');
        document.getElementById("demo").innerHTML = 'ENTER YOUR DEGREE : B' ;
    }
    else if( x > 80 && x <= 89 ){
        alert('A');
        console.log('A');
        document.getElementById("demo").innerHTML = 'ENTER YOUR DEGREE : A' ;
    }
    else if( x > 90 && x <= 100 ){
        alert('A+');
        console.log('A+');
        document.getElementById("demo").innerHTML = 'ENTER YOUR DEGREE : A+' ;
    }

}


function Function_second(){
    
    
    let x = prompt('ENTER YOUR OPERATION :',);
    let y = prompt('ENTER FIRST NUMBER :',);
    let z = prompt('ENTER SECOND NUMBER :',);
    ;
    Number(y);

    if ( x == '*'){
        alert(Number(y)*Number(z));
        console.log(Number(y)*Number(z));
        document.getElementById("demo").innerHTML = y + x + z ;
    }
    else if( x == '/'){
        alert(Number(y)/Number(z));
        console.log(Number(y)*Number(z));
        document.getElementById("demo").innerHTML = y + x + z ;
    }
    else if( x == '-'){
        alert(Number(y)-Number(z));
        console.log(Number(y)*Number(z));
        document.getElementById("demo").innerHTML = y + x + z ;
    }
    else if( x == '+'){
        alert(Number(y)+Number(z));
        console.log(Number(y)*Number(z));
        document.getElementById("demo").innerHTML = y + x + z ;
    }

}

function Function_first(){

    let x = prompt('FIRST NUMBER :',);
    let y = prompt('SECOND NUMBER :',);
    if( x > y ){
        alert('hello world!');
        console.log('hello world!');
        document.getElementById("demo").innerHTML ="hello world!";
    }
    else if ( y > x ){
        alert('Goodbey!');
        console.log('Goodbey!');
        console.log('Goodbey!');
        document.getElementById("demo").innerHTML ="Goodbey!";
    }

}