// let arr=[[1,0,],[1,0,1],[1,0,]]
// // let a=1;
// let firsti=0,seci=0,thirdi=0;
// let firstj=0,secj=0,thirdj=0;
// let firsti1=0,seci1=0,thirdi1=0;
// let firstj1=0,secj1=0,thirdj1=0;
// for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//     if(arr[i][j]==1){
//         // a!=a
//         switch(i){
//             case 0: firsti++
//             if(firsti>2){
//                 console.log("user 1 won");
//             }
//             break;

//             case 1: seci++
//             if(seci>2){
//                 console.log("user 1 won");
//             }
//             break;

//             case 2: thirdi++
//             if(thirdi>2){           
//                 console.log("after:"+thirdi);
//                 console.log("user 13 won");
//             }
//             break;

//         }
//         switch(j){
//             case 0: firstj++
//             if(firstj>2){
//                 console.log("user 14 won");
//             }
//             break;

//             case 1: secj++
//             if(secj>2){
//                 console.log("user 15 won");
//             }
//             break;

//             case 2: thirdj++
//             if(thirdj>2){
//                 console.log("user 16 won");
//             }
//             break;

//         }
//     }
//     if(arr[i][j]==0){
//         // a=!a
//         switch(i){
//             case 0: firsti1++
//             if(firsti1>2){
//                 console.log("user 2 won");
//             }
//             break;

//             case 1: seci1++
//             if(seci1>2){
//                 console.log("user 2 won");
//             }
//             break;

//             case 2: thirdi1++
//             if(thirdi1>2){
//                 console.log("user 2 won");
//             }
//             break;

//         }
//         switch(j){
//             case 0: firstj1++
//             if(firstj1>2){
//                 console.log("user 2 won");
//             }
//             break;

//             case 1: secj1++
//             if(secj1>2){
//                 console.log("user 2 won");
//             }
//             break;

//             case 2: thirdj1++
//             if(thirdj1>2){
//                 console.log("user 2 won");
//             }
//             break;

//         }
//     }
// }
// }



let row = document.querySelector("span")
let column = document.querySelectorAll("input")
let para = document.querySelector("p")
let arr = [[, ,], [, ,], [, ,]]
let a = 1
let firsti = 0, seci = 0, thirdi = 0;
let firstj = 0, secj = 0, thirdj = 0;
let firsti1 = 0, seci1 = 0, thirdi1 = 0;
let firstj1 = 0, secj1 = 0, thirdj1 = 0;


    
  column.forEach(a=>{
    a.addEventListener('click',()=>{

    })
  })
        column[i].value = a
        switch (i) {
            case 0:
                if (column[i].value != '') {
                    arr[0][0] = a
                    console.log("1")
                    if (a == 1) {
                        a = 2
                    }
                    else {
                        a = 1
                    }
                }
                break;
            case 1:
                if (column[i].value != '') {
                    arr[0][1] = a
                    if (a == 1) {
                        a = 2
                    }
                    else {
                        a = 1
                    }

                    console.log("2")
                }
                break;
            case 2:
                if (column[i].value != '') {
                    arr[0][2] = a
                    if (a == 1) {
                        a = 2
                    }
                    else {
                        a = 1
                    }
                    console.log("3");

                }
                break;
            case 3:
                if (column[i].value != '') {
                    arr[1][0] = a
                    if (a == 1) {
                        a = 2
                    }
                    else {
                        a = 1
                    }
                    console.log("4");

                }
                break;
            case 4:
                if (column[i].value != '') {
                    arr[1][1] = a
                    if (a == 1) {
                        a = 2
                    }
                    else {
                        a = 1
                    }
                    console.log("5");

                }
                break;
            case 5:
                if (column[i].value != '') {
                    arr[1][2] = a
                    if (a == 1) {
                        a = 2
                    }
                    else {
                        a = 1
                    }
                    console.log("6");

                }
                break;
            case 6:
                if (column[i].value != '') {
                    arr[2][0] = a
                    if (a == 1) {
                        a = 2
                    }
                    else {
                        a = 1
                    }
                    console.log("7");

                }
                break;
            case 7:
                if (column[i].value != '') {
                    arr[2][1] = a
                    if (a == 1) {
                        a = 2
                    }
                    else {
                        a = 1
                    }
                    console.log("8");

                }
                break;
            case 8:
                if (column[i].value != '') {
                    arr[2][2] = a
                    if (a == 1) {
                        a = 2
                    }
                    else {
                        a = 1
                    }
                    console.log("jksdfhb")
                }
                break;
        }


function check(){
    for (let k = 0; k < 3; k++) {
        for (let j = 0; j < 3; j++) {
            
    console.log("I am dta" + arr[0][0])
            if (arr[k][j] == 1) {
                // a!=a
                switch (k) {
                    case 0: firsti++
                        console.log("happens something")
                        if (firsti > 2) {
                           alert("user 1 won");
                        }
                        break;
    
                    case 1: seci++
                        if (seci > 2) {
                            alert("user 1 won");
                        }
                        break;
    
                    case 2: thirdi++
                        if (thirdi > 2) {
                           alert("user 13 won");
                        }
                        break;
    
                }
                switch (j) {
                    case 0: firstj++
                        if (firstj > 2) {
                            alert("user 14 won");
                        }
                        break;
    
                    case 1: secj++
                        if (secj > 2) {
                            alert("user 15 won");
                        }
                        break;
    
                    case 2: thirdj++
                        if (thirdj > 2) {
                            alert("user 16 won");
                        }
                        break;
    
                }
            }
            if (arr[k][j] == 2) {
                // a=!a
                switch (k) {
                    case 0: firsti1++
                        if (firsti1 > 2) {
                            alert("user 2 won");
                        }
                        break;
    
                    case 1: seci1++
                        if (seci1 > 2) {
                            alert("user 2 won");
                        }
                        break;
    
                    case 2: thirdi1++
                        if (thirdi1 > 2) {
                            alert("user 2 won");
                        }
                        break;
    
                }
                switch (j) {
                    case 0: firstj1++
                        if (firstj1 > 2) {
                            alert("user 2 won");
                        }
                        break;
    
                    case 1: secj1++
                        if (secj1 > 2) {
                            alert("user 2 won");
                        }
                        break;
    
                    case 2: thirdj1++
                        if (thirdj1 > 2) {
                            alert("user 2 won");
                        }
                        break;
    
                }
            }
        }
    }
    }

