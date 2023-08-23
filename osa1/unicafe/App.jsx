import { useState } from 'react'



const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticsLine = (props) => (
  <tr><td>{props.text}</td><td>{props.value}</td></tr>
)

const Statistics = (props) => {  
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) 
  {    return (<div> {"No feedback given" }</div>)  }  
  return (<div><table><tbody><StatisticsLine text="good " value={props.good} />
  <StatisticsLine text="bad " value={props.bad} />
  <StatisticsLine text="neutral " value={props.neutral} />
  <StatisticsLine text="average " value={(props.good*1-props.bad*1+props.neutral*0)/(props.good+props.bad+props.neutral)} />
  <StatisticsLine text="positive " value={(props.good)/(props.good+props.bad+props.neutral)*100+" %"} />
 
  </tbody></table></div>)}

  
  



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
      <Button handleClick={() => setGood(good+1) } text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      
      
      <h2>
      <p>{"statistics"} </p>
      </h2>
      <Statistics good={good} bad={bad} neutral={neutral}  />
      
    </div>

  )
}

export default App




