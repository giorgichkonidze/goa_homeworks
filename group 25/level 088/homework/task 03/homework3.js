const hotel = {
  hotelName: "Goa hotel",
  stars: 3,
  location: "Tbilisi",
  userReviews: {
    user1: 5.2,
    user2: 4.5,
    user3: 3.9
  }
};
console.log(hotel);
console.log("spa" in hotel);
Object.assign(hotel, { roomsCount: 150 });
console.log(hotel);
Object.freeze(hotel);
hotel.hotelName = "Mountainview Resort";
console.log(hotel.hotelName);
console.log(Object.isFrozen(hotel)); 