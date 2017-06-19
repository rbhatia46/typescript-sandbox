/*
function showToDo(todo: {title:string, text:string} ):void{
console.log(todo.title + ':' + todo.text);
}

let myToDo = {title:'Trash', text:'Take out trash'};
showToDo(myToDo);
*/

interface Todo{
    title:string;
    text:string;
}

function showToDo(todo: Todo):void{ //creating interface is basically creating our own type
console.log(todo.title + ':' + todo.text);
}

let myToDo = {title:'Trash',text:'Take out the trash'};

showToDo(myToDo);

