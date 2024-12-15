let data = [7, 5, 5, 8, 2, "a", "s", "d", "m"]
let size = parseInt(data.length/2)
console.log("size"+size);

// for (let x = 0; x < size; x++) {
    if (data.includes("d")) {
        let i = data.indexOf("d")
        console.log("i is " + i);
        let newElement = data[i - 2] / data[i - 1]
        data.splice(i - 2, 3, newElement)
    }
    if (data.includes("m")) {
        let i = data.indexOf("m")
        console.log("i is " + i);
        let newElement = data[i - 2] * data[i - 1]
        data.splice(i - 2, 3, newElement)
    }
    if (data.includes("a")) {
        let i = data.indexOf("a")
        console.log("i is " + i);
        let newElement = data[i - 2] + data[i - 1]
        data.splice(i - 2, 3, newElement)
    }
    if (data.includes("s")) {
        let i = data.indexOf("s")
        console.log("i is " + i);
        let newElement = data[i - 2] - data[i - 1]
        data.splice(i - 2, 3, newElement)
    // }


}


for (let i = 0; i < data.length; i++) {
    console.log(data[i]);

}