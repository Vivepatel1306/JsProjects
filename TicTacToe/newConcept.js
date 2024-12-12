let inputBox = document.querySelectorAll("div")
let winner = document.querySelector("h1")
const arr = [[, ,], [, ,], [, ,]]
let b = "✅"
let c = "❌"
let a = b
let resetData = 0
inputBox.forEach(input => {
    input.addEventListener('click', () => {

        switch (input.id) {
            case '0': if (arr[0][0] == null) {
                input.innerHTML = a
                arr[0][0] = a
                if (a == b) {
                    a = c
                }
                else {
                    a = b
                }
            }
                break;
            case '1': if (arr[0][1] == null) {
                input.innerHTML = a
                arr[0][1] = a
                console.log(input.id);
                if (a == b) {
                    a = c
                }
                else {
                    a = b
                }
            }
                break;
            case '2': if (arr[0][2] == null) {
                input.innerHTML = a
                arr[0][2] = a
                console.log(input.id);
                if (a == b) {
                    a = c
                }
                else {
                    a = b
                }
            }
                break;
            case '3': if (arr[1][0] == null) {
                input.innerHTML = a
                arr[1][0] = a
                console.log(input.id);
                if (a == b) {
                    a = c
                }
                else {
                    a = b
                }
            }
                break;
            case '4': if (arr[1][1] == null) {
                input.innerHTML = a
                arr[1][1] = a
                console.log(input.id);
                if (a == b) {
                    a = c
                }
                else {
                    a = b
                }
            }
                break;
            case '5': if (arr[1][2] == null) {
                input.innerHTML = a
                arr[1][2] = a
                console.log(input.id);
                if (a == b) {
                    a = c
                }
                else {
                    a = b
                }
            }
                break;
            case '6': if (arr[2][0] == null) {
                input.innerHTML = a
                arr[2][0] = a
                console.log(input.id);
                if (a == b) {
                    a = c
                }
                else {
                    a = b
                }
            }
                break;
            case '7': if (arr[2][1] == null) {
                input.innerHTML = a
                arr[2][1] = a
                console.log(input.id);
                if (a == b) {
                    a = c
                }
                else {
                    a = b
                }
            }
                break;
            case '8': if (arr[2][2] == null) {
                input.innerHTML = a
                arr[2][2] = a
                console.log(input.id);
                console.log(input.value)

                if (a == b) {
                    a = c
                }
                else {
                    a = b
                }
            }
                break;
        }
        // for 1 condition is going on
        if ((arr[0][0] == "✅" && arr[0][1] == "✅" && arr[0][2] == "✅") ||
            (arr[1][0] == "✅" && arr[1][1] == "✅" && arr[1][2] == "✅") ||
            (arr[2][0] == "✅" && arr[2][1] == "✅" && arr[2][2] == "✅") ||

            (arr[0][0] == "✅" && arr[1][0] == "✅" && arr[2][0] == "✅") ||
            (arr[0][1] == "✅" && arr[1][1] == "✅" && arr[2][1] == "✅") ||
            (arr[0][2] == "✅" && arr[1][2] == 1 && arr[2][2] == "✅") ||

            (arr[0][0] == "✅" && arr[1][1] == "✅" && arr[2][2] == "✅") ||
            (arr[2][0] == "✅" && arr[1][1] == "✅" && arr[0][2] == "✅")
        ) {
            winner.innerHTML = `✅ is winner`
            setTimeout(() => reset(), 3000);
        }

      

        if ((arr[0][0] == "❌" && arr[0][1] == "❌" && arr[0][2] == "❌") ||
            (arr[1][0] == "❌" && arr[1][1] == "❌" && arr[1][2] == "❌") ||
            (arr[2][0] == "❌" && arr[2][1] == "❌" && arr[2][2] == "❌") ||

            (arr[0][0] == "❌" && arr[1][0] == "❌" && arr[2][0] == "❌") ||
            (arr[0][1] == "❌" && arr[1][1] == "❌" && arr[2][1] == "❌") ||
            (arr[0][2] == "❌" && arr[1][2] == "❌" && arr[2][2] == "❌") ||

            (arr[0][0] == "❌" && arr[1][1] == "❌" && arr[2][2] == "❌") ||
            (arr[2][0] == "❌" && arr[1][1] == "❌" && arr[0][2] == "❌")
        ) {
            winner.innerHTML = `❌ is winner`
            setTimeout(() => reset(), 3000);

        }
    }

    )
})
// })
function reset() {
    winner.innerText = null
    a = b

    // resetData=0
    inputBox.forEach(box => {
        box.innerText = ''
    })
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr[i][j] = null
        }
    }
}
document.querySelector("button").addEventListener('click', reset)

function CheckWinner() {
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] == "✅" && arr[i][1] == "✅" && arr[i][2] == "✅") { winner.innerHTML = `✅ is winner` }
        if (arr[0][i] == "✅" && arr[1][i] == "✅" && arr[2][i] == "✅") { winner.innerHTML = `✅ is winner` }
        else if ((arr[0][0] == "✅" && arr[1][1] == "✅" && arr[2][2] == "✅") ||
            (arr[2][0] == "✅" && arr[1][1] == "✅" && arr[0][2] == "✅")) {
            winner.innerHTML = `✅ is winner`
        }
    }

}