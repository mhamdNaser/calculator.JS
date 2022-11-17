



async function show3(){
    const x = await fetch("https://breakingbadapi.com/api/characters")
    const data = await x.json()

    console.log(data)
    console.log(x)

    var table = "<table>"
    table += "<tr>"
    table += "<th>" + "Name" + "</th>"
    table += "<th>" + "Nick Name" + "</th>" 
    table += "<th>" + "Image" + "</th>" 
    table += "<tr>"

    data.map((ele) =>{
        table += "<tr>";
        table += "<td>" + ele.name + "</td>";
        table += "<td>" + ele.nickname + "</td>" ;
        table += "<td>" + '<img src=${ele.img}' + "</td>" ;
        table += "<tr>"
    });
    table += "</tr>"
    document.getElementById('data').innerHTML = table;

}


function clear(){
    console.log("hello")
    document.getElementById('data').innerHTML = "";
}