//Extract or Fetch all the DOM elements which can be done by getting id

var input = document.getElementById('inp');
var btn = document.getElementById('btn');
var list = document.getElementById('result');

var toDoList = [];

refresh();


function addToDo() {
    var val = input.value;
    var li = document.createElement('li');          // creating li
    var inpt = document.createElement('input');
    var spn = document.createElement('span')
    inpt.setAttribute('type','hidden');
    var updte = document.createElement('button');
    toDoList.push(val);
    localStorage.setItem('taskList', JSON.stringify(toDoList));         // we are storing at local storage because we dont want the items to be lost hen we refresh the page.
    var spnText = document.createTextNode(val)
    spn.appendChild(spnText);
    li.appendChild(spn);                             // setting the text of li to the value.
    li.appendChild(inpt);
    var text = document.createTextNode('update');
    updte.appendChild(text);
    li.appendChild(updte);
    list.appendChild(li);                         // putting li inside ul. Diff between append and appendChild is append also appends strings
   
    fetch('/task?name='+val).then((res)=> {
        if(res.status != 200) return;
        res.text().then(function(d) {
            console.log(d);
        })
    })

    spn.addEventListener('click', function() {
        let tex = this.innerText;
        this.nextSibling.setAttribute('type','text');
        this.innerText = "";
        //this.nextSibling.value = tex;
    })

    updte.addEventListener('click', function() {
        let texFinal = this.previousSibling.value;
        this.previousSibling.previousSibling.innerText = texFinal;
        this.previousSibling.setAttribute('type','hidden');

    })
}


btn.onclick = addToDo;

function refresh() {
   // toDoList = JSON.parse(localStorage.getItem('taskList')) || [];

   fetch('/display')
   .then((data) => {
       if(data.status != 200) return;
       data.json().then((toDoList) => {
            toDoList.forEach(function(val) {
            var li = document.createElement('li');
            li.innerText = val;
            list.appendChild(li);
       })
   });
 //   if(toDoList.length == null) { return }

       /*  var inpt = document.createElement('input');
        inpt.setAttribute('type','hidden');
        var updte = document.createElement('button');
        li.appendChild(inpt);
        var text = document.createTextNode('update');
        updte.appendChild(text);
        li.appendChild(updte); */
    })
}

// local storage can only store stringified Object.
// JSON.stringify(JSON.parse())              it takes n^2 complexity (dont write like this)
// var x = JSON.stringify()                  it stringifies iteratively because it uses system.iterator internally.
// var y = JSON.parse()                      it will take only n complexity


// write a delete and update Button.




