let arr =[];
let input = document.querySelectorAll("li")
let output=document.querySelector("p")
output.innerHTML=arr
input.forEach(element => {
   
    if (element.id != "=" && element.id != "AC" && element.id != "D") {
        element.addEventListener('click', () => {
         arr += element.id
            console.log(arr);
            output.innerHTML=arr
        })
    }
    else if (element.id == "=") {
        element.addEventListener('click', () => {
            arr = eval(arr)
            console.log(arr);
            output.innerHTML=arr
        })
    }

    else if(element.id =="AC"){
        element.addEventListener('click', () => {
            arr = ""
            console.log(arr);
            output.innerHTML=arr
        })
    }
    else if(element.id =="D"){
        element.addEventListener('click', () => {
           arr.pop()
            console.log("data at 0"+arr);
    // for(let a=0;a<arr.length;a++){
    //     console.log(arr[a]);
    //         }   
    })
    }

})
