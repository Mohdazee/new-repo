//extract ALL DOM Elements

var input = document.getElementById('inp');
var btn = document.getElementById('btn');
var list = document.getElementById('result');
var inp = document.createElement('input')

var todoList = [];
refresh();
function addTodo(){
    var val = input.value;
    var li = document.createElement('li');
    //button creation
    var button = document.createTextElement('button');
    var text = document.createTextNode('update');
    var span = document.createTextNode('span');
    var inp = document.createElement('input');
    inp.setAttribute('type','hidden');
    

    button.appendChild(text);
    todoList.push(val);
    //localStarage.setItem('taskList',JSON.stringify(todoList));
    //li.innerText = val;
    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(button);
    list.appendChild(li);

    //adding eventListner
    span.addEventListener('click',function(){
        let tex = this.innerText;
        this.nextSiblingsetAttribute('type','text');
        this.nextSibling.value = tex;
    })
    
    button.addEventListner('click',function(){
        let texFinal = this.previousSibling.value;
         this.previousSibling.previousSibling.innerText = 'texFinal';
         previousSibling.setAttribute('type','hidden');
    })
}


btn.onclick = addTodo;

 function refresh(){
     todoList= JSON.parse(localStorage.getItem('taskList')) || [];
     
     todoList.forEach(function(val){
var li = document.createElement('li');
li.innerText = val;
list.appendChild(li);
     
     })
 }



