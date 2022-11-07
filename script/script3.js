function test_zero(){
    let first = "Muhammed";
    let last = "naser";

    let len = first.length;
    let resli = last.slice(-2);
    let str = first.substring(2,7);

    document.getElementById("demo3").innerHTML = len + ' ' + resli  + ' ' + str;
}

function test_one(){
    let name =  "my name is : name set" ;
    document.getElementById("demo3").innerHTML = name.replace("name set", "muhammed naser");
}

function test_two(){
    let first = "this my project name this the first pro for name ";
    document.getElementById("demo3").innerHTML = first.replaceAll("name", "Muhammed");

}

function test_three(){
    let first = "Muhammed";
    document.getElementById("demo3").innerHTML =  first.toUpperCase();
}

function test_four(){
    let first = "MUHAMMED";
    document.getElementById("demo3").innerHTML =  first.toLowerCase();
}

function test_five(){
    let first = "Muhammed";
    let last = "Naser";
    let full = first.concat(" "+last);
    document.getElementById("demo3").innerHTML =  full ;
}