//Progress Notes: Random 'question' data being logged in the 'Display' component, but not being displayed in the broswer window.

import ControlledForm from "./components/ControlledForm";
import Display from "./components/Display"
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState({})
  return (
    <div className="App">
      <ControlledForm setQuestion={setQuestion} />
      <Display question={question} />
    </div>
  );
}

export default App;
