let students = [
    {
        name: "Szabó Géza Szilveszter",
        grades: [5, 5, 5, 5],
        start: 2021
    },
    {
        name: "Zsilka Valér",
        grades: [3, 5, 2, 4],
        start: 2023
    },
    {
        name: "Rajhona Leóna Anasztázia",
        grades: [4, 5, 5, 4],
        start: 2024
    },
    {
        name: "Nagy Balázs",
        grades: [5, 1, 2, 5],
        start: 2020
    },
    {
        name: "Nagy Levente",
        grades: [1, 2, 5, 5],
        start: 2024
    },
    {
        name: "Tóth Gellért Levente",
        grades: [4, 3, 4, 3],
        start: 2022
    },
    {
        name: "Somogyi Szilárd",
        grades: [5, 4, 3, 3],
        start: 2019
    }
]

// 1.1
const studentFrom2022 = students.filter((student) => student.start === 2022).map((student) => student.name);

// 1.2
const everyStudentHasA5 = students.every((student) => student.grades.some((grad) => grad === 5));

// 1.3
const gradeAverages =  [
    ...new Set(students
        .flatMap((s) => s.grades)
    )
];;

// 1.4
const secondStudent = students
.sort((s1, s2) =>
    s1.name.localeCompare(s2.name))[1];

// 1.5
const studentsAfter2021 = students.filter((student)=>
student.start >= 2021);

// +1
const secondBestStudent = undefined;

console.log(
    '\nA 2022-ben kezdő diák neve:', studentFrom2022,
    '\nMinden diáknak van legalább egy ötöse:', everyStudentHasA5,
    '\nÁtlagok:', gradeAverages,
    '\n Második diák:', secondStudent,
    '\n 2021-ben vagy azután kezdő diákok:', studentsAfter2021,
    '\nA 2. legnagyobb átlaggal rendelkező diák:', secondBestStudent
);
