/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, currentPlayer, gamePlaying, previousRoll;


beginningState();

document.querySelector('.btn-roll').addEventListener('click',function() {
    if (gamePlaying) {
        // 1. random number
        var dice = Math.floor(Math.random()*6) +1;
        var dice2 = Math.floor(Math.random()*6) +1;

        // 2. display the results 
        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM.src = 'dice-' + dice2 + '.png';

        //continue here
        // next steps: add both dice scores to the global score
        //apply rules to both dices
        

        // 3. update the round score IF the rolled number wasn't a 1
        if (dice === 6 && previousRoll === 6) {
            scores[currentPlayer] = 0; 
            document.getElementById('score-'+currentPlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            // add score
            roundScore+= dice;
            document.querySelector('#current-' + currentPlayer).textContent = roundScore; 
        } else {
            nextPlayer();

            }

            previousRoll = dice;
        }
     
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying) {
        // 1. add the current score to the global score
        scores[currentPlayer] += roundScore;

        // 2. update the UI
        document.querySelector('#score-'+currentPlayer).textContent = scores[currentPlayer];
        // 3. check if player won the game
        
        var winningPoints = document.querySelector('.maxPoints').value; 
        var winningScore;

        if (winningPoints) {
            winningScore = winningPoints;
        } else {
            winningScore = 100; 
        }
    

        if (scores[currentPlayer] >= winningScore)  {
            document.querySelector('#name-'+currentPlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+currentPlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+currentPlayer+'-panel').classList.remove('active');
            gamePlaying = false;    


        } else {
        // 4. change player
        nextPlayer();
        }
    }
        

}); 

document.querySelector('.btn-new').addEventListener('click', beginningState);

function nextPlayer() {
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}

function beginningState() {
    scores = [0,0];
    roundScore = 0;
    currentPlayer = 0; // 0 = first player, 1 = second player
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    gamePlaying = true; 

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  



}