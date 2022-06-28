import React,{useState} from 'react' 
import "./app.css"
const App = () => {
  const [count, setCount] = useState(0)
  const handleClick = (e) => {
    console.log("me")
    const id = e.target.id
  if(id=== "increase-button") {
    setCount((prev)=>
      prev + 1
    )
  }
  else if(id=== "decrease-button") {
    setCount((prev)=>
      prev - 1
    )
  }
  if(id=== "reset-button") {
    setCount(0)
  }
  }
  
  
  return (
    <>
     <p id='counter-value'>count: {count}</p>
     <div className='container'>
      <button id="increase-button" onClick={handleClick}>Increase </button>
      <button id="decrease-button" onClick={handleClick}>Decrease</button>
      <button id="reset-button" onClick={handleClick}>Reset</button>
     </div>
     </>
  )

}

export default App