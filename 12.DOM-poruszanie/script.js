 //Zad 1

   document.addEventListener('DOMContentLoaded', () => {
    // .1.
    console.log(document.querySelector('#buz').parentElement);
    // .2.
    console.log(document.querySelector('#baz').previousElementSibling);
    // .3.
    console.log(document.querySelector('#foo').children);
    // .4.
    console.log(document.querySelector('#foo').parentElement);
    // .5.
    console.log(document.querySelector('#foo').children[0]);
    // .6.
    console.log((function() {
        let foo = document.querySelector('#foo');
        let number = foo.children.length-1;
        let midChild = Math.round(number / 2);
        return foo.children[midChild];

 }));
});
//Zad 2
                
    let downloadTxt = function(elementId) {
        let el = document.querySelector(`#${elementId}`);
        el.addEventListener('click', function(event) {
            console.log(event.target.textContent.trim());
        });
    }
    downloadTxt('ex2');
                
//Zad 3

  document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
        });
    });

//Zad 4

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            event.target.parentElement.style.backgroundColor = randomColor;
        });
    });

//Zad 5

    let ex5 = document.querySelector('#ex5');
    let divs = ex5.querySelectorAll('div');
    let list = ex5.querySelectorAll('ul>li');

    // 5.1.
    function first(e) {
    list[0].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    // 5.2.
    function second(e) {
    list[list.length-1].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    // 5.3.
    function third(e) {
    Array.from(list)
        .filter((value) => value.innerHTML % 2 === 0)
        .forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    // 5.4.
    function fourth(e) {
    list.forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    // 5.5.
    function fifth(e) {
    ex5.querySelector('ul').style.backgroundColor = e.srcElement.style.backgroundColor;
    }

    divs.forEach((div) => {
    div.addEventListener('mouseover', third)});

   //Zad 6

   const mainDiv = document.getElementById('ex6');

   let one = mainDiv.firstElementChild.firstElementChild.firstElementChild;
   
   let two = mainDiv.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
   
   let three = mainDiv.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
   
   
   console.log(one);
   console.log(two);
   console.log(three);
