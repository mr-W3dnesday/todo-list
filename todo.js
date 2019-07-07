function enterTodo(){
    var task = inputBox.val();
    inputBox.val('');
    if (task){
        addItem(task);
        // change motivational message inside input box when todo is uploaded
        changeMessage();
    }
    // popup confirming todo has been added
}

function changeMessage(){
    inputBox.attr('placeholder', messages[randInt(messages.length - 1)]);
}

function randInt(num){
    return Math.round(Math.random() * num);
}

function addItem(task){
    var item = $("<li>").text(task);
    todolist.append(item);
    item.click(function(){
        $(this).toggleClass('done');
    })
}

function compileList(){
    savedItems.forEach(addItem);
}

var todolist = $('#todolist');

// style each todo card

// create todo list using JS. Add cookie to store user todos
var savedItems = ['Do homework', 'Pick up litter', 'Become all knowing', 'Teach monkey to shoplift'];
var messages = ['Get Organised!','What\'s on your mind?','I can help you.']
var inputBox = $('input');
var addButton = $('.addbtn');
changeMessage();
compileList();

// new todo items
addButton.click(enterTodo);
inputBox.bind('change',enterTodo);

// behavior when hovering over list items

// allow users to delete todos from list