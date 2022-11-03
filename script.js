
function Function_one(){

    let x = prompt('FIRST NUMBER :',);
    let y = prompt('SECOND NUMBER :',);
    if( x > y ){
        alert('hello world!');
    }
    else{
        alert('Goodbey!');
    }

}

function Function_two(){
    
    
    let x = prompt('ENTER YOUR OPERATION :',);
    let y = prompt('ENTER FIRST NUMBER :',);
    let z = prompt('ENTER SECOND NUMBER :',);
    ;
    Number(y);

    if ( x == '*'){
        alert(Number(y)*Number(z));
    }
    else if( x == '/'){
        alert(Number(y)/Number(z));
    }
    else if( x == '-'){
        alert(Number(y)-Number(z));
    }
    else if( x == '+'){
        alert(Number(y)+Number(z));
    }

}

function Function_three(){
    
    
    let x = prompt('ENTER YOUR DEGREE :',);

    if ( x < 50 ){
        alert('FAIL');
    }
    else if( x > 50 && x <= 59 ){
        alert('D');
    }
    else if( x >= 60 && x <= 69 ){
        alert('C');
    }
    else if( x >= 70 && x <= 79 ){
        alert('B');
    }
    else if( x > 80 && x <= 89 ){
        alert('A');
    }
    else if( x > 90 && x <= 100 ){
        alert('A+');
    }

}

function Function_four(){
    
    const p = 3.14;
    let x = prompt('Enter the desired radius of the circle :',);

    let Area = p * x *x ;
    alert(Number(Area))
}