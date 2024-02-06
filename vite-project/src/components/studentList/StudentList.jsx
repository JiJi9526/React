import React from 'react'

const studentList = [
    {id: 1,
    name: "Aung",
    grade: "A"
    },
    {id: 2,
    name: "May",
    grade: "A"
    },
    {id: 1,
    name: "Bo Bo",
    grade: "B"
    },
    {id: 1,
    name: "Naing",
    grade: "C"
    },
];

const StudentList = () => {
  return (
    <>
        <h2>StudentList</h2>
        <div className='students'>
          {
            studentList.map((student) =>(
                <div className='student' key={student.id}>
                    <h3>Student Name: {student.name}</h3>
                    <p>Student Grade: {student.grade}</p>
                </div>
            ))
          }
      </div>
    </>
  )
}

export default StudentList