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
  console.log(buildString(movies[i]));
};

movies.forEach(function(movies){
  console.log(buildString(movies))
});

function buildString(movies){
  var result = "You have ";
  if(movies.haveSeen){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movies.title + "\" - ";
  result += movies.rating;
  return result;
}