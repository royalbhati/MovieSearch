const search_result = document.getElementById('input');

const movie = new Movie();
const ui = new UI();

// }});

if (search_result) {
	search_result.addEventListener('keydown', e => {
		console.log(e.target.value);
		const input = e.target.value;
		if (input !== '') {
			movie.getMovie(input).then(data => {
				if (data.movie.Response === 'False') {
					ui.showAlert('Movie Not Found');
				} else {
					// console.log("indiee")
					ui.clearPopular();
					movie.getMovie(input).then(data => {
						ui.showMovie(data.movie, data.img_url);
					});
				}
			});
		} else {
			ui.clearData();
			const searchr = document.getElementById('input');

			if (searchr !== '') {
				movie.getMovie(searchr).then(data => {
					data.pop_data.then(pop_data => {
						console.log(pop_data.results[0]);
						ui.showPopular(pop_data.results);
					});
				});
			}
		}
	});
}
