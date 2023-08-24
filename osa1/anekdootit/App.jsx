import { useState } from 'react'



const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
function randomNumberInRange(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min; //https://www.thesimplifieddev.com/how-to-generate-a-random-number-in-react-js
  
}



const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //const points = new Array(10+1).join('0').split('').map(parseFloat)
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(10+1).join('0').split('').map(parseFloat))
  //points =new Array(10+1).join('0').split('').map(parseFloat) //https://stackoverflow.com/questions/20222501/how-to-create-a-zero-filled-javascript-array-of-arbitrary-length/22209781
  const handleClick = () => {    
    const copy = [...points] 
    copy[selected] += 1 
    setPoints(copy)
    
    }
    
  return (
    <div>
      
      <p> {anecdotes[selected]} </p>
      <p> {'voted '+points[selected]+' times'} </p>

      
      <Button handleClick={() => setSelected(randomNumberInRange(0, 7)) } text="next anecdote" /> 
      <Button handleClick={handleClick} text="vote" /> 
      
      
    </div>

  )
}

export default App




