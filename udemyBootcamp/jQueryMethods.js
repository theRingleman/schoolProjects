$("button").click(function(){
  $(this).css("background", "pink");
})

var password = $("input[type=password]");
var pw = [];

password.keypress(function(){
  pw.push(password.val());
})

// $("input[type=text]").keypress(function(event){
//   if (event.which === 13){
//     alert("You hit enter!!")
//   }
// })

var h1s = $("h1");

$("h1").on("click", function(){
  $(this).toggleClass("purple");
});

$("input[type=text]").on("keypress", function(){
  console.log('Key pressed!')
});

$("button").on("mouseenter", function(){
  $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
  $(this).css("font-weight", "normal")
})