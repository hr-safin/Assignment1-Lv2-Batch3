// Interface for student object
interface Student {
    name: string;
    age: number;
    grades: number[];
  }
  
  
  function calculateAverageGrade(student: Student): number {
    // Check if grades array is empty
    if (student.grades.length === 0) {
      throw new Error("Student has no grades to calculate average");
    }
  
    
    const average = student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length;
    return average;
  }
 
  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };
  
  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(averageGradeForBob); // Output: 83