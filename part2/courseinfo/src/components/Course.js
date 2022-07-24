import React from 'react'
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <div key={part.id}><Part part={part}/></div>)}
  </>

  const Course = ({course}) => 
  <>
    <Header course={course.name}/>
    <Content parts = {course.parts}/>
    <Total sum={course.parts.reduce(function(sum, part){return sum+part.exercises},0)} />
  </>

  export default Course