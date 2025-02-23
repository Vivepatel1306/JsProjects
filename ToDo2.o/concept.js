let input = document.querySelector('input')
let button = document.querySelector('button')
let container = document.querySelector('.container')
let arr = [];

function add() {
    arr.push(input.value)
    let all = ''
    arr.forEach(a => {
        console.log(a);
        all += `  <div>
        <p>${a}</p>
        <p class="edit">edit</p>
        <p>del</p>
    </div>`;
    })
    container.innerHTML = all
    input.value = ''
}




let element_edit = document.querySelector('.edit')
element_edit.addEventListener('click', () => {

    input.value = arr[0]

}

)
button.addEventListener('click', () =>
    add()
)