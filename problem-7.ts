function logString(value: unknown): void {
    // Type guard to check if value is a string
    if (typeof value === "string") {
      console.log(value);
    } else {
      console.error("Error: Input is not a string.");
    }
  }
  
  // Sample Usage 1
  logString("Hello, TypeScript!");  // Output: "Hello, TypeScript!"
  
  // Sample Usage 2
  logString(42); 