//Zad 1

document.addEventListener('DOMContentLoaded', () => {
    var tagsTab = [];
      document.querySelectorAll('.more-divs').forEach((element) => {
          if (!tagsTab.includes(element.tagName)) {
              tagsTab.push(element.tagName);
          }
      });
      console.log(tagsTab);
      
//Zad 2
    
    function display(a) {
      // . 1 .
          console.log(a.innerHTML);
      // . 2 .
          console.log(a.outerHTML);
      // . 3 .
          console.log([...a.classList].join(''));
      // . 4 .
          console.log([...a.classList]);
      // . 5 .
          console.log(a.dataset)
      }
  
      display(document.querySelector('.short-list'));    
   
//Zad 3
    
    function showMe(...int) {
          return {
              sum: int.reduce((prev, curr) => parseInt(prev) + parseInt(curr)),
  
              difference: int.reduce((prev, curr) => prev - curr),
          }
      }
  
      let numb = document.querySelector('#datasetCheck').dataset;
      console.log(showMe(numb.numberone, numb.numbertwo, numb.numberThree));
    
//Zad 4
    
    var span = document.querySelector('#spanText');
    span.innerHTML = "something new";
    
//Zad 5
    
    span.classList.add('newClass');
    
//Zad 6
    
    function allClasses(classList){
      var list = [...classList];
  
          list.forEach((b) => console.log(b));
          console.log(list.join('+'));
    }
    var classes = document.querySelector('#classes');
      allClasses(classes.classList);
      classes.classList = '';
      console.log('Usunięto wszystkie klasy.');
    
//Zad 7
    
    var allLi = document.querySelector('#longList').querySelectorAll('li');
    allLi.forEach((c) => {
      if(c.dataset.text == null) c.setAttribute("data-text", "text");
    });
    
//Zad 8
     var theFirst = (string) => { 
          return {
              newClass: string
          };
       };
  
      var theSecond = (object) => {
          return object.newClass;
      };
  
      var object = theFirst('something');
      var string = theSecond(object);
      var xxx = document.querySelector('#myDiv').classList;
      xxx.add(string);
    
//Zad 9
    
      function abc(num) {
          var element = document.querySelector('#numbers');
          var classX = num % 2 == 0 ? 'even' : 'odd';
          element.classList = classX;
      }
      var random = Math.round(Math.random() * 10);
  
      abc(random);
    
//Zad 10
    
      var listValues = document.querySelector('#longList');
      
      function showTab(listValues) {
          var li = [];
          listValues.querySelectorAll('li').forEach((d) => {
              li.push(d.innerHTML);
          });
          return li;
      }
  
      console.log(showTab(listValues));
    
//Zad 11
    
    function switchThem(child) {
          let childs = [...child];
          childs.forEach((element) => {
              var newNmb = Math.round(Math.random() * 10);
              element.dataset.oldValue = element.innerHTML;
              element.innerHTML = newNmb;
          });
      }
  
      let child = document.querySelector('#longList').children;
      switchThem(child)
  });
  
