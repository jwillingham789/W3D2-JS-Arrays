var movie = [],
    badMovie = []

//GOOD MOVIES
gameOfThrones = {
  title: 'Game of Thrones',
  genre: 'drama',
  year: 2011,
  actor: 'Kit Harington',
  stars: 9.6
}
chroniclesOfRiddick = {
  title: 'The Chronicles of Riddick',
  genre: 'action',
  year: 2004,
  actor: 'Vin Diesel',
  stars: 6.7
}
bandOfBrothers = {
  title: 'Band of Brothers',
  genre: 'drama',
  year: 2001,
  actor: 'Damian Lewis',
  stars: 9.5
}
jurassicPark = {
  title: 'Jurassic Park',
  genre: 'adventure',
  year: 1993,
  actor: 'Sam Neill',
  stars: 8.1
}
rome = {
  title: 'Rome',
  genre: 'drama',
  year: 2005,
  actor: 'Kevin McKidd',
  stars: 8.9
}
movie.push(gameOfThrones)
movie.push(chroniclesOfRiddick)
movie.push(bandOfBrothers)
movie.push(jurassicPark)
movie.push(rome)

//BAD MOVIES
twilight = {
  title: 'Twilight',
  genre: 'drama',
  year: 2008,
  actor: 'Kristen Stewart',
  stars: 5.2
}
fifty = {
  title: 'Fifty Shades of Grey',
  genre: 'drama',
  year: 2015,
  actor: 'Dakota Johnson',
  stars: 4.1
}
hungerGames = {
  title: 'The Hunger Games',
  genre: 'drama',
  year: 2012,
  actor: 'Jennifer Lawrence',
  stars: 7.3
}
badMovie.push(twilight)
badMovie.push(fifty)
badMovie.push(hungerGames)

console.log(movie)
console.log(badMovie)

//sort by title
movie.sort(function(a, b) {
  var titleA = a.title
  var titleB = b.title
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
})

//STRING
// [{"title":"Band of Brothers","genre":"drama","year":2001,"actor":"Damian Lewis","stars":9.5},{"title":"Game of Thrones","genre":"drama","year":2011,"actor":"Kit Harington","stars":9.6},{"title":"Jurassic Park","genre":"adventure","year":1993,"actor":"Sam Neill","stars":8.1},{"title":"Rome","genre":"drama","year":2005,"actor":"Kevin McKidd","stars":8.9},{"title":"The Chronicles of Riddick","genre":"action","year":2004,"actor":"Vin Diesel","stars":6.7}]

// sort by value
movie.sort(function (a, b) {
  if (a.stars > b.stars) {
    return 1;
  }
  if (a.stars < b.stars) {
    return -1;
  }
  return 0;
})

badMovie.sort(function (a, b) {
  if (a.stars > b.stars) {
    return 1;
  }
  if (a.stars < b.stars) {
    return -1;
  }
  return 0;
})


//STRING

// [{"title":"The Chronicles of Riddick","genre":"action","year":2004,"actor":"Vin Diesel","stars":6.7},{"title":"Jurassic Park","genre":"adventure","year":1993,"actor":"Sam Neill","stars":8.1},{"title":"Rome","genre":"drama","year":2005,"actor":"Kevin McKidd","stars":8.9},{"title":"Band of Brothers","genre":"drama","year":2001,"actor":"Damian Lewis","stars":9.5},{"title":"Game of Thrones","genre":"drama","year":2011,"actor":"Kit Harington","stars":9.6}]
//


//GOOD AND BAD MOVIES COMBINED
var allMovies = movie.concat(badMovie)

allMovies = JSON.stringify(allMovies)
console.log(allMovies)
