var removeTrash = '<span class="glyphicon glyphicon-trash w3-btn-floating w3-ripple w3-red"></span>';
var addOk = '<span class="glyphicon glyphicon-ok w3-btn-floating w3-ripple w3-green"></span>';

//SCRIPT FOR ADD BUTTON TO ADD TEXT ON THE toDoList
document.querySelector('#add').addEventListener('click', function(){
//SCRIPT TO GRAB INPUT-TEXT & UPLOAD IT ON THE toDoList
    var value = document.querySelector('#item').value;
    if(value) {
        addItemTodo(value);
        document.querySelector('#item').value = '';
    }
});

//FUNCTION FOR REMOVING ITEM FROM THE LIST
function removeItem(){
var item = this.parentNode.parentNode;
var parent = item.parentNode;

parent.removeChild(item);
}

//FUNCTION FOR COMPLETING ITEM ON THE LIST
function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    var target = (id === 'todo') ? document.getElementById('completed'): document.getElementById('todo');
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
/*
    if(id === 'todo'){
        //IT'S A TODO ITEM TO BE COMPLETED
        target = document.getElementById('completed');
    }else{
        //IT'S A COMPLETED ITEM TO BE RE-DONE
        target = document.getElementById('todo');
    }
*/
}


function addItemTodo(text){
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('w3-btn');
    remove.classList.add('remove');
    remove.innerHTML = removeTrash;
    //DELETING AN ITEM FROM THE LIST
    remove.addEventListener('click', removeItem);

    var add = document.createElement('w3-btn');
    add.classList.add('add');
    add.innerHTML = addOk;
    //ADDING ITEM TO COMPLETED LIST
    add.addEventListener('click', completeItem);


    buttons.appendChild(remove);
    buttons.appendChild(add);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);
}