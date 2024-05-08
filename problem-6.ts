// Type alias for book object
type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  
  // Function to check if book is recent (published in the last 5 years)
  function isRecentBook(book: Book): boolean {
    const currentYear = new Date().getFullYear();
    return currentYear - book.publishedYear <= 5;
  }
  
  // Sample Usage
  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
  };
  
  const isRecent = isRecentBook(book1);
  console.log(isRecent);