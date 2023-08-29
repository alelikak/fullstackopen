

const Header = (props) => {
    return (
      <div>
        <h1>
        <p>{props.name} </p>
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
        <Part part={props.parts[0].name} credits={props.parts[0].exercises} />
        <Part part={props.parts[1].name} credits={props.parts[1].exercises} />
        <Part part={props.parts[2].name} credits={props.parts[2].exercises} />
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises+ props.parts[2].exercises}</p>
      </div>
    )
  }

const Course = (props) => {  
    console.log('props value is',props)  
    const { course } = props
    console.log('course value is',course)
   
   const credits = course.parts.map(({ exercises }) => exercises) //https://upmostly.com/tutorials/how-to-use-map-in-react-applications
   console.log('credits is ',credits)
   const total = credits.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   console.log('total is ',total)
    return (
      <div>
      <Header name={course.name} />
      
  
      <ul>
          {course.parts.map(part => <li key={part.id}><p>{part.name} {part.exercises} </p></li>)}      
      </ul>
      <b>{'Total of '}{total} {' exercises'}</b>
  
      </div>
    )
  }

  export default Course;  //Source https://create-react-app.dev/docs/importing-a-component/
