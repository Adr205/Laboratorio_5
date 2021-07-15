var post = $("#ButtonPost").on("click", ToDoPost);
var clear = $("#ButtonClear").on("click", ToDoClear);
var mark = $("#ButtonMark").on("click", ToDoMark);
var del = $("#ButtonDelete").on("click", ToDoDel);


function ToDoPost(e){
    e.preventDefault()
    var toDo = $("#ToDoText").val();
    var list = $("#toDoList");

    // var currentListHTML = list.innerHTML;
    // list.innerHTML = currentListHTML + `<input type = "checkbox" name = "todo" class = "prueba" /> ${toDo} <br>`
    // document.getElementById("ToDoText").value = ""

    var div = $("<div>");
    var checkbox = $("<input>");
    var label = $("<label>");

    checkbox.attr("type","checkbox");
    checkbox.attr("name", "todo");
    
    label.html(toDo);

    div.append(checkbox);
    div.append(label);
    list.append(div);

    
}

function ToDoClear(){
    var todos = document.getElementsByName("todo");

    for(var i = 0; i < todos.length;i++){
        todos[i].checked = false;
    }

}

function ToDoMark(){
    var todos = document.getElementsByName("todo");

    for(var i = 0; i < todos.length;i++){
        todos[i].checked = true;
    }

}

function ToDoDel(){
    var todos = document.getElementsByName("todo");
    var list = $("toDoList");




    todos.forEach(element => {
     if(element.checked){
            element.parentElement.remove()
        }
    });

}