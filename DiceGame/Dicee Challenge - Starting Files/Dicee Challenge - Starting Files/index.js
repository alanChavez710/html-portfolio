
document.querySelector('h1').addEventListener('click', function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    var leftDiceImage = document.querySelector('.img1');
    var rightDiceImage = document.querySelector('.img2');
  
    leftDiceImage.setAttribute('src', './images/dice' + randomNumber1 + '.png');
    rightDiceImage.setAttribute('src', './images/dice' + randomNumber2 + '.png');

    var resultText = document.querySelector('h1');

  if (randomNumber1 > randomNumber2) {
    resultText.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    resultText.innerHTML = "Player 2 Wins! 🚩";
  } else {
    resultText.innerHTML = "It's a Draw!";
  }
  });
  