let userMove = '';
    let result = '';
    const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    function pickComputerMove() {
      let computerMove = '';
      const randomNumber = Math.random();
      if (randomNumber < 1 / 3 && randomNumber >= 0) {
        computerMove = 'rock';
      }
      else if (randomNumber < 2 / 3 && randomNumber >= 1 / 3) {
        computerMove = 'paper';
      }
      else {
        computerMove = 'scissors';
      }
      return computerMove;
    }

    function checkResult(userMove, computerMove) {
      if (userMove === computerMove)
        result = 'tied';
      else if ((userMove == 'rock' && computerMove == 'scissors') || (userMove == 'paper' && computerMove == 'rock') || (userMove == 'scissors' && computerMove == 'paper'))
        result = 'won';
      else
        result = 'lost';
      return result;
    }

    function playGame(userMove) {
      computerMove = pickComputerMove();
      result = checkResult(userMove, computerMove);
      if (result === 'won') {
        score.wins++;
      }
      else if (result === 'lost') {
        score.losses++;
      }
      else if (result === 'tied')
        score.ties++;
      localStorage.setItem('score', JSON.stringify(score));
      displayMoves(userMove, computerMove);
      displayResult(result);
      updateScoreElement();
    }
    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML = `Score -> Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function displayResult(result) {
      document.querySelector(".js-result").innerHTML = `You ${result}!`;
    }

    function displayMoves(userMove, computerMove) {
      document.querySelector('.js-moves').innerHTML = `You <img src="${userMove}-emoji.png" class="js-game-img js-moves-img"> <img src="${computerMove}-emoji.png" class="js-game-img js-moves-img"> Computer`;
    }

    function resetScoreDisplay() {
      document.querySelector(".js-result").innerHTML = ``;
      document.querySelector('.js-moves').innerHTML = ``;

    }