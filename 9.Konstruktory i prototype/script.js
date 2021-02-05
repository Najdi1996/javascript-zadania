//Zad 1

class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    newCity(city) {
        this.city = city;
    }
    newAge(age) {
            this.age = age;
    }
}
const personA = new Person('Marcin', 'Ziarko', 21, 'Poland', 'Kraków', 'polish');
const personB = new Person('Janusz', 'Korwin', 69, 'Poland', 'Warsaw', 'polish');
const personC = new Person('Anna', 'Wesołowska', 23, 'Poland', 'Szczebrzeszyn', 'polish');
const personD = new Person('Maria', 'Wesołowska', 54, 'Poland', 'Gniezno', 'polish');
const personE = new Person('Ryszard', 'Peja', 50, 'Poland', 'Sopot', 'polish');

personB.newAge(52);
personE.newAge(20);
personA.newCity("Andrychów");

console.log(personA);
console.log(personB);
console.log(personE);

//Zad 2

class Calculator{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    sum(x, y){
        this.result = x + y;
        this.toHistory(x,y, '+');
        return this.result;

    }
    difference(x, y){
        this.result = x - y;
        this.toHistory(x,y, '-');
        return this.result;
    }
    product(x, y){
        this.result = x * y;
        this.toHistory(x,y, '*');
        return this.result;
    }
    quotient(x, y){
        if( y === 0) throw Error("DON'T DO THAT!!!");
        this.result = x / y;
        this.toHistory(x,y, '/');
        return this.result;
    }
    saveToMemory(){
        this.memory = this.result; 
    }
    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory)
    }

    toHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result})
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }
}

//Zad 3

class Game{
    random() {
        Game.prototype.x = setInterval(function(){Game.prototype.number = Math.round(Math.random() * (10 - 1) + 1);}, 1000);
    }
    win() {
      Game.prototype.winInterval= setInterval(function(){
          if (Game.prototype.number > 5) {
          console.log('Win')
          clearInterval(Game.prototype.x);
          clearInterval(Game.prototype.winInterval);       
          } else {
          console.log('Not Today My Friend')
        }}, 1000);
    }
  }
  const game = new Game();
  const gameA = new Game();
  
  game.random();
  gameA.win();
