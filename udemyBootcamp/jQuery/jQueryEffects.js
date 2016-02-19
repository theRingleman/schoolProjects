//Fade Effect
//The three different ones are fadeOut, fadeIn, and fadeToggle
//If you want somthing done after the fade, input another function
$("#fade").on("click", function(){
  $("div").fadeToggle(1000, function(){
    $("P").text("Well you went and faded them damnit...");
  });
});

//Slide effect
//This will set your objects display tag to none or vise versa
//Works just like Fade effect

$("#slide").on("click", function() {
  $("div").slideToggle(1000, function(){
    $("p").text("Shit, now you are sliding 'em all over the place...");
  });
});