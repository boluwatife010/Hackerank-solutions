function gradingStudents(grades) {
    var value = [], diff;
    for (var g = 0; g < grades.length; g++) {
        if (grades[g] % 5 === 0 || grades[g] < 38) {
            value.push(grades[g]);
        }
        else if (grades[g] % 5 !== 0) {
            diff = (Math.round(grades[g] / 5) + 1) * 5 - grades[g];
            if (diff < 3) {
                value.push(grades[g] + diff);
            }
            else {
                value.push(grades[g]);
            }
        }
    }
    return value;
}
console.log(gradingStudents([73, 67, 38, 33]));
// 
