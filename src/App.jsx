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
  const [deck, setDeck] = useState(cards)
  const [showAnswer, setShowAnswer] = useState(false)
  const [userGuess, setUserGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  function flipCard() {
    if (feedback!== '') {
      setShowAnswer(!showAnswer)
    }
  }

  function getNextCard() {
    if (currentCard < deck.length - 1) {
      setCurrentCard(currentCard + 1)
      setShowAnswer(false)
      setUserGuess('')
      setFeedback('')
    }
  }

  
  function getPreviousCard() {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setShowAnswer(false)
      setUserGuess('')
      setFeedback('')
    }    
  }

  function shuffleCards() {
  const shuffledDeck = [...deck]

  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const temporaryCard = shuffledDeck[i]

    shuffledDeck[i] = shuffledDeck[randomIndex]
    shuffledDeck[randomIndex] = temporaryCard
  }

  setDeck(shuffledDeck)
  setCurrentCard(0)
  setShowAnswer(false)
  setUserGuess('')
  setFeedback('')
}

  function cleanAnswer(answer) {
  return answer
    .trim()
    .toLowerCase()
    .replace(/[.,!?]/g, '')
}

 function handleSubmitGuess(event) {
  event.preventDefault()

  if (cleanAnswer(userGuess) === cleanAnswer(deck[currentCard].answer)) {
    setFeedback('correct')
    setCurrentStreak(currentStreak + 1)

    if (currentStreak + 1 > longestStreak) {
      setLongestStreak(currentStreak + 1)
    }
  } else {
    setFeedback('incorrect')
    setCurrentStreak(0)
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

        <p className="card-count">Total cards: {deck.length}</p>

        <p className="streak-count">
          Current streak: {currentStreak} | Longest streak: {longestStreak}
        </p>
      </div>

      <div className={`flashcard ${deck[currentCard].category}`} onClick={flipCard}>
        <h2>
          {showAnswer ? deck[currentCard].answer : deck[currentCard].question}
        </h2>
      </div>
      
      <form className="guess-form" onSubmit={handleSubmitGuess}>
        <label htmlFor="guess-input">Guess the answer here:</label>

        <input
          id="guess-input"
          type="text"
          value={userGuess}
          onChange={(event) => setUserGuess(event.target.value)}
          placeholder="Type your answer here"
          disabled={showAnswer}
        />

        <button type="submit" disabled={showAnswer}>
          Submit Guess
        </button>
      </form>
      
      {getFeedbackMessage()}

      <div className="button-row">
        <button onClick={getPreviousCard} disabled={currentCard === 0}>
          ←
        </button>

        <button onClick={shuffleCards}>
          Shuffle
        </button>

        <button onClick={getNextCard} disabled={currentCard === deck.length - 1}>
          →
        </button>
      </div>
    </div>
  )
}

export default App