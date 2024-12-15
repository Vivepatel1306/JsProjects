3+3-1/4*5
let operand = ["a", "d", "a", "m"]
let data = [7,5,5,8,2]
let len = operand.length
console.log("at top" + data.length);
for (let oplength = 0; oplength < len; oplength++) {
    if (operand.includes("d")) {
        let i = operand.indexOf("d")
        let newElement = data[i] / data[i + 1]
        data.splice(i, 2, newElement)
        operand.splice(i, 1)
        // console.log(newElement)
    }
     if (operand.includes("m")) {
        let i = operand.indexOf("m")
        let newElement = data[i] * data[i + 1]
        data.splice(i, 2, newElement)
        operand.splice(i, 1)
        // console.log(newElement)
    }
     if (operand.includes("a")) {
        let i = operand.indexOf("a")
        let newElement = data[i] + data[i + 1]
        data.splice(i, 2, newElement)
        operand.splice(i, 1)
        // console.log(newElement)
    }
     if (operand.includes("s")) {
        let i = operand.indexOf("s")
        let newElement = data[i] - data[i + 1]
        data.splice(i, 2, newElement)
        operand.splice(i, 1)
        // console.log(newElement)
    }
  
}

// for (let x = 0; x < data.length; x++) {
//     console.log(data[x]);
//     // console.log(operand[i]);
// }

console.log("at bottom" + data.length);
console.log("at bottom" + operand.length);
console.log(data[0]);
