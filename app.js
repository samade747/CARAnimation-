// const student = [
//     {Id: 1, Name: "samad", score: 100, subject: english,},
//     {Id: 2, Name: "haron", score: 100, subject: urdu,},
//     {Id: 3, Name: 'kamil', score: 300, subject: arabic,},
//     {Id: 4, Name: 'sami', score: 110,  subject: BSc}
//     {Id: 5, Name: 'dash', score: 1110,  subject: BSc}
// ]

// const totalScore = student.reduce(function(acc, currItem) {
//     acc += currItem.score;
//     return acc;
// }, 0);



// const averageScore = totalScore / student.length;

// console.log(averageScore);

// list favorite subjects with reduce

const student = [
    {Id: 1, Name: "samad", score: 100, subject: 'english'},
    {Id: 2, Name: "haron", score: 100, subject: 'urdu'},
    {Id: 3, Name: 'kamil', score: 300, subject: 'arabic'},
    {Id: 4, Name: 'sami', score: 110,  subject: 'BSc'},
    {Id: 5, Name: 'dash', score: 1110,  subject: 'BSc'},
    {Id: 5, Name: 'dash', score: 1110,  subject: 'urdu'}
]

const subjectsCount = student.reduce(function(acc, currItem) {
    acc[currItem.subject] = (acc[currItem.subject] || 0) + 1;
    return acc;
}, {});

const mostFavoriteSubjects = Object.keys(subjectsCount).filter(subject => subjectsCount[subject] === Math.max(...Object.values(subjectsCount)));
const studentsWithMostFavoriteSubjects = student.filter(student => mostFavoriteSubjects.includes(student.subject)).length;



console.log(`Most favorite subjects: ${mostFavoriteSubjects}`);
console.log(`Number of students with most favorite subjects: ${studentsWithMostFavoriteSubjects}`);
