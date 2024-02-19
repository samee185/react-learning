import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        // setCount((prev)=> prev + 1);
        setCount(count + 1);
    }
    const handleDecrement = ()=>{
        // setCount((prev)=> prev + 1);
        setCount(count - 1);
    }
  return (
    <>
    <p>count : {count}</p>
    <button onClick = {handleDecrement}>prev</button>
    <button onClick = {handleIncrement}>add</button>
    </>
  )
}

export default Counter