let input = document.querySelector('input')
let button = document.querySelector('button')
let container = document.querySelector('.container')
let arr = [];


function edit(index) {
    input.value = arr[index].value
    arr.splice(index, 1)
    add()
}
 function remove(index){
    arr.splice(index,1);
    add()
 }



function add() {
    container.innertext=''
    arr.push(input.value)
    let all = ''
    arr.forEach((a,index) => {
        console.log(a);
        all += `  <div>
        <p>${a}</p>
        <p onclick="edit(${index})" class="edit">edit</p>
        <p onclick="remove(${index})">del</p>
    </div>`;
    })
    container.innerHTML = all
    input.value = ''
}





button.addEventListener('click', () =>
    add()
)