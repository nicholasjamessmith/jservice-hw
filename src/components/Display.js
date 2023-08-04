import { useState } from "react";

function Display(props) {
  const { question } = props;
  //write a function that toggles whether or not you can see the answer
  const [toggle, setToggle] = useState(true)
  const handleClick = () => {
    setToggle(!toggle);
  }
  
  const [counter, setCounter] = useState(0)
  
  console.log(question[0])
  //console.log(question[0].answer)
  //console.log(question[0].category.title)

  if (props.question[0]) {
    return (
      <><div>
        <h2>Score: {counter}</h2>
        <button onClick={() => setCounter(counter - 100)}>Decrease</button>
        <button onClick={() => setCounter(counter + 100)}>Increase</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <h2>{question[0].question}</h2>
        <h2>Category: {question[0].category.title}</h2>
        <h2>Points: {question[0].value} </h2>
        {/*<button onClick={handleClick}>Answer</button>*/}
      </div>
        <div onClick={handleClick}>
          <h2>What is {toggle?  "______": question[0].answer} ?</h2>
        </div></>
    )
  }
  //else if (toggle) {
  //  return (
  //    <div onClick={handleClick}>
  //      <h2>This is it.</h2>
  //    </div>
  //  )
  //}
  //if (toggle) {
  //  return
  //  <div>
  //    <button onClick={handleClick}>Answer</button>
      //<h2>What/who is {question[0].answer}</h2>
  //  </div>
  //} else {
  //  return <button onClick={handleClick}>Answer</button>
  //}
}
//}
export default Display