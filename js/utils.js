function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId)
  document.querySelector('#displayText').style.display = 'flex'
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Tie'
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
  }
}

let timer = 100
let timerId
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer

    //todo: mostrar GA si hay pasado X segundos sin actividad
    let currentDate = new Date().toISOString();
    let currentDateFormatted = new Date(currentDate);
    var lastDate = new Date(lastHitDateTime);
    var differenceMiliseconds = (currentDateFormatted - lastDate);
    console.log(differenceMiliseconds);
    if(differenceMiliseconds >= secondsToCallGA)
      {
        console.log("call GA");
        lastHitDateTime = new Date().toISOString();

        var elem = document.createElement("img");
        elem.setAttribute("id", "gabriel_urgente");
        document.getElementById("playerHealth").appendChild(elem);
        lastHitDateTime = new Date().toISOString();
      }
  }
  else {
    lastHitDateTime = null;    
  }

  if (timer === 0) {
	if(!gameEnd){
		gameEnd = true;
		determineWinner({ player, enemy, timerId });
		setInterval(RestartGame, 5000);
	}
  }
}

function RestartGame() {
	if (confirm("Restart Game?") == true) {
		window.location="index.html";
	}
}
