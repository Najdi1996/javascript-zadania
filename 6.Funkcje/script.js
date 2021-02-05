//Zad 1
 
function xyz(){
    console.log("Udało Się!");
}
xyz()

//Zad 2 

function xyz (param) {
    console.log(param)
}
xyz('task2')

//Zad 3

function xyz (myArray) {
    console.log(myArray);
    return myArray
}

let zyx = [1, 'two', 3, 'four']
xyz(zyx);

//Zad 4

function xyz (paramString) {
       let i = 0;
       let myInterval = setInterval(() => {
           if (i < 5) {
               console.log(paramString)
               i++
           }
           else {
               console.log("Koniec")
               clearInterval(myInterval)
           }
       },3000)
    }
xyz('Task4')
