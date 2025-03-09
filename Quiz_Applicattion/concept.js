let question = document.querySelector("h1")
let option = document.querySelectorAll(".option")
// let nextButton = document.querySelector('.next')
let box = document.querySelector("div")
let arr = [
    {
        Question: "PM of India",
        Option1: { opt: "Rahul Gandhi", Answer: "Wrong" },
        Option0: { opt: "Narendra modi", Answer: "Correct" },
    },
    {
        Question: "CM of MP",
        Option1: { opt: "MOhan Yadav", Answer: "Correct" },
        Option0: { opt: "Shivraj  Singh", Answer: "Wrong" }
    },
    {
        Question: "DON of India",
        Option1: { opt: "Vivek", Answer: "Correct" },
        Option0: { opt: "Shivraj  Singh", Answer: "Wrong" }
    }
]
// console.log(arr[0])
let i = 0;
function hello() {
    Object.keys(arr[i]).forEach((key) => {
        if (key.startsWith("Option")) {
            if (arr[i][key].Answer == "Correct") {
                console.log("true")
                
            }
            else 
                console.log("false")
            
        }
    })
}
function show() {

    if (i < arr.length) {
        question.innerText = arr[i].Question
        option[0].innerText = arr[i].Option1.opt
        option[1].innerText = arr[i].Option0.opt
        i++;
    }
}
show()
let next = document.createElement("button")
next.innerText = "next"
box.appendChild(next)
next.addEventListener('click', show)

option.forEach((e) => addEventListener('click', hello))