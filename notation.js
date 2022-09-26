const student = {
    name: 'faria Rahman',
age:15,
class : 'ten',
marks:{
    math:78,
    phisycs: 89,
    chemistry:45,

},

}
const marks = student.marks;
const math = student.marks.math;
const chemistry = student['marks']['chemistry'];
const subject2 = student['marks']['chemistry'];