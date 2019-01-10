class UI{
    constructor(movie_details,popular){
        this.movie_details=document.getElementById("movie");
        this.popular=document.getElementById("pop");
        this.trend=document.getElementById("trending")
    }


    showMovie(data,url){
        this.movie_details.innerHTML=`        
        <div class="container" style="margin-top:30px">
            
        <div class="content">
            <!-- <div class="card-body"> -->
                <div class="row">
                    <div class="col-sm-3"  >
                        <img class="card-img-top" src=${data.Poster} alt="Card image cap">
                    </div>
                    <div class="col-sm-9">
                            <h1 class="card-title" style="color:orange;font-family: 'Lalezar', cursive; letter-spacing:0.3rem">${data.Title}</h1>
                            <h5><span class="badge badge-success"> <span class="l">${data.Released}</span></span>
                                <span class="badge badge-info"><span class="l">${data.Rated}</span></span>
                                <span class="badge badge-dark"><span class="l">${data.Genre}</span></span>
                                <span class="badge badge-primary"><span class="l">${data.Runtime}</span></span>
                                <span class="badge badge-light"><span class="l">${data.Language}</span></span>
                            </h5>
                            <br>
                            <p class="card-text"><i class="fas fa-scroll"></i> <b>Plot</b> : <span class="plot" >${data.Plot}</span></p>
                            <ul class="list-group list-group-flush">
                            
                                    <li class="list-group-item"><i class="fas fa-balance-scale"></i> <b>MetaScore</b> : <span class="ll">${data.Metascore}</span></li>
                                    <li class="list-group-item"><i class="fab fa-imdb"></i> <b> imdb Rating</b> : <span class="ll">${data.imdbRating}</span></li>
                                    <li class="list-group-item"><i class="fas fa-percentage"></i> <b> RottenTomatoes</b> : <span class="ll">${data.Ratings[1].value}</span></li>
                            </ul>

                    </div>
                
                
                </div>
                <br>
                <div class="card-body">
                    <h1 class="card-title">Additional Info</h1>
                    <ul class="list-group list-group-flush">
                            <li class="list-group-item"><i class="fas fa-users"></i>   <b>Cast</b> : <span class="l">${data.Actors}</span></li>
                            <li class="list-group-item"><i class="fas fa-user"></i>    <b>Director</b> : <span class="l">${data.Director}</span></li>
                            <li class="list-group-item"><i class="fas fa-user-edit"></i>    <b>Writers</b> :<span class="l"> ${data.Writer}</span></li>
                            <li class="list-group-item"><i class="fas fa-trophy"></i>    <b>Awards</b> : <span class="l">${data.Awards}</span></li>
                    </ul>
                </div>    
               
                
              </div>
    
            </div>`
    }

    clearData(){
        this.movie_details.innerHTML="";
    }

    showAlert(msg){
        const div=document.getElementById("alert");
        div.setAttribute("style","display:block");
        setTimeout(()=>{
            document.getElementById("alert").setAttribute("style","display:none");
        },2000);

        this.movie_details.innerHTML="";
    }
    
    showPopular(data){
        this.popular.innerHTML=` 
                        <div class="container gallery-container">
                            <h1 style="text-align:center; padding-top:2rem; font-size:20px">Trending Movies of This Week</h1>
                            <div class="tz-gallery">
                          
                                <div class="row mb-3">
                                    <div class="col-md-4">
                                        <div class="card">
                                            <h>${data[0].original_title}</h>
                                            <a href=https://www.themoviedb.org/search/movie?query=${data[0].original_title} id=${data[0].original_title}>
                                            <img src="https://image.tmdb.org/t/p/w500/${data[0].backdrop_path}" alt="m" class="card-img-top">
                                            </a>
                                        </div>
                                    </div>
                                     
                                    <div class="col-md-4">
                                        <div class="card">
                                        <h >${data[1].original_title}</h>
                                        <a id=${data[1].original_title} "href="trending.html" onclick=get_id(this.id)>
                                        <img src="https://image.tmdb.org/t/p/w500/${data[1].backdrop_path}" alt="m" class="card-img-top">
                                            </a>
                                        </div>
                                    </div>
                                     
                                    <div class="col-md-4">
                                        <div class="card">
                                        <h >${data[2].original_title}</h>
                                         <a id=${data[2].original_title} "href="trending.html" onclick="get_id(this.id)">
                                        <img src="https://image.tmdb.org/t/p/w500/${data[2].backdrop_path}" alt="m" class="card-img-top">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                  <div class="row"> 
                                    <div class="col-md-4">
                                        <div class="card">
                                        <h >${data[3].original_title}</h>
                                         <a id=${data[3].original_title} "href="trending.html" onclick="get_id(this.id)">
                                             <img src="https://image.tmdb.org/t/p/w500/${data[3].backdrop_path}" alt="m" class="card-img-top">
                                            </a>
                                        </div>
                                    </div>
                                     
                                    <div class="col-md-4">
                                        <div class="card">
                                        <h >${data[4].original_title}</h>
                                         <a id=${data[4].original_title} "href="trending.html" onclick="get_id(this.id)">
                                             <img src="https://image.tmdb.org/t/p/w500/${data[4].backdrop_path}" alt="m" class="card-img-top">
                                            </a>
                                        </div>
                                    </div>
                                     
                                    <div class="col-md-4">
                                        <div class="card">
                                        <h>${data[5].original_title}</h>
                                         <a id=${data[5].original_title} "href="trending.html" onclick="get_id(this.id)">
                                             <img src="https://image.tmdb.org/t/p/w500/${data[5].backdrop_path}" alt="m" class="card-img-top">
                                            </a>
                                        </div>
                                    </div>
                                 
                                </div>
                          
                            </div>
                          
                        </div>
                         
                        </div>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.0/baguetteBox.js"></script> -->
<script>
    baguetteBox.run('.tz-gallery');
</script>`
    }

    clearPopular(){
        this.popular.innerHTML="";

}
}