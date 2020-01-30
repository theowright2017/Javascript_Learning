function gradingStudents(grades) {

    for (let i = 0; i < grades.length; i++) {
       console.log(rateGrade(grades[i]))
    }

}

function rateGrade(num) {
    let result = 0
    // if ( num >= 38) {
        for (let i = num; i < num+5; i++) {
            if (i % 5 === 0 && i - num < 3 && num >= 38) {
                return result = i
            } else {
                result = num
            }
        }
    // }
    return result
}
// console.log(rateGrade(73))

// HackerLand University has the following grading policy:
//
// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:
//
// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .
//
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
//
// Function Description
//
// Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.
//
// gradingStudents has the following parameter(s):
//
// grades: an array of integers representing grades before rounding
// Input Format
//
// The first line contains a single integer, , the number of students.
// Each line  of the  subsequent lines contains a single integer, , denoting student 's grade.
//
// Constraints
//
// Output Format
//
// For each , print the rounded grade on a new line.
//
// Sample Input 0
//
// 4
// 73
// 67
// 38
// 33
// Sample Output 0
//
// 75
// 67
// 40
// 33







console.log(gradingStudents([4,73,67,38,33]))
