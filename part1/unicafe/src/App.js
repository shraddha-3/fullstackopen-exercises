import { useState } from 'react'

const Display = (props) => (
  <div>{props.value}</div>
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
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <h1>Statistics</h1>
      <p>Good <Display value={props.good}/></p>
      <p>Bad <Display value={props.bad}/></p>
      <p>Neutral <Display value={props.neutral}/></p>
      <p>All <Display value={all}/></p>
      <p>Average <Display value={props.neutral}/></p>
      <p>Positive <Display value={positive}/>%</p>
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

      <Statistics good={good} neutral = {neutral} bad={bad} />
    </div>
  )
}

export default App