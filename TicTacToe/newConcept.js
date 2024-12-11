let inputBox = document.querySelectorAll("input")
let arr = [[, ,], [, ,], [, ,]]
let a = 1
let firsti = 0, seci = 0, thirdi = 0;
let firstj = 0, secj = 0, thirdj = 0;
let firsti1 = 0, seci1 = 0, thirdi1 = 0;
let firstj1 = 0, secj1 = 0, thirdj1 = 0;
inputBox.forEach(input => {
    input.addEventListener('click', () => {
        input.value = a
        switch (input.id) {
            case '0': arr[0][0] = a
                console.log(input.id);
                if (a == 1) {
                    a = 2
                }
                else {
                    a = 1
                }
                break;
            case '1': arr[0][1] = a
                console.log(input.id);
                if (a == 1) {
                    a = 2
                }
                else {
                    a = 1
                }
                break;
            case '2': arr[0][2] = a
                console.log(input.id);
                if (a == 1) {
                    a = 2
                }
                else {
                    a = 1
                }
                break;
            case '3': arr[1][0] = a
                console.log(input.id);
                if (a == 1) {
                    a = 2
                }
                else {
                    a = 1
                }
                break;
            case '4': arr[1][1] = a
                console.log(input.id);
                if (a == 1) {
                    a = 2
                }
                else {
                    a = 1
                }
                break;
            case '5': arr[1][2] = a
                console.log(input.id);
                if (a == 1) {
                    a = 2
                }
                else {
                    a = 1
                }
                break;
            case '6': arr[2][0] = a
                console.log(input.id);
                if (a == 1) {
                    a = 2
                }
                else {
                    a = 1
                }
                break;
            case '7': arr[2][1] = a
                console.log(input.id);
                if (a == 1) {
                    a = 2
                }
                else {
                    a = 1
                }
                break;
            case '8': arr[2][2] = a
                console.log(input.id);
                if (a == 1) {
                    a = 2
                }
                else {
                    a = 1
                }
                break;
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (arr[i][j] == 1) {
                    switch (i) {
                        case 0:
                            if (i + j == 0) {
                                firsti++
                                console.log(i);
                                console.log(j);
                                console.log(arr[i][j]);
                                if (firsti > 2) {
                                    console.log("user 11 won");
                                }
                            }
                            break;

                        case 1: seci++;
                            if (seci > 2) {
                                console.log("user 12 won");
                            }
                            break;

                        case 2: thirdi++
                            if (thirdi > 2) {
                                console.log("user 13 won");
                            }
                            break;

                    }
                    switch (j) {
                        case 0: firstj++
                            if (firstj > 2) {
                                console.log("user 14 won");
                            }
                            break;

                        case 1: secj++
                            if (secj > 2) {
                                console.log("user 15 won");
                            }
                            break;

                        case 2: thirdj++
                            if (thirdj > 2) {
                                console.log("user 16 won");
                            }
                            break;

                    }
                }
                else if (arr[i][j] == 2) {
                    // a=!a
                    switch (i) {
                        case 0:
                            firsti1++
                            if (firsti1 > 2) {
                                console.log("user 2 won");
                            }
                            break;

                        case 1: seci1++
                            if (seci1 > 2) {
                                console.log("user 2 won");
                            }
                            break;

                        case 2: thirdi1++
                            if (thirdi1 > 2) {
                                console.log("user 2 won");
                            }
                            break;

                    }
                    switch (j) {
                        case 0: firstj1++
                            if (firstj1 > 2) {
                                console.log("user 2 won");
                            }
                            break;

                        case 1: secj1++
                            if (secj1 > 2) {
                                console.log("user 2 won");
                            }
                            break;

                        case 2: thirdj1++
                            if (thirdj1 > 2) {
                                console.log("user 2 won");
                            }
                            break;

                    }
                }
            }
        }


    })
})