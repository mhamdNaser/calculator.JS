// defined class and my calculater Area and calculater button
const calcuOperat = new calculaterOperation
const numberArea = document.getElementById("numberArea");
const calculaterNumber = [`c`,`m`,`de`,`<-`,1,2,3,`+`,4,5,6,`-`,7,8,9,`=`,0,`*`,`/`]

// create calculater button
calculaterNumber.map((e) => {
  var button = document.createElement("button");
  button.textContent = e;
  if(button.textContent == '='){
    button.style.gridRowEnd = "2 span" 
    button.style.backgroundColor = "#e63946"
    button.onmouseover = () => {
      button.style.backgroundColor = "#97242d";
    };
  }else if(button.textContent == 'c'){
    button.title = "Clear Input Space"
  }else if(button.textContent == 'm'){
    button.title = "Import Content In Memory"
  }
  button.onclick = () => calcuOperat.operator(e)
  numberArea.appendChild(button);
});