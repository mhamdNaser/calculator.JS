function Function_first(){
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

function Function_two(){

    let str = '';
    for(i = 1; i < 5 ; i++) {
        for(j = 0 ; j < i ; j++) {
            str += j + j ;
            str += ' ';
        }
        str += '\n';
    }
    console.log(str);
}