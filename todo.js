function generateCard(task){
    var cardA = `
    <div class="col-12 col-sm-6 col-md-4">
        <div class="card"
            <div class="card-body">
                <h5 class="card-text">`;
    var cardB = `</h5>
                <h6 class="card-date mb-2 text-muted">`;
    var cardC = `</h6>
                <div class="card-btn">
                    <button class="btn btn-primary" type="button" id="button-addon2">Done</button>
                    <button class="btn btn-danger" type="button" id="button-addon2">Delete</button>
                </div>
            </div>
        </div>
    </div>`;
    var now = new Date().toLocaleString().replace(",","").replace(/:.. /," ");
    var cardFinal = cardA + task + cardB + now + cardC;
    return cardFinal;
}

function enterTodo(){
    var task = inputBox.val();
    inputBox.val('');
    if (task){
        addItem(task);
        // change motivational message inside input box when todo is uploaded
        changeMessage();
        // popup confirming todo has been added
        alert('New item added: ' + task);
    }
}

function changeMessage(){
    inputBox.attr('placeholder', messages[randInt(messages.length - 1)]);
}

function randInt(num){
    return Math.round(Math.random() * num);
}

function addItem(task){
    // var item = $("<li>").text(task);
    // todolist.append(item);
    todolist.append(generateCard(task));
    //selecting whole todo list, not last element!!
    todolist.last().click(function(){
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

// allow users to delete todos from list