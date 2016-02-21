// Check off specific todos by clicking

$("ul").on("click", "li", function(){
  $(this).toggleClass("completedTodo");
}); 


//Click on X to delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  event.stopPropagation();
});

$("input[type=text]").on("keypress", function(event){
  if(event.which === 13) {
    //Grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    var newLi = "<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>";
    //Create a new li and add to ul
    $("ul").append(newLi);
  }
});

$(".fa-plus").on("click", function(){
  $("input[type=text]").slideToggle();
})