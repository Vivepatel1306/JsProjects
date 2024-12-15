let button = document.querySelectorAll("li")
let inputs = [];
let operand = [];

function GetInput(numbutton) {
    numbutton.addEventListener('click', () => {
        if (numbutton.getAttribute("id") != null) {
            let a = numbutton.getAttribute("id")
            // let b=b.append(a)
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
        }
    })
}

function equals(b, inputs, operand) {
    b.addEventListener('click', () => {
        if (b.getAttribute("name") == "equal") {
            let x = operand.length
            console.log(x);
            for (let oplength = 0; oplength < x; oplength++) {
                
                if (operand.includes("d")) {
                    let i = operand.indexOf("d")
                    let newElement = inputs[i] / inputs[i + 1]
                    inputs.splice(i, 2, newElement)
                    operand.splice(i, 1)
                    console.log(newElement)
                }
                 if (operand.includes("m")) {
                    let i = operand.indexOf("m")
                    let newElement = inputs[i] * inputs[i + 1]
                    inputs.splice(i, 2, newElement)
                    operand.splice(i, 1)
                    console.log(newElement)
                }
                 if (operand.includes("a")) {
                    let i = operand.indexOf("a")
                    let newElement = inputs[i] + inputs[i + 1]
                    inputs.splice(i, 2, newElement)
                    operand.splice(i, 1)
                    console.log(newElement)
                }
                 if (operand.includes("s")) {
                    let i = operand.indexOf("s")
                    let newElement = inputs[i] - inputs[i + 1]
                    inputs.splice(i, 2, newElement)
                    operand.splice(i, 1)
                    console.log(newElement)
                }
              
            }
            console.log(`input data at 0 is ${inputs[1]}`);
            let showoutput = document.querySelector(".output")
            showoutput.innerHTML = inputs[0]
        }
    })
}

button.forEach(butt => {
    GetInput(butt)
    InstructionInput(butt)

    equals(butt, inputs, operand)
})



