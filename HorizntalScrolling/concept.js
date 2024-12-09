// let next = document.querySelectorAll("button")[1]
// next.addEventListener('click', function () {
//     let NextImg = document.querySelector(".second")
//     NextImg.style.transform = "translatex(-83.5vh)"
// })
// let back = document.querySelectorAll("button")[0]
// back.addEventListener('click', function () {
//     let NextImg = document.querySelector(".second")
//     NextImg.style.transform = "translatex(0vh)"
// })


let image = document.querySelectorAll("img")
let a = 0
function next() {
    if (a == 2) {
        a = 0
    }
    a++
    console.log(a);
    
    switch (a) {
        case 1:
            let temp = image[0].src
            image[0].src = image[1].src
            image[1].src = temp
            break;
        case 2:
            let temp1 = image[0].src
            image[0].src = image[2].src
            image[2].src = temp1
            break;
    }
}

let b=0
function back() {
    if (b == 3) {
        b = 0
    }
    b++
    switch (b) {
        case 1:
            let tempo = image[0].src
            image[0].src = image[1].src
            image[1].style=
            image[1].src = tempo
            break;
        case 2:
            let tempo1 = image[0].src
            image[0].src = image[2].src
            image[2].src = tempo1
            break;
       
    }
}