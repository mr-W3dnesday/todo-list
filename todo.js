function newTodo(task){
    todolist.append('<li>' + task + '</li>');
}

var newTodo = 'Buy hummus';
var todolist = $('#todolist');
var inputBox = $('input');
var addButton = $('.addbtn');

addButton.bind('click',function(){
    console.log('testing');
})
