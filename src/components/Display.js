function Display(props) {
  const question = props.question;


  console.log(question[0])
  //console.log(question[0].answer)
  //console.log(question[0].category.title)

  if (props.question[0]) {
    return <div>
      <h2>"{question[0].question}</h2>
      <h2>Category: {question[0].category.title}</h2>
      <h2>What/who t is {question[0].answer}</h2>
    </div>
  } else {
    return <h2>?</h2>
  }
}

export default Display