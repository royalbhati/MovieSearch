class Movie {
    constructor(api_key) {
        this.api_key = "3dc06b92";
    }

    async getMovie(movie_name) {
        const url = `http://www.omdbapi.com/?apikey=3dc06b92&t=${movie_name}`;
        const img_url = `http://img.omdbapi.com/?apikey=3dc06b92&t=${movie_name}`;
        const pop_url = "https://api.themoviedb.org/3/trending/all/week?api_key=0cf0fa6c43ecb5d16c4e3acd09156c4a";

        const response = await fetch(url);

        const response_pop = await fetch(pop_url);
        const pop_data = response_pop.json();

        const movie_data = await response.json();

        // console.log("inside");
        return {
            img_url: img_url,
            movie: movie_data,
            pop_data: pop_data
        }
    }
}