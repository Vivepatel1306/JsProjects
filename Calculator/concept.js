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
let inputs = [];
let operand = [];
function GetInput(numbutton) {
    numbutton.addEventListener('click', () => {
        if (numbutton.getAttribute("id") != null) {
            let a = numbutton.getAttribute("id")
            a = parseInt(a)
            inputs.push(a)

        }
    })
}
function InstructionInput(inst) {
    inst.addEventListener('click', () => {
        if (inst.getAttribute("class") != null) {
            let a = inst.getAttribute("class")
            operand.push(a)
            // for (let i = 0; i < operand.length; i++) {
            //     console.log(operand[i])
            // }
        }
    })
}

function equals(b, inputs, operand) {
    b.addEventListener('click', () => {
        if (b.getAttribute("name") == "equal") {
            for (let i = 0; i < inputs.length; i++) {
                console.log(operand.length);
                switch (operand[i]) {
                    case 'add': let a = inputs[0] + inputs[1]
                        console.log(a);
                        inputs.splice(0, 2);
                        operand.splice(0, 1);
                        inputs.push(a)
                        for(let d=0;i<inputs.length;i++){
console.log(`input data at ${i} is ${inputs[i]}`);
console.log(`oprand data at ${i} is ${operand[i]}`);

                        }

                }
            }
        }
    })


}
button.forEach(butt => {
    GetInput(butt)
    InstructionInput(butt)

    equals(butt, inputs, operand)
})



