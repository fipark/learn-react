import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)


  return (
    
    <>
    <h2>12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
    <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>+1</button>
    </>
  )
}

export default App
