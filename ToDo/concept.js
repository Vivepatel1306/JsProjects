let arr = [];
let container = document.querySelector(".container")
let input = document.querySelector(".input")
function edit(index) {
    input.value = arr[index].text
    arr.splice(index, 1)
    updateContainer()

}

function remove(index) {
    arr.splice(index, 1)
    updateContainer()
}
function updateContainer() {
    container.innerHTML = ''
    arr.forEach((data, index) => {
        let containerData = document.createElement("li")
        containerData.innerHTML = ` <span>${data.text}</span>
                                    <span class="edit" onclick="edit(${index})" >EDIT</span>
                                    <span onclick="remove(${index})">X</span>`
        container.append(containerData);
        console.log(document.querySelector(".container"));
    })


}
let addButton = document.querySelector(".add").addEventListener('click', () => {
    if (input.value) {
        arr.push({ text: input.value, completed: false })
        console.log(arr)

        updateContainer()
        input.value = ''
    }
})