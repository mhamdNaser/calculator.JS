function test_zero(){
    let name = document.getElementById("demo3").innerHTML ;
    document.getElementById("demo3").innerHTML = name.replace("name set", "muhammed naser");
}

function test_one(){
    let first = "Muhammed";
    let last = "naser";

    let len = first.length;
    let resli = last.slice(-2);
    let str = first.substring(2,7);

    document.getElementById("demo4").innerHTML = len + ' ' + resli  + ' ' + str;
}

function test_two(){
    let first = "this my project name this the first pro for name ";
    document.getElementById("demo4").innerHTML = first.replace("name", "Muhammed");

}

function test_three(){
    let first = "Muhammed";
    document.getElementById("demo4").innerHTML =  first.toUpperCase();
}

function test_four(){
    let first = "MUHAMMED";
    document.getElementById("demo4").innerHTML =  first.toLowerCase();
}

function test_five(){
    let first = "Muhammed";
    let last = "Naser";
    let full = first.concat(" "+last);
    document.getElementById("demo4").innerHTML =  full ;
}