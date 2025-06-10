const university = {
  name: "Sample University",
  departments: 5,
  website: "www.sampleuniversity.com",
  ratings: {
    student1: 4.5,
    student2: 3.8,
    student3: 4.2
  }
}
console.log(university);
console.log("scholarship" in university)
  
Object.assign(university, { studentsCount: 5000 });
console.log(university);
  
Object.freeze(university)
  
university.name = "New University";
console.log(university.name)
console.log(Object.isFrozen(university))