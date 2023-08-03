import { useState } from "react";

function ControlledForm(props) {
  const [buttonData, setButtonData] = useState({
    question: "",
  })

  //Function for handling change in state
  const stateChange = (event) => {
    const newState = { ...buttonData }
    newState[event.target.name] = event.target.value
    setButtonData(newState)
  }

  //Function to call API data

  const getQuestion = async () => {
    const url = `http://jservice.io/api/random`
    const response = await fetch(url)
    const data = await response.json()
    props.setQuestion(data)
  }

  //Function for click of button *(previously 'submission of form')
  const handleSubmit = (event) => {
    event.preventDefault()
    getQuestion(buttonData.question)
    setButtonData({ question: "" })
  }

  //Information to be "returned" / displayed in broswer
  return <div>
    <h1>Welcome to Jeopardy!</h1>
    <button onClick={handleSubmit}>Get Question</button>
  </div>
}

export default ControlledForm