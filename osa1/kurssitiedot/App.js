const Header = (props) => {
  return (
    <div>
      <h1>
      <p>{props.course} </p>
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.credits}</p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} credits={exercises1} /> 
      <Content part={part2} credits={exercises2}/> 
      <Content part={part3} credits={exercises3}/> 
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App