import './App.css';
import {questions} from './Questions.js'
import {useState} from 'react';
import Card from './components/Card.jsx'


const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

const App = () => {
  const [shuffledQuestions] = useState( () => {
    const shuffled = shuffleArray(questions); 
    return [{question:"Start", answer: "Click button to begin", category: "None"}, ...shuffled];
    });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleNextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
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
      <Card question={shuffledQuestions[currentQuestion].question} answer={shuffledQuestions[currentQuestion].answer} category={shuffledQuestions[currentQuestion].category}/>
      <button onClick={handleNextQuestion} >{"→"}</button>
    </div>
  )
}

export default App
