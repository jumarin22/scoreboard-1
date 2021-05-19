function main() {
  let nameOne = document.querySelector('.team1 h2')
  let scoreOne = 0
  let showScoreOne = document.querySelector('.team1 h3')
  let nameTwo = document.querySelector('.team2 h2')
  let scoreTwo = 0
  let showScoreTwo = document.querySelector('.team2 h3')
  let winner = document.querySelector('p')

  const firstName = document
    .querySelector('.team1 input')
    .addEventListener('input', updateFirstName)

  function updateFirstName(event) {
    nameOne.textContent = event.target.value
  }

  const onePlus = document
    .querySelector('.team1 i.add.fas.fa-2x.fa-plus-circle')
    .addEventListener('click', increaseOneScore)

  function increaseOneScore() {
    if (scoreOne >= 0 && scoreOne < 21) {
      scoreOne++
    }
    showScoreOne.textContent = scoreOne
    checkWinner()
  }

  const oneMinus = document
    .querySelector('.team1 i.subtract.fas.fa-2x.fa-minus-circle')
    .addEventListener('click', decreaseOneScore)

  function decreaseOneScore() {
    const display = document.querySelector('.team1 h3')
    if (scoreOne > 0 && scoreOne <= 21) {
      scoreOne--
    }
    showScoreOne.textContent = scoreOne
    checkWinner()
  }

  const secondName = document
    .querySelector('.team2 input')
    .addEventListener('input', updateSecondName)

  function updateSecondName(event) {
    nameTwo.textContent = event.target.value
  }

  const twoPlus = document
    .querySelector('.team2 i.add.fas.fa-2x.fa-plus-circle')
    .addEventListener('click', increaseTwoScore)

  function increaseTwoScore() {
    const display = document.querySelector('.team2 h3')
    if (scoreTwo >= 0 && scoreTwo < 21) {
      scoreTwo++
    }
    showScoreTwo.textContent = scoreTwo
    checkWinner()
  }

  const twoMinus = document
    .querySelector('.team2 i.subtract.fas.fa-2x.fa-minus-circle')
    .addEventListener('click', decreaseTwoScore)

  function decreaseTwoScore() {
    const display = document.querySelector('.team2 h3')
    if (scoreTwo > 0 && scoreTwo <= 21) {
      scoreTwo--
    }
    showScoreTwo.textContent = scoreTwo
    checkWinner()
  }

  function checkWinner() {
    if (scoreOne == 21 && scoreTwo != 21) {
      winner.textContent = 'Team 1 wins!'
    } else if (scoreOne != 21 && scoreTwo == 21) {
      winner.textContent = 'Team 2 wins!'
    } else if (scoreOne == 21 && scoreTwo == 21) {
      winner.textContent = "It's a tie!"
    } else {
      winner.textContent = 'First team that scores 21 points wins'
    }
  }

  const reset = document
    .querySelector('button')
    .addEventListener('click', resetScores)

  function resetScores() {
    scoreOne = 0
    showScoreOne.textContent = scoreOne
    scoreTwo = 0
    showScoreTwo.textContent = scoreTwo
  }
}

document.addEventListener('DOMContentLoaded', main)
