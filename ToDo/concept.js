let inputBox = document.querySelector("input")
let add = document.querySelector("button")
let container = document.querySelector(".container")
let arr = [];
add.addEventListener('click', () => {
    let p1 = document.createElement("li");
    let x = document.createElement("span");
    x.innerHTML="\u00d7"
   
    let br = document.createElement("br")
    p1.innerText = inputBox.value;
    p1.append(x)
    arr.push(p1.innerText );
    container.append(p1.innerText )
    container.append(br)
   
    inputBox.value = ''
})