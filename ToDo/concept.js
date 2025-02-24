let arr = [];
let container = document.querySelector(".container")
let input = document.querySelector(".input")
function edit(index) {
    input.value = arr[index].text
    arr.splice(index, 1)

    // let gotdata = localStorage.getItem('userdata')
    // let outputdata = JSON.parse(gotdata)
    // outputdata.splice(0, 1)
    // localStorage.setItem('userdata', JSON.stringify(outputdata))
    // updateContainer()

}

function remove(index) {
    arr.splice(index, 1)
    localStorage.removeItem('arr[index]');
    updateContainer()
}
function updateContainer() {
    container.innerHTML = ''
    localStorage.clear();
    arr.forEach((data, index) => {
        let containerData = document.createElement("li")
        containerData.innerHTML = ` <span>${data.text}</span>
                                    <span class="edit" onclick="edit(${index})" >✍</span>
                                    <span onclick="remove(${index})">⛔</span>`
        container.append(containerData);
        console.log(document.querySelector(".container"));
    })

    // let data = JSON.stringify(arr)
    // localStorage.setItem('userdata', data)
    // let storeddata = localStorage.getItem('userdata')
    // console.log(JSON.parse(storeddata))
}
let addButton = document.querySelector(".add").addEventListener('click', () => {
    if (input.value) {
        arr.push({ text: input.value })
        console.log(arr)

        updateContainer()
        input.value = ''
    }
})