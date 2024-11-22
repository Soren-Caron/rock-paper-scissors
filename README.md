# Rock-Paper-Scissors Game

A simple implementation of the classic **Rock-Paper-Scissors** game, where you can play against the computer. This project uses JavaScript to handle game logic and prompts for user interaction.

---

## Features

- **Random Computer Choices:** The computer randomly selects `rock`, `paper`, or `scissor`.
- **User Input:** You provide your choice via a prompt.
- **Winner Determination:** Each round compares your choice and the computer's to declare a winner, loser, or tie.
- **Score Tracking:** Tracks scores for both the player and the computer.

---

## How to Play

1. Clone or download this repository to your computer.
2. Open the `index.html` file in a modern browser.
3. When prompted, type one of the following options:
   - **Rock**
   - **Paper**
   - **Scissors**
4. The result of the round will be displayed via an alert box:
   - **Tie:** Both choices are the same.
   - **Win:** Your choice beats the computer's choice.
   - **Lose:** The computer's choice beats yours.
5. Keep playing and watch the scores update!

---

## Code Overview

### Functions

1. **`getComputerChoice()`**
   - Generates a random choice for the computer: `rock`, `paper`, or `scissor`.

2. **`getHumanChoice()`**
   - Prompts the user to enter their choice of `Rock`, `Paper`, or `Scissors`.

3. **`playRound(computerMove, humanMove)`**
   - Compares the player's choice and the computer's choice.
   - Determines the winner, loser, or tie.
   - Updates the scores accordingly.

### Variables

- **`computerPoints`**: Tracks the total points scored by the computer.
- **`playerPoints`**: Tracks the total points scored by the player.

---

## Example

Here’s how the game flow might look:

1. Prompt: _"Rock, Paper, or Scissors?"_
2. You input: _"Rock"_
3. Computer randomly selects: _"Paper"_
4. Result:
