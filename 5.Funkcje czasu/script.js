//Zad 1 


let i = 1;
    let myTimer = setInterval(() => {
        console.log("Cześć po raz: " + i);
        i++;
        if (i > 15) {
            clearInterval(myTimer);
        };
    }, 3000)
    
//Zad 2


let myArray =  [1, 2, 3, 4];
let myTimer = setTimeout(() => {
        for (let i = 0; i < myArray.length; i++) {
            console.log(myArray[i]);
        }
}, 2000 )

    let j = 0
    let myInterval = setInterval(() => {
        console.log(myArray[j]);
        j++;
    if (j >= myArray.length) {
        clearInterval(myInterval);
    }
    }, 3000)
    
