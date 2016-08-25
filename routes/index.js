var moviesJSON = require('../movies.json');

// home
exports.home = function(req, res) {

	var movies = moviesJSON.movies;
	

	res.render('home', {
		title: "Kid Movies",
		movies: movies
			
	});
};


// movie single
exports.movie_single = function(req, res) {

	var episode_number = req.params.episode_number;

	var movies = moviesJSON.movies;

	var movie = movies[episode_number - 1];

	if (episode_number >= 1 && episode_number <= 6) {

		var title = movie.title;

		var main_characters = movie.main_characters;

		res.render('movie_single', {
			movies : movies,
			title : title,
			movie : movie,
			main_characters : main_characters
		});
	} else {
		res.render("Not Found", {
			movies : movies,
			title : "Not found Title"
		});
	}
};


// notFound
exports.notFound = function(req, res) {

	var movies = moviesJSON.movies;
	res.render('notFound', {
		movies : movies,
		title : "This is not the page that you are looking for"
	});
	
};
