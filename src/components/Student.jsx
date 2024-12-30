import React from 'react'

function Student(s) {
  return (
    <div className='student'>
           <p>Student Name {s.name}</p>
           <p>Student age {s.age}</p>
    </div>
  )
}

export default Student
