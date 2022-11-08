// MY FUNCTION  
"use strict";

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

/* ---------- Second Taske --------------- */
function Function1_first(){
    let x = prompt('ENTER MONTH NUMBER :')
    if( x>=1 && x<=12){
        switch ( x <= 12) {
            case x == 1:
                console.log('January');
                document.getElementById("demo2").innerHTML = 'January' ;
                break;
            case x == 2:
                console.log('February');
                document.getElementById("demo2").innerHTML = 'February' ;
                break;
            case x == 3:
                console.log('March');
                document.getElementById("demo2").innerHTML = 'March' ;
                break;
            case x == 4:
                console.log('April');
                document.getElementById("demo2").innerHTML = 'April' ;
                break;
            case x == 5:
                console.log('May');
                document.getElementById("demo2").innerHTML = 'May' ;
                break;
            case x == 6:
                console.log('June');
                document.getElementById("demo2").innerHTML = 'June' ;
                break;
            case x == 7:
                console.log('July');
                document.getElementById("demo2").innerHTML = 'July' ;
                break;
            case x == 8:
                console.log('August');
                document.getElementById("demo2").innerHTML = 'August' ;
                break;
            case x == 9:
                console.log('September');
                document.getElementById("demo2").innerHTML = 'September' ;
                break;
            case x == 10:
                console.log('October');
                document.getElementById("demo2").innerHTML = 'October' ;
                break;
            case x == 11:
                console.log('November');
                document.getElementById("demo2").innerHTML = 'November' ;
                break;
            case x == 12:
                console.log('December');
                document.getElementById("demo2").innerHTML = 'December' ;
                break;
            default:
                break;
        }  
    }
    else{
        console.log('none');
        document.getElementById("demo2").innerHTML = 'none' ;
    }
}

function Function1_two(){

    let i,j ;
    let a = 1;
    for( i = 1; i <= 4 ; i++) {
        for( j = 1 ; j <= i ; j++) {
            document.write(a++);
            document.write(' ');
        }
        document.write('<br>')
    }
}

function Function1_three(){

    for ( x = 1 ; x <= 1000 ; x++){
        
        if ( x%13 == 0 ){
            document.write(x);
            document.write('<br>');
        }
        else{
        }
    }
}

/* ---------- Third Taske --------------- */
function task_zero(){
    tellFortune();
}

function task_one(){
    calculateDogAge();
}

function task_two(){
    calculateSupply();
}

function task_three(){
    greet();
}

function task_four(){
    cube();
}


function task_five(){
    multiply();
}

function task_six(){
    shorterString();
}

function task_seven(){
    sameLength();
}

function task_eght(){
    canIGetADrivingLicense();
}

function task_nine(){
    largerNubmer();
}

function task_ten(){
    smallerNubmer();
}

function task_eleven(){
    isEven();
}


function tellFortune(job, location , partner, numChild){ 
    job = prompt('Enter Your Job :' ,);
    location = prompt('Enter Your Location :' ,);
    partner = prompt('Enter Your Partner Name :' ,);
    numChild = prompt('Enter Your Children Number :' ,);

    let information = 'You will be a ' + job + ' in ' + location + ' and married to ' + partner + ' with ' + numChild + 'kids';
    document.getElementById('demo4').innerHTML = information;
}

function calculateDogAge(ageHuman){
    ageHuman =  prompt('Enter Your Human Old :' ,);
    let ageDog = Number(ageHuman ) * 7 ;
    document.getElementById('demo4').innerHTML = 'Your doggie is ' + Number(ageDog) + ' years old in dog years!';
}

function calculateSupply(age , cup){
    age = prompt('Enter Your Age : ' ,);
    cup = prompt('Enter Your Cup in day : ' ,);
    let amount = Number(age) * Number(cup) * 365;
    document.getElementById('demo4').innerHTML = 'You will need ' + Number(amount) + ' cups of tea to last you until the ripe old age of 100';
}

function greet(name){
    name = prompt('Enter Your Name : ' ,);
    document.getElementById('demo4').innerHTML = 'Hello ' + name ;
}

function cube(number){
    number = prompt('Enter Your Number : ' ,);
    cube = number * number * number;
    document.getElementById('demo4').innerHTML = 'cube (' + number + ') = ' + cube;
}

function multiply(num1 , num2){
    num1 = prompt('Enter Your Num1 : ' ,);
    num2 = prompt('Enter Your Num2 : ' ,);
    let multi = num1 * num2;
    document.getElementById('demo4').innerHTML = 'multiply (' +  num1 + ' , ' + num2 + ') = ' + Number(multi);
}

function shorterString(){
    const str = ["naser", "hala", "muhammed", "ali", "serjio"];
    for ( let i = 0 ; i <= 5 ; i++){
        for ( let j = 1 ; j <= 5 ; j++){
            if ( str[i].length > str[j].length ){
                console.log(str[j]);
            }
            else if ( str[i].length < str[j].length ){
                console.log(str[i]);
            }
        }
        console.log("\n");
    }
}

function sameLength(str1 ,str2){
    str1 = prompt("Enter The First String : ");
    str2 = prompt("Enter The Second String : ");

    if( str1.length === str2.length){
        document.getElementById('demo4').innerHTML = 'sameLength(' + str1 + ',' +str2 + ')' + '\n' + 'True' ;
    }
    else{
        document.getElementById('demo4').innerHTML = 'sameLength(' + str1 + ',' +str2 + ')' + '\n' + 'False' ;
    }
}


