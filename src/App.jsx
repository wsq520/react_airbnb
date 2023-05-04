import React, { memo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = memo((props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(111)

    return () => {
      console.log(2222)
    }
  }, [])

  return (
    <div>
      <h2>App</h2>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
})


export default App