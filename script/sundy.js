task4_zero = () => {
    const arry = [1,2,3];
    const arry1 = [5,1,2,3,10] 
    arry.forEach(doubleValues);
    arry1.forEach(doubleValues);

    console.log(arry);
    console.log(arry1);
}

task4_one = () => {
    const arry = [1,2,3];
    const arry1 = [5,1,2,3,10] 
    arry.forEach(onlyEvenValues);
    arry1.forEach(onlyEvenValues);
}

function doubleValues(item,index, arrNew){
    arrNew[index] = item*2;
}

function onlyEvenValues(item,index, arrNew){
    if ( arrNew[index]%2 == 0 ){
        console.log(item);
    }
}















task5_zero = () => {
    const arry = [1, 3, 4, 5];
    const x = arry.map((item) => item*item);
    console.log(x);
    document.getElementById('demo10').innerHTML = x;
}

task5_one = () => {
    const arry = [1, 3, 4, 5];
    const x = arry.map(makString);
    console.log(arry);
    document.getElementById('demo10').innerHTML = x;
}

function makString(item){
    console.log(item.join(''));
}
