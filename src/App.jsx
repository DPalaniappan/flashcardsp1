import './App.css';
import {questions} from './Questions.js'
import {useState} from 'react';
import Card from './components/Card.jsx'


const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
const allQuestions = [ {id: 0, question: "Start", answer: "Click button to begin", category: "None"}, ...shuffledQuestions ]

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleNextQuestion = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  
  }
  return (
    <div className="App">
      <div className="header">
      <h2>Ultimate Nintendo Trivia Questions</h2>
      <h4>Test your knowledge of Nintendo's rich history and iconic characters!</h4>
      <h5> Number of Questions: {shuffledQuestions.length}</h5>
      </div>
      <Card question={allQuestions[currentQuestion].question} answer={allQuestions[currentQuestion].answer} category={allQuestions[currentQuestion].category}/>
      <button onClick={handleNextQuestion} >{"→"}</button>
    </div>
  )
}

export default App
