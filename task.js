const students = [
  { name: "sriram", marks: [10, 9, 10] },
  { name: "selva", marks: [10, 9, 5] },
  { name: "rajesh", marks: [10,  10, 7] },
  { name: "nithan", marks: [5, 5, 10] }
];
const totalMarks = students.map(student => ({
  name: student.name,
  total: student.marks.reduce((sum, mark) => sum + mark, 0)
}));
console.log("Total Marks of Each Student:", totalMarks);
const above25 = totalMarks.filter(student => student.total > 25 );
console.log("Students scoring above 25:", above25);
const topperMarks = totalMarks.reduce((max, student) => 
  student.total > max ? student.total : max, 0
);
console.log("Class Topper's Total Marks:", topperMarks);
