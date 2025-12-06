import Keypad from "./keypad"
import { useState } from "react"
import "./App.css"
function App() {
  let [input, setInput] = useState("")
  function handleClick(value) {
    setInput(input + value)

  }
  function calculate(value) {
    let outputValu = eval(input)
    setInput(outputValu)

  }
  function handleClear() {

    setInput("")

  }
  return (
    <div className="container">
      <h1>Calculator app using react </h1>
      <div className="calculator">
        <input type="text" value={input} className="output" />
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
      </div>
    </div>
  )
}
export default App
