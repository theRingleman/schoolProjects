var movies = [
  {
    title: "Frozen",
    rating: "4.5 stars",
    haveSeen: true
  },
  {
    title: "In Bruges",
    rating: "5 stars",
    haveSeen: false
  },
  {
    title: "Mad Max Fury Road",
    rating: "5 stars",
    haveSeen: false
  },
  {
    title: "Les Miserables",
    rating: "3.5 stars",
    haveSeen: false
  }
];

for(var i = 0; i < movies.length; i++){
  var stuff = "You have ";
  if(movies[i].haveSeen) {
    stuff += "watched ";
  } else {
    stuff += "not seen ";
  }
  stuff += "\"" + movies[i].title + "\" - ";
  stuff += movies[i].rating;
  console.log(stuff);
};

movies.forEach(function(movies){
  var result = "You have ";
  if(movies.haveSeen){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movies.title + "\" - ";
  result += movies.rating;
  console.log(result);
});
