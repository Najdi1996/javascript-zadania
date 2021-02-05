//Zad 1  

let car = {
    name: 'Honda',
    model: 'Civic',
}
console.log(car.name, car.model);

//Zad 2
let car = {
    name: 'Honda',
    model: 'Civic',
}
function xyz(zyx) {
        car.model = zyx
}
xyz("Jazz")
console.log(car)

//Zad 3 

let sumArr = 0;
let abc = {
    sum: function (zyx) {
        for(let i = 0; i < zyx.length; i++) {
            sumArr = sumArr + zyx[i];
        }
    }
}
letArr = [5,5,5,5]
abc.sum(letArr);
console.log(sumArr);

//Zad 4

let car = {
    name: "BMW",
    age: 12,
    color: 'white',
    model: "e90"
}

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

//Zad 5

let tableTennisRocket = {
    blade: 'Butterfly Primorac',
    rubber: {
        redRubber: 'Butterfly Tenergy 05',
        blackRubber: 'Yasaka Rakza 7 soft',
    }
}

console.log(tableTennisRocket.rubber.redRubber, tableTennisRocket.rubber.blackRubber);


//Zad 6

let car = {
    name: 'Honda',
    model: 'Civic',
}
car.color = 'red'
car.sayHello = function () {
    console.log("hello")   
}
car.sayHello();
console.log(car)
