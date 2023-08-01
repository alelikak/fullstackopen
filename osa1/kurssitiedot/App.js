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
      <Part part={props.l[0].part} credits={props.l[0].exercises} />
      <Part part={props.l[1].part} credits={props.l[1].exercises} />
      <Part part={props.l[2].part} credits={props.l[2].exercises} />
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
  const lista=[{part:'Fundamentals of React', exercises:10},
  {part:'Using props to pass data', exercises:7},
  {part:'State of a component', exercises:14},]
  
    
 
  return (
    <div>
      <Header course={course} />
      <Content l={lista} />  
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
