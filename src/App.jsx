import { useState } from 'react'
import './App.css'

const cards = [
  {
    question: 'What is React?',
    answer: 'A JavaScript library for building user interfaces.',
    category: 'react'
  },
  {
    question: 'What is a component?',
    answer: 'A reusable piece of UI in React.',
    category: 'react'
  },
  {
    question: 'What is state?',
    answer: 'Data that React remembers and can update over time.',
    category: 'react'
  },
  {
    question: 'What does useState() do?',
    answer: 'It creates a state variable and a function to update it.',
    category: 'react'
  },
  {
    question: 'What is JSX?',
    answer: 'A syntax that lets you write HTML-like code inside JavaScript.',
    category: 'javascript'
  },
  {
    question: 'What is an event in React?',
    answer: 'A user action like clicking, typing, or submitting a form.',
    category: 'javascript'
  },
  {
    question: 'What does onClick do?',
    answer: 'It runs a function when an element is clicked.',
    category: 'javascript'
  },
  {
    question: 'What is a prop?',
    answer: 'Data passed from one component to another.',
    category: 'react'
  },
  {
    question: 'What does CSS do?',
    answer: 'It controls the styling and layout of a webpage.',
    category: 'css'
  },
  {
    question: 'What is GitHub used for?',
    answer: 'Storing, sharing, and tracking code projects.',
    category: 'git'
  }
]

function App() {
  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [userGuess, setUserGuess] = useState('')
  const [feedback, setFeedback] = useState('')

  function flipCard() {
    setShowAnswer(!showAnswer)
  }

  function getNextCard() {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
      setShowAnswer(false)
    }
  }

  
  function getPreviousCard() {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setShowAnswer(false)
    }    
  }

  
  function handleSubmitGuess(event) {
    event.preventDefault()

    if (userGuess.trim().toLowerCase() === cards[currentCard].answer.trim().toLowerCase()) {
      setFeedback('correct')
    } else {
      setFeedback('incorrect')
    }
  }
  function getFeedbackMessage() {
    if (feedback === 'correct') {
      return <p className="feedback correct">Correct!</p>
    }

  if (feedback === 'incorrect') {
    return <p className="feedback incorrect">Incorrect. Try again!</p>
  }

  return null
}

  return (
    <div className="app">
      <div className="header-panel">
        <h1>Web Dev Flashcards</h1>

        <p className="description">
          A quick study deck for React, JavaScript, HTML, CSS, and Git basics.
        </p>

        <p className="card-count">Total cards: {cards.length}</p>
      </div>

      <div className={`flashcard ${cards[currentCard].category}`} onClick={flipCard}>
        <h2>
          {showAnswer ? cards[currentCard].answer : cards[currentCard].question}
        </h2>
      </div>

      <form className="guess-form" onSubmit={handleSubmitGuess}>
        <label htmlFor="guess-input">Enter your guess:</label>

        <input
          id="guess-input"
          type="text"
          value={userGuess}
          onChange={(event) => setUserGuess(event.target.value)}
          placeholder="Type your answer here"
        />

        <button type="submit">Submit Guess</button>
      </form>
      
      {getFeedbackMessage()}
      
      <div className="button-row">
        <button onClick={getPreviousCard} disabled={currentCard === 0}>
          ←
        </button>

        <button onClick={getNextCard} disabled={currentCard === cards.length - 1}>
          →
        </button>
      </div>
    </div>
  )
}

export default App