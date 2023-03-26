
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
       personalMovieDB.count = prompt('How many films have you already watched?', '')
       while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
       personalMovieDB.count = prompt('How many films have you already watched?', '')
    }
    },
    rememberMyFilms: function (){
        for(let i = 0; i<2; i++){
        const a = prompt('One of the last movies you watched?', '').trim(),
          b = prompt ('How much do you rate it?', '');
        if(a != null && b != null && a !='' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        } else {
        i--;
        }
    }
    },
    detectPersonalLevel: function (){
       if(personalMovieDB.count <10){
        console.log("You don't like films");
    } else if (personalMovieDB.count >=10 && personalMovieDB < 30){
    console.log("It is classic")
    } else if(personalMovieDB.count >=30){
    console.log("You look a lot of films")
    } else {
    console.log("Error")
    }
    },
    showMyDB : function (hidden ){
    if(! hidden){
        console.log(personalMovieDB);
    }
},
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;

        }else{
            personalMovieDB.privat = true;
        }

    },
    writeYourGeners: function (){
    for(let i = 1; i <=3; i++){
        let genre = prompt(`Your favorite movie genre is nummer${i}`);
        if(genre === '' || genre === null){
            console.log('Yor write wrong information');
            i--;
        }else{
            personalMovieDB.genres[i -1] = genre;
        }
    }
    personalMovieDB.genres.forEach((item,i)=>{
        console.log(`Favoirite genre  ${i +1} -is ${item}`)
    })
}
};
