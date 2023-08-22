import { useState } from 'react'

const DisplayGood = props => <div>{"good "+props.good}</div>
const DisplayBad = props => <div>{"bad "+props.bad}</div>
const DisplayNeutral = props => <div>{"neutral "+props.neutral}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)




const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>
      <p>{"give feedback"} </p>
      </h2>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      
      
      <h2>
      <p>{"statistics"} </p>
      </h2>
      <DisplayGood good={good} />
      <DisplayNeutral neutral={neutral} />
      <DisplayBad bad={bad} />
    </div>
  )
}

export default App




