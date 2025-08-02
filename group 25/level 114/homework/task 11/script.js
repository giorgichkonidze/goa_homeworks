const studentData = [
  {
    id: 1,
    name: "Luka",
    grades: {
      Math: [90, 92, 88],
      Science: [85, 87, 90],
      History: [78, 82, 84]
    },
    attendance: [true, true, false, true, true],
    extracurricular: ["Debate Team", "Chess Club"]
  },
  {
    id: 2,
    name: "Nika",
    grades: {
      Math: [65, 68, 70],
      Science: [60, 62, 64],
      History: [72, 75, 70]
    },
    attendance: [true, false, false, false, true],
    extracurricular: []
  },
  {
    id: 3,
    name: "Saba",
    grades: {
      Math: [100, 100, 100],
      Science: [98, 99, 100],
      History: [100, 100, 100]
    },
    attendance: [true, true, true, true, true],
    extracurricular: ["Debate Team"]
  }
]

// 1
studentData.forEach(student => {
    console.log(`zdd, ${student.name}!`)
})

// 2
const studentNames = studentData.map(student => student.name)
console.log("students names:", studentNames)

// 3
const studentAverages = studentData.map(student => {
    const allScores = Object.values(student.grades).flat()
    const total = allScores.reduce((sum, score) => sum + score, 0)
    const avg = total / allScores.length
    return {name: student.name, average: avg}
})
console.log("students averages:", studentAverages)

// 4
const highPerformingStudents = studentAverages.filter(s => s.average >= 85)
console.log("high performing students:", highPerformingStudents)

// 5
const strugglingStudents = studentData.filter(student =>
    Object.values(student.grades).some(subjectScores =>
        subjectScores.every(score => score < 70)
  )
)
console.log("strugglings students:", strugglingStudents.map(s => s.name))

// 6
const totalExtracurricular = studentData.reduce(
    (sum, student) => sum + student.extracurricular.length,0
)
console.log("total activities:", totalExtracurricular)

// 7
const debateTeamNames = studentData.reduceRight((names, student) => {
    if (student.extracurricular.includes("debate team")) {
        names.push(student.name);
  }
  return names;
}, []).join("and")

console.log("Debate Team (Reverse Order):", debateTeamNames)

// 8
const allHaveGoodAttendance = studentData.every(student => {
    const total = student.attendance.length
    const present = student.attendance.filter(Boolean).length
    return (present/total) >= 0.5
})
console.log("all have good attendance:", allHaveGoodAttendance)

// 9
const hasInactiveStudent = studentData.some(student => student.extracurricular.length === 0)
console.log("has inactive students:", hasInactiveStudent)

//10
studentData.forEach(student => {
    for (let subject in student.grades) {
        student.grades[subject].forEach(score => {
            if (score === 100) {
        console.log(`Congratulations, ${student.name}, for achieving a perfect score in ${subject}!`)
      }
    })
  }
})