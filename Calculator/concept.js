// let a;
// let c="*"
// let data=document.querySelectorAll("li")
// let  adder=data[4].textContent
// let  adder1=data[5].textContent
// // adder=parseInt(adder)
// console.log(typeof(adder))
// console.log(adder1)
// a=adder+adder1
// // a=parseInt(a)
// console.log(a)
// let x=5
// let y='4'
// console.log(x/y);


let button = document.querySelectorAll("li")

let output = 0;
button.forEach(butt => {
    butt.addEventListener('click', () => {
        // console.log("hello")
        if (butt.getAttribute("id") != null) {
            let a = butt.getAttribute("id")
            a = parseInt(a)
            //   console.log(typeof(a))
            console.log(output + a);
        }
        if (butt.getAttribute("id") == "*"){
            output=output+
        }
    })
})



