// MY FUNCTION  
"use strict";

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

