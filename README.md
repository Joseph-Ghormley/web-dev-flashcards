# Web Development Project 3 - *Web Dev Flashcards*

Submitted by: **Joseph Ghormley**

This web app: **A React flashcard study app for web development concepts. Users can type a guess before revealing the answer, get correct or incorrect feedback, move through cards in order, shuffle the deck, and track their current and longest correct-answer streak.**

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct

- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button navigates to the next card in a set sequence when clicked
  - A previous/back button returns to the previous card in the set sequence when clicked
  - The next and back buttons are disabled at the beginning or end of the list, preventing wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards remain in the same sequence unless the shuffle button is clicked
  - Cards change to a random sequence once the shuffle button is clicked

- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
  - Answers ignore uppercase/lowercase differences
  - Answers ignore punctuation differences such as periods, commas, question marks, and exclamation marks

- [x] A counter displays the user's current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak

- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards

The following **additional** features are implemented:

* [x] Cards have different visual styles based on category
* [x] The guess input and feedback reset when moving to a new card
* [x] The card can only be flipped after the user submits a guess
* [x] The guess form is styled in a clean single-line layout

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='public/walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **ScreenToGif**

## Notes

One challenge was managing multiple pieces of React state at the same time, including the current card, the shuffled deck, whether the answer is showing, the user's guess, feedback, and streak counters. Another challenge was making sure the shuffle feature updated the deck without directly mutating the original array.

## License

    Copyright 2026 Joseph Ghormley

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
