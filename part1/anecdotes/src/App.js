import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const DisplayAnecdote = ({anecdote, votes}) =>
{
  return (
  <div>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </div>
  )
}

const DisplayLargest = ({anecdotes, votes}) =>
{
  const max = Math.max(...votes)
  const index = votes.indexOf(max)

  if (max === 0)
  return (
    <div>
    <h4>Anecdote with most votes</h4>
    no votes yet
    </div>
  )
  return(
    <div>
    <h5>Anecdote with most votes</h5>
    <p>{anecdotes[index]}</p>
    <p>has {max} votes</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  console.log(points)
  


const GenerateRandom = () =>
{
  while(1)
  {
    let num = Math.round(Math.random()*10);

    if (num < anecdotes.length)
    {setSelected(num)
    break}
    else
    continue
  }
  
}

const handleVotes = () =>
{
  const newPoints = [...points]
  newPoints[selected] += 1
  setPoints(newPoints)
}



  return (
    <div>
      <h2>anecdote of the day</h2>
      <DisplayAnecdote anecdote = {anecdotes[selected]} votes = {points[selected]} />
      <Button handleClick={() => GenerateRandom()} text="next anecdote" />
      <Button handleClick={() => handleVotes()} text="vote" />
      <DisplayLargest anecdotes = {anecdotes} votes={points}/>

    </div>
  )
}

export default App