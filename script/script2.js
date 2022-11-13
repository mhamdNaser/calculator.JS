function task3_zero(){
    const arr = ['sara', 'naser', 'seraj', 'ahmad', 'samer', 'mona']
    arr.forEach(getname);
}

function getname(item, index, arr){
    if ( arr[index].startsWith('s')){
        console.log(item);
    }
}