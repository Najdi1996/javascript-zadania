//Zad 1 

const newDiv = document.createElement('div');
newDiv.innerHTML = "To jest nowy element"
document.body.appendChild(newDiv);

//Zad 2

let favouriteFruits = ['Strawberry', 'Banana', 'Apple', 'Peach', 'Pineapple', 'Orange']
const newUlElement = document.createElement('ul');
for (let i = 0; i < 6; i++) {
	const newLiElement = document.createElement('li');
    newLiElement.innerText = favouriteFruits[i];
	newUlElement.appendChild(newLiElement);
}
document.body.appendChild(newUlElement);

//Zad 3

newElem.addEventListener('click', () => {
    Array.from(myList.children).forEach((el, x) => {
        if (x % 2 === 1) {
            myList.removeChild(el);
        }
    });
});

//Zad 4

let newButton = document.createElement('button');
    newButton.innerText = 'Button to remove';
    newButton.className = 'removeTask';
    root.appendChild(newButton);
let removingButton = document.querySelectorAll('.removeTask')
newButton.addEventListener('click', (remove) => {
    remove.target.remove();
})

//Zad 5

const randomNumber = Math.round(Math.random()*20)
for(let i = 0; i < randomNumber; i++) {
    newDiv = document.createElement('div')
    root.appendChild(newDiv);
    newDiv.innerHTML = `To jest div numer ${i + 1}`;
}

//Zad 6

const firstDiv = document.createElement('div');
const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
const firstSpan = document.createElement('span');
const secondSpan = document.createElement('span');
document.body.appendChild(firstDiv);
firstDiv.innerHTML = 'To jest div'
document.body.appendChild(firstSpan);
firstSpan.innerHTML = 'To jest span'
document.body.appendChild(secondDiv);
secondDiv.appendChild(thirdDiv);
thirdDiv.innerHTML = 'To jest div'
document.body.appendChild(secondSpan);
secondSpan.innerHTML = 'To jest span'

//Zad 7

const liContent = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
const createDiv = document.createElement('div');
const firstList = document.createElement('ul');
const secondList = document.createElement('ul');
liContent.forEach((element) => {
    const firstListElement = document.createElement('li');
    firstListElement.innerText = element;
    firstList.append(firstListElement);
});
const firstButton = document.createElement('button');
const secondButton = document.createElement('button');
firstButton.innerText = 'First List';
secondButton.innerText = 'Second List';
firstButton.addEventListener('click', () => {
    secondList.append(firstList.lastElementChild);
    secondButton.disabled = false;
    if (!firstList.children.length) {
        firstButton.disabled = true;
    }
});
secondButton.addEventListener('click', () => {
    firstList.append(secondList.lastElementChild);
    firstButton.disabled = false;
    if (!secondList.children.length) {
        secondButton.disabled = true;
    }
});
secondButton.disabled = true;
createDiv.append(firstList);
createDiv.append(firstButton);
createDiv.append(secondList);
createDiv.append(secondButton);
document.body.append(createDiv, document.querySelector('#root'));

//Zad 8 

function createForm(param) {
    let newLabel = document.createElement('label');
    newLabel.innerHTML = param;
    return newLabel;
}
const result = document.createElement('div');
const form = document.createElement('form');
const whichElement = document.createElement('input');
const whichColor = document.createElement('input');
const content = document.createElement('input');
const numbersOfElements = document.createElement('input');
const makeBr = document.createElement('br')
form.appendChild(createForm('Which element should create?'));
form.appendChild(whichElement);
form.appendChild(makeBr)
form.appendChild(createForm('Which color should be have?'));
form.appendChild(whichColor);
form.appendChild(makeBr)
form.appendChild(createForm('What should be in element content?'));
form.appendChild(content);
form.appendChild(createForm('How many elements should be create?'));
form.appendChild(numbersOfElements);
root.appendChild(form);
root.appendChild(result);
let button = document.createElement('button');
button.innerText = "Run query";
button.type = "submit";
button.addEventListener('click', (event) => {
    event.preventDefault();
    for (let i = 0; i < parseInt(numbersOfElements.value); i++) {
        let newElement = document.createElement(`${whichElement.value}`);
        newElement.style.color = `${whichColor.value}`;
        newElement.innerText = content.value;
        root.appendChild(newElement);
    }
});
form.appendChild(button);


