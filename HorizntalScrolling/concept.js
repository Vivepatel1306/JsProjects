let next = document.querySelectorAll("button")[1]
next.addEventListener('click', function () {
    let NextImg = document.querySelector(".second")
    NextImg.style.transform = "translatex(-83.5vh)"
})
let back = document.querySelectorAll("button")[0]
back.addEventListener('click', function () {
    let NextImg = document.querySelector(".second")
    NextImg.style.transform = "translatex(0vh)"
})