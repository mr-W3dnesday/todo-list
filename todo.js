// style each todo card
function generateCard(task){
    var cardA = `
        <div class="card border-light text-white bg-info mt-2 py-2"
            <div class="card-body">
                <h5 class="card-text">`;
    var cardB = `</h5>
                <h6 class="card-date mb-2 text-white">`;
    var cardC = `</h6>
                <div class="card-btn">
                    <button class="btn complete btn-light" type="button" id="button-addon2"><i class="far fa-check-square"></i></button>
                    <button class="btn delete btn-danger" type="button" id="button-addon2"><i class="far fa-trash-alt"></i></button>
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
    }
}

function changeMessage(){
    inputBox.attr('placeholder', messages[randInt(messages.length - 1)]);
}

function randInt(num){
    return Math.round(Math.random() * num);
}

function addItem(task){
    var item = $("<div>").html(generateCard(task));
    item.addClass('card-container col-12 col-sm-6 col-md-4');
    todolist.append(item);
    item.fadeIn();
    // add done functionality to whole card (including button)
    item.click(function(){
        $(this).toggleClass('done');
    })
    // create event listener for delete button
    var deleteBtn = $('.delete');
    deleteBtn.click(function(){
        $(this).closest('.card-container').fadeOut(function(){
            $(this).remove()}); 
    })
}

function compileList(){
    savedItems.forEach(addItem);
}

var todolist = $('#todolist');

// create todo list using JS
var savedItems = ['Do homework', 'Pick up litter', 'Become all knowing', 'Teach monkey to shoplift'];
var messages = ['Get Organised!','What\'s on your mind?','You busy, busy bee...']
var inputBox = $('input');
var addButton = $('.addbtn');
changeMessage();
compileList();

// Add cookie to store user todos
var newSavedItems = []
var itemText = $('.card-text');
var itemDate = $('.card-date');
// need to map these arrays into an object
var text = itemText.map(function(item){return item.text})

// new todo items
addButton.on('click',enterTodo);
inputBox.on('change',enterTodo);
