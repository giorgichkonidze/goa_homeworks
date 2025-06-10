const cinema = {
  cinemaName: "apple cinema",
  moviesCount: 20,
  location: "Georgia, tbilisi",
  movieUserReviews: {
    user1: 4.0,
    user2: 5.6,
    user3: 3.0
  }
};
console.log(cinema);
console.log("vipSeats" in cinema);
Object.assign(cinema, { ticketPrice: 12.5 });
console.log(cinema); 
Object.freeze(cinema);
cinema.cinemaName = "Galaxy Cinema";
console.log(cinema.cinemaName);
console.log(Object.isFrozen(cinema));