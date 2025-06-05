function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  
    this.getSummary = function() {
      return `${this.title} by ${this.author}, published in ${this.year}`;
    };
  }
  
 
  const book1 = new Book("1984", "George Orwell", 1949);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
  const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  
  console.log(book1.getSummary()); 
  console.log(book2.getSummary()); 
  console.log(book3.getSummary()); 
  