function canIGetADrivingLicense(age){
    age = prompt("Enter Your Age : ");
    if( age >= 20){
        document.getElementById('demo4').innerHTML = 'yes you can'
    }
    else if( age < 20){
        let standAge = 20-Number(age);
        document.getElementById('demo4').innerHTML = 'please come back after ' + standAge + ' years to get one';
    }
}

function largerNubmer(num1, num2){
    num1 = prompt("Enter Your First Number : ");
    num2 = prompt("Enter Your Second Number : ");
    if( num1 > num2 ){
        document.getElementById('demo4').innerHTML = 'largerNubmer( ' + Number(num1) + ',' + Number(num2) + ' )' + "<br>" + Number(num1);
    }
    else if( num1 < num2 ){
        document.getElementById('demo4').innerHTML = 'largerNubmer( ' + Number(num1) + ',' + Number(num2) + ' )' + "<br>" + Number(num2);
    }
}

function smallerNubmer(num1, num2, num3){
    num1 = prompt("Enter Your First Number : ");
    num2 = prompt("Enter Your Second Number : ");
    num3 = prompt("Enter Your Third Number : ");
    if( Number(num1) < Number(num2) && Number(num1) < Number(num3) ){
        document.getElementById('demo4').innerHTML = 'smallerNubmer( ' + Number(num1) + ',' + Number(num2) + ',' + Number(num3) + ' )' + "<br>" + Number(num1);
    }
    if( Number(num2) < Number(num1) && Number(num2) < Number(num3) ){
        document.getElementById('demo4').innerHTML = 'smallerNubmer( ' + Number(num1) + ',' + Number(num2) + ',' + Number(num3) + ' )' + "<br>" + Number(num2);
    }
    if( Number(num3) < Number(num1) && Number(num3) < Number(num2) ){
        document.getElementById('demo4').innerHTML = 'smallerNubmer( ' + Number(num1) + ',' + Number(num2) + ',' + Number(num3) + ' )' + "<br>" + Number(num3);
    }
}


function isEven( num ){
    num = prompt("Enter Your Number : ");
    if( num %2 == 0 ){
        document.getElementById('demo4').innerHTML = 'isEven( ' + Number(num) + ' )' + "<br>" + 'True';
    }
    else if( num %2 != 0 ){
        document.getElementById('demo4').innerHTML = 'isEven( ' + Number(num) + ' )' + "<br>" + 'False';
    }
}

/* ---------- 4Th Taske --------------- */
function task1_zero(){

    // task 1
    let arry1 = [ 1,7 , 9 , 45];
    let lazy;
    let arry2 = ["Str" , "alex","moh" ,'the','fox' , 'over' , lazy, 'dog',  ];
    console.log(arry1);
    console.log(arry2);
    
    // task 2
    let ArryOne = [ ['orange' , 'salad' , 'pasta' , 'soup', 'sochi'] , 
                ['footbal' , 'run' , 'nothing' ] , 
                ['gapi meno wfih' , 'aldelar' , 'al shapah' , 'saw'] 
            ]
    console.log(ArryOne);

    // task 3
    let fruits=["Tomato","Banana","Watermelon"];
    console.log(fruits.indexOf("Tomato"));
    console.log(fruits.indexOf("Banana"));


    // task 4
    function firstOfArray(arry3){
        arry3 = [ 8 , 2 , 3 , 5 ];
        console.log(arry3[0]);
    }
    firstOfArray();

    // task 5
    function lastOfArray(arry4){
        arry4 = [ 8 , 2 , 3 , 5 ];
        console.log(arry4[3]);
    }
    lastOfArray();

    // task 6
    let numArry = [0,5,7,9];
    console.log(numArry);
    numArry.shift(0);
    numArry.shift(1);
    numArry.shift(2);
    console.log(numArry);
    numArry.push(10);
    console.log(numArry);
    numArry.unshift(1,3,4,6,8);
    console.log(numArry)

    // task 7
    let numArry2 = [5,9,-7,3.5];
    numArry2.pop();
    console.log(numArry2);
    numArry2.shift();
    console.log(numArry2);
    numArry2.unshift(25);
    console.log(numArry2);
    numArry2.push(12);
    console.log(numArry2);

    // task 8
    function middleOfArray(array4){
        if( array4.length == 4){
            console.log(array4[1],array4[2]);
        }
        else if( array4.length == 3){
            console.log(array4[1]);
        }
    }
    middleOfArray([1,4,5]);
    middleOfArray(["t","u","g","x"]);

    // task 9
    var animals = ['cat', 'ele', 'bird'];
    animals[0]= 'zebra';
    animals[1]= 'elephant';
    console.log(animals);

    // task 10
    function indexOfArray(num5, number){
        num5= [1,2,3,8,9];
        if ( number == 0){
            console.log(num5[0]);
        }
        else if ( number == 1){
            console.log(num5[1]);
        }
        else if ( number == 2){
            console.log(num5[2]);
        }
        else if ( number == 3){
            console.log(num5[3]);
        }
        else if ( number == 4){
            console.log(num5[4]);
        }
    }
    indexOfArray('num5', 3);
    indexOfArray('num5', 1);
    indexOfArray('num5', 4);

    
}
