import { useState } from 'react'

const StatisticLine = (props) => (
  <tr><td>{props.text}</td><td>{props.value}</td></tr>
  
)

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)



const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral
  const avg = (Math.abs(props.good - props.bad))/all
  const positive = (props.good/all)*100

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <table>
       <tbody>
         <StatisticLine text="Good" value={props.good}/>
         <StatisticLine text="Bad" value={props.bad}/>
         <StatisticLine text="Neutral" value={props.neutral}/>
         <StatisticLine text="All" value={all}/>
         <StatisticLine text="Average" value={props.neutral}/>
         <StatisticLine text="Positive" value={positive}/>%
        </tbody> 
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      
      <h1>statistics</h1>
      <Statistics good={good} neutral = {neutral} bad={bad} />
    </div>
  )
}

export default App