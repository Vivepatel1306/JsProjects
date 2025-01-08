let input = document.querySelector("input")
let output = document.querySelector("p")

input.addEventListener('input', () => {
    let outputText = input.value
    output.style.color = " blueviolet"
    input.style.border = "2px solid  blueviolet"
    output.textContent = `Password is Weak`
    if (outputText.includes("%") || outputText.includes("@") || outputText.includes("#") || outputText.includes("$") || outputText.includes("&")) {
        output.style.color = "green"
        input.style.border = "2px solid green"
        output.textContent = `Password is strong`
    }
    if (outputText.includes("@#")) {
        output.style.color = "red"
        input.style.border = "2px solid red"
        output.textContent = `Password is Super strong`;
    }
}
)
