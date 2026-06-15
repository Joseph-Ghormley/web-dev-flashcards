import { useState } from 'react'
import './App.css'

function App() {
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

  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  function flipCard() {
    setShowAnswer(!showAnswer)
  }

  function getRandomCard() {
    let randomIndex = Math.floor(Math.random() * cards.length)

    while (randomIndex === currentCard) {
      randomIndex = Math.floor(Math.random() * cards.length)
    }

    setCurrentCard(randomIndex)
    setShowAnswer(false)
  }
  
  function getPreviousCard() {
  let previousIndex = currentCard - 1

  if (previousIndex < 0) {
    previousIndex = cards.length - 1
  }

  setCurrentCard(previousIndex)
  setShowAnswer(false)
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

    <div className="button-row">
      <button onClick={getPreviousCard}>←</button>
      <button onClick={getRandomCard}>→</button>
    </div>
  </div>
 )
}

export default App