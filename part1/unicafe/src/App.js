import { useState } from 'react'

const Display = (props) => (
  <div>{props.value}</div>
)

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const avg = (Math.abs(good - bad))/all
  const positive = (good/all)*100

  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />

      <h1>Statistics</h1>
      <p>Good <Display value={good}/></p>
      <p>Bad <Display value={bad}/></p>
      <p>Neutral <Display value={neutral}/></p>
      <p>All <Display value={all}/></p>
      <p>Average <Display value={neutral}/></p>
      <p>Positive <Display value={positive}/>%</p>
    </div>
  )
}

export default App