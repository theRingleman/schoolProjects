// var person = {
// 	name: "Jeremiah",
// 	age: 24 + " soon to be " + 25,
// 	location: "Loveland",
// 	wife: "Kayla",
// 	hobbies: {
// 		freeTime: "Hiking",
// 		Workout: "Weightlifting",
// 		Other: "Making Love"
// 	}
// };


// Nested Objects & Arrays

// var post = [
// 	{
// 		title: "How to properly eat a turd",
// 		Author: "Sunny Jim Thomas",
// 		AuthorAge: 74,
// 		Reviews: ["best book of my life", "terriber", "brought a tear to my eye"]

// 	},
// 	{
// 		title: "The smell of my toes",
// 		Author: "Reta Toejame",
// 		AuthorAge: 47,
// 		Reviews: ["best book of my life", "terriber", "brought a tear to my eye"]

// 	},
// 	{
// 		title: "The taste of a dry booger",
// 		Author: "Little Junior Simmons",
// 		AuthorAge: 5,
// 		Reviews: ["best book of my life", "terriber", "brought a tear to my eye"]
// 	}
// ];

// Movie DB Exercise

	// // MY WAY
	
	// var movies = [
	//     {
	//         title: "lionking",
	//         watched: true,
	//         rating: "5 stars"
	//     },
	//     {
	//         title: "Interstellar",
	//         watched: true,
	//         rating: "5 stars"
	//     },
	//     {
	//         title: "The Human Centipede",
	//         watched: false,
	//         rating: "1 stars"
	//     } 
	// ];

	// for (var i = 0; i < movies.length; i++ ){
	// 	if (movies[i].watched === true) {
	// 		console.log("You have watched " + movies[i].title + " - " + movies[i].rating);
		
	// } else {
	// 	console.log("You have NOT watched " + movies[i].title + " - " + movies[i].rating);
	// }
	// }

	// // INSTRUCTOR WAY

	// var movies = [
	//     {
	//         title: "lionking",
	//         watched: true,
	//         rating: "5 stars"
	//     },
	//     {
	//         title: "Interstellar",
	//         watched: true,
	//         rating: "5 stars"
	//     },
	//     {
	//         title: "The Human Centipede",
	//         watched: false,
	//         rating: "1 stars"
	//     } 
	// ];

	// movies.forEach(function(movie){
	// 	var result = "You have ";
	// 	if(movie.watched){
	// 		result += "watched ";
	// 	} else {
	// 		result += "not watched ";
	// 	}
	// 	result += "\"" + movie.title + "\" - ";
	// 	result += movie.rating;
	// 	console.log(result);
	// });


