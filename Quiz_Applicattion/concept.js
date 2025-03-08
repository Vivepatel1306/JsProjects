let heading = document.querySelector("h1")
let option = document.querySelectorAll(".option")
let nextButton = document.querySelector('.next')


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

let i=0;

function next(){
    if(i>2){
        return
    }
heading.innerText=arr[i].Question
option[0].innerText=arr[i].Option0.opt
option[1].innerText=arr[i].Option1.opt
i++
}
next()
nextButton.addEventListener('click',()=>{next()})

function right(){
    return arr[i].Option0.opt,arr[i].Option1.opt
}