//Zad 9

const div = document.createElement('div');
const form = document.createElement('form');
const name = document.createElement ('input')
const surname = document.createElement ('input')
const age = document.createElement ('input')
const numberOfKids = document.createElement ('input')
const button = document.createElement ('button')
const button2 = document.createElement ('button')
function createForm(param) {
    let newLabel = document.createElement('label');
    newLabel.innerHTML = param;
    return newLabel;
}
root.appendChild(form)
form.appendChild(createForm('Name: '))
form.appendChild(name)
form.appendChild(createForm('Surame: '))
form.appendChild(surname)
form.appendChild(createForm('Age: '))
form.appendChild(age)
form.appendChild(createForm('Numbers of Kids: '))
form.appendChild(numberOfKids)
form.appendChild(button)
form.appendChild(button2)
button.innerHTML = 'Więcej'
button2.innerHTML = "Utwórz"

//Zad 10
let changeButton = document.createElement('button');
  changeButton.id = "change"
  changeButton.type = 'button'
  changeButton.innerText = "Użyj dużych liter!";
  root.appendChild(changeButton);  

  function changeLetters() {
    document.querySelectorAll('tr').forEach((row) => {
      row.querySelectorAll('td').forEach((cell) => {
        cell.innerText = cell.innerText[0].toUpperCase() + cell.innerText.slice(1); 
      })
    })
  }  

  document.querySelector('#change').addEventListener('click', changeLetters);

//Zad 11

function CreateDivWithNumbers(param) {
  const numbersInString = param.match(/[0-9]+/g);
  if (numbersInString.length > 0) {
  const numbers = numbersInString.map(item => Number(item));
  const addingNumbers = numbers.reduce( (x,y) => x + y )
  console.log(addingNumbers)
  const multiplingNumbers = numbers.reduce( (x,y) => x * y )
      for (let i = 0; i < multiplingNumbers; i++) {
        const resultDiv = document.createElement("div");
        resultDiv.textContent = param;
        document.body.appendChild(resultDiv);
        }
     }
  }
 CreateDivWithNumbers('1a3a2b8bb')

//Zad 12

function xyz(param) {
    let firstObject = {};
    firstObject.firstValue = param;
    firstObject.checkString = function () {
        let checkAla = this.firstValue.indexOf('Ala') > -1;
        if (checkAla == false) {
            let alaDoesntExist = document.createElement('div');
            root.appendChild(alaDoesntExist);
            alaDoesntExist.innerHTML = 'Słowo Ala nie występuje w tekście.';
        }
        this.firstValue = this.firstValue.replaceAll('Ala', 'Ola');
      console.log(firstObject)
    }
firstObject.checkString();
}
xyz("Ola doesn't like mathematics.")
xyz("Ala likes mathematics.")

//Zad 13

const arrayTask13 = ["thisisfirstelementofArray", "thisisseconelementofArray123"];
function xyz(param){
    let numbersOfLetters = 0;
    param.forEach(item => {
        const onlyLetters = item.replace(/[^a-zA-Z]+/g);
        numbersOfLetters += onlyLetters.length;
        console.log(onlyLetters);
    })
}
xyz(arrayTask13);

//Zad 14

let firstObject = { 
    name: '',
    surname: '',
    age: ''
}
function changeObjectValue (name, surname, age) {
    firstObject.name = name,
    firstObject.surname = surname,
    firstObject.age = age,
    firstObject.nameLength = name.length,
    firstObject.surnameLength = surname.length
    firstObject.age = age.length
}
changeObjectValue('exampleName','exampleSurname', 20)
if(firstObject.name.length > 5 || firstObject.surname.length > 5 || firstObject.age.length > 5) {
    let createButton = document.createElement('button')
    createButton.className = 'toRemove'
    root.appendChild(createButton)
    createButton.innerHTML = 'Button for Task14'
}
const button = document.querySelector('.toRemove')
if(button !== null) {
    button.addEventListener('click', (event) => {
        firstObject = {
            name: '',
            surname: '',
            age: ''
        }
    })
}
