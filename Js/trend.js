const searchr=document.getElementById("input");

if(searchr!==""){
    movie.getMovie(searchr).then(data=>{ 
        data.pop_data.then(pop_data=>{
        console.log(pop_data.results[0]);
        ui.showPopular(pop_data.results);});
    });


}