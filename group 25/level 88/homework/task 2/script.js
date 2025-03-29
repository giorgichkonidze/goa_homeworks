const sportsClub = {
    clubName: "ninja fc",
    sportType: "basketball",
    foundedYear: 1995,
    achievements: {
      title1: "national league chempios",
      title2: "big cup winner",
      title3: "other cup chempion"
    }
  }
  

  console.log(Object.keys(sportsClub))
  
 
  console.log(Object.values(sportsClub))
  
 
  console.log("sponsors" in sportsClub)

 
  Object.assign(sportsClub, { stadiumCapacity: 50000 })
  console.log(sportsClub);
  

  Object.freeze(sportsClub)
  
  
  sportsClub.clubName = "New Champions FC";
  console.log(sportsClub.clubName)
  
  
  console.log(Object.isFrozen(sportsClub))
  