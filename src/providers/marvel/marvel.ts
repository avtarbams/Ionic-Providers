import { Injectable } from '@angular/core';

@Injectable()
export class MarvelProvider {

  constructor() {
    console.log('Hello MarvelProvider Provider');
  }
  getMoviesDetails() {
    let MarvelMovies = [
    { FilmName:"Iron Man", Superhero:"Iron Man", Actor:"Robert Downey Jr.", Director:"Jon Favreau", Year:"2008" },
    { FilmName:"The Incredible Hulk", Superhero:"Hulk", Actor:"Edward Norton", Director:"Louis Leterrier", Year:"2008" },
    { FilmName:"Iron Man 2", Superhero:"Iron Man", Actor:"Robert Downey Jr.", Director:"Jon Favreau", Year:"2010" },
    { FilmName:"Thor", Superhero:"Thor", Actor:"Chris Hemsworth", Director:"Kenneth Branagh", Year:"2011" },
    { FilmName:"The First Avenger", Superhero:"Captain America", Actor:"Christopher Robert Evans", Director:"Joe Johnston", Year:"2011" },
    { FilmName:"Marvel's The Avengers", Superhero:"Avengers", Actor:"Multiple", Director:"Joss Whedon", Year:"2012" },
    { FilmName:"Iron Man 3", Superhero:"Iron Man", Actor:"Robert Downey Jr.", Director:"Shane Black", Year:"2013" },
    { FilmName:"Thor 2", Superhero:"Thor", Actor:"Chris Hemsworth", Director:"Alan Taylor", Year:"2013" },
    { FilmName:"Captain America 2", Superhero:"Captain America/Bucky", Actor:"Robert Downey Jr.", Director:"Anthony and Joe Russo", Year:"2014" },
    { FilmName:"Guardians of the Galaxy", Superhero:"Star-Lord", Actor:"Chris Pratt", Director:"James Gunn", Year:"2014" },
    { FilmName:"Avengers 2", Superhero:"Avengers/Ultron", Actor:"Multiple", Director:"Joss Whedon", Year:"2015" },
    { FilmName:"Ant-Man", Superhero:"Ant-Man", Actor:"Paul Rudd", Director:"Peyton Reed", Year:"2015" },
    { FilmName:"Captain America 3", Superhero:"Captain America/Iron Man", Actor:"Multiple", Director:"Anthony and Joe Russo", Year:"2016" },
    { FilmName:"Doctor Strange", Superhero:"Doctor Strange", Actor:"Benedict Cumberbatch", Director:"Scott Derrickson", Year:"2016" },
    { FilmName:"Guardians of the Galaxy Vol 2", Superhero:"Star-Lord", Actor:"Chris Pratt", Director:"James Gunn", Year:"2017" },
    { FilmName:"Spider-Man Homecoming", Superhero:"Spider-Man/Iron Man", Actor:"Tom Holland", Director:"Jon Watts", Year:"2017" },
    { FilmName:"Thor Ragnarok", Superhero:"Thor/Hulk", Actor:"Chris Hemsworth", Director:"Taika Waititi", Year:"2017" }
  ];
    return MarvelMovies;
  }
}
