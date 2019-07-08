function createTask(newTask){
    var htmlStr = '<li><span class="bg-danger"><i class="far fa-trash-alt"></i></span> '+ newTask + '</li>';
    $('ul').append(htmlStr);
}

// create todo when 
$('input').on('change', function(){
    var newTask = $(this).val();
    createTask(newTask);
    $(this).val('');
});

// check off to-dos by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('done');
});

// remove todos when delete button is clicked
$('ul').on('click', 'span', function(event){
    $(this).fadeOut(function(){$(this).parent().remove()});
    event.stopPropagation();
});

$('.fa-plus').on('click', function(){
    $('input').fadeToggle();
});

// create cookie that saves user todos
savedItems = ['Swimming lessons', 'Finish drawing picture', 'Eat souls of the innocent'];
savedItems.forEach(createTask);