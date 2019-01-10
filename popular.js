const ui = new UI;
const movie = new Movie;




class Popular extends Movie {

    constructor(search_r) {
        this.search_result = document.getElementById("input");
    }

    getPopular() {
        if (this.search_result !== "") {
            movie.getMovie(this.search_result).then(data => {
                data.pop_data.then(pop_data => {
                    console.log(pop_data.results[0]);
                    ui.showPopular(pop_data.results);
                });
            });


        };
    }

} 