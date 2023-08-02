const Header = (props) => {
  return (
    <div>
      <h1>
      <p>{props.course} </p>
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.credits}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.l[0].name} credits={props.l[0].exercises} />
      <Part part={props.l[1].name} credits={props.l[1].exercises} />
      <Part part={props.l[2].name} credits={props.l[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const lista=[part1,part2,part3]
  
  return (
    <div>
      <Header course={course} />
      <Content l={lista} />  
      <Total exercises={part1.exercises+ part2.exercises+ part3.exercises}/>
   
    </div>
  )
}

export default App
