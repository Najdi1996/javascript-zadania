//Zad 1
 
let xyz = [1, "dog", 2, "cat"]
for (let i = 0; i<xyz.length;i++) {
    console.log(xyz[i])
}

//Zad 2

let xyz = [1,"cat",3,"dog",5,"fox"]
//2.1
console.log ("Pierwszy element: " +xyz[0] + " Drugi Element: " +xyz[1])
//2.2
console.log("Ostatni element: " +[xyz[xyz.length - 1]])
//2.3
for (let i = 0; i<xyz.length;i++) {
    console.log("Wszystkie elementy: " +xyz[i])
}
// 2.4
for (let i = 0; i<xyz.length; i++) {
    if (i % 2) {
        console.log("Co drugi element: " +xyz[i])
    }
}

// 2.5
xyz.forEach((k) => {
    if (typeof(k) == "string") {
        console.log("Wszystkie stringi: " +k);
    }
});

//2.6
xyz.forEach((j) => {
    if(typeof(j) == "number") {
    console.log("Wszystkie liczby: " + j)
    } 
});


//Zad 3

let xyz = [1,2,3,4,6,4];
let zyx = 0;
let abc = 0;
let aaa = 0;
//3.1
for(let i = 0; i<xyz.length; i++) {
    zyx = zyx + xyz[i];
}

console.log("Suma wszystkich elementów: " +zyx);

//3.2

for(let i = 0; i<xyz.length; i++) {
    abc = abc - xyz[i];
}

console.log("Różnica wszystkich elementów: " +abc);


//3.3

for (let i = 0; i<xyz.length; i++) {
    aaa = (aaa + xyz[i])
}
let aab = aaa / xyz.length
console.log("Średnia wszystkich elementów: " + aab);


//3.4

for (let i = 0; i<xyz.length; i++) {
    if (xyz[i] % 2 === 0) {
        console.log ("Element parzysty w tablicy: " + xyz[i])
    }
}

//3.5

for (let i = 0; i<xyz.length; i++) {
    if (xyz[i] % 2 === 1) {
        console.log ("Element nieparzysty w tablicy: " + xyz[i])
    }
}

//3.6

let max = xyz[0];
for (let i = 1; i <xyz.length; i++) {
    if (xyz[i] > max) {
        max = xyz[i];
    }
}
console.log ("Największą liczbą jest: " + max) 

//3.7 

let min = xyz[0] 
for (let i = 1; i < xyz.length; i++) {
    if (xyz[i] < min) {
        min = xyz[i]
    }
}
console.log("Najmniejszą liczbą jest: " + min)

//3.8

xyz.reverse();
console.log("Odwrócone elementy tablicy: " + xyz);

//Zad 4

function xyz (zyx) {
    let aab = 0;
    for(let i = 0; i < zyx.length; i++) {
        aab = aab + zyx[i];
    }
    console.log(aab);
}
let abc = [2,4,3,8]
xyz(abc);

//Zad 5

function xyz (zyx) {
    let aab = 0;
    let aac = 0;
    for (let i = 0; i < zyx.length; i++) {
        aab = aab + zyx[i];
    }
    aac = aab/zyx.length;
    for (let j = 0; j < zyx.length; j++) {
        console.log("Każdy element pomnożony przez średnią : " + zyx[j] * aac);
    }
}

let abc = [1,2,3,4]
xyz(abc);

//Zad 6

function xyz (zyx) {
    let aaa = 0
    let aab = 0
    for(let i = 0; i < zyx.length; i++) {
        if (zyx[i] % 2 == 0) {
            aaa = zyx[i];
            aab = aaa / zyx.length;
            return(aab);
        }
    }
}

let abc = [2,3,4,5,6,7]
xyz(abc);

//Zad 7

function xyz(zyx) {
    zyx.sort();
    console.log(zyx);
}

let abc = [8,9,3,6];
xyz(abc);

//Zad 8

function xyz (zyx,aab) {
let sumFirstArray = 0;
let sumSecondArray = 0;
for (let i = 0; i < zyx.length; i++) {
    sumFirstArray = sumFirstArray + zyx[i];    
}
for(let j = 0; j < aab.length; j++) {
    sumSecondArray = sumSecondArray + aab[j];
}
let result = sumFirstArray + sumSecondArray
console.log("Suma indeksów: " + result);
return result;
}

let abc = [10,20,30];
let cab = [5,5,5,5,5,5,5,5];

xyz(abc, cab);

//Zad 9

let abc = [2,8,7]
let newArr;
function xyz (zyx) {
   function newFoo (aab) {
       return aab * -1
   }
   newArr = zyx.map(newFoo)
   return newArr
}
xyz(abc);
console.log(newArr);
