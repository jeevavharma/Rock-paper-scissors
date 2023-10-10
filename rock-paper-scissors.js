 // creating variable for score using object.
        // as per alogrithm we gonna create score after the results. 
        // const to let because we reassign the value
        let score =JSON.parse(localStorage.getItem
            ('score')) || {
                    wins: 0,
                    losses: 0,
                    tie: 0
            };
            // to get the item out of function we use this
            // now localstorage.getitem score is in string we need to change it to object.
            // we do tht because instead to resting the score to 0 every time. we just gonna use the score from local storage.
            // gonna remove console and paste the json parse in to constant.
            // null is a falsey value to check null we can change to !score for shortcut.
    
            /*if(!score){
                score = {
                    wins: 0,
                    losses: 0,
                    tie: 0
                }
            }*/
    
            updateScoreElement();        
    
            
            function playGame(playerMove){
                const computerMove = pickComputerMove();
                
                let result = '';
                if(playerMove === 'scissors'){
                    if(computerMove === 'rock'){
                        result = 'You lost.';
    
                    }else if(computerMove === 'paper'){
                        result = 'You win.';
                    }else if(computerMove === 'scissors'){
                        result = 'Tie.';
                    }
                }
               
                
                else if(playerMove === 'paper') {
                    if(computerMove === 'rock'){
                        result = 'You win.';
    
                    }else if(computerMove === 'paper'){
                        result = 'Tie.';
                    }else if(computerMove === 'scissors'){
                        result = 'You lost.';
                }
                }
               
    
                
                else if(playerMove === 'rock'){
                    if(computerMove === 'rock'){
                              result = 'Tie.';
                    }else if(computerMove === 'paper'){
                             result = 'You lose.';
                    }else if(computerMove === 'scissors'){
                            result = 'You win.';
                }
            }
            
                            if(result === 'You win.'){
                                score.wins += 1;
    
                            }else if (result === 'You lose.'){
                                score.losses += 1;
    
                            }else if(result ==='Tie.'){
                                score.tie += 1;
    
                            }
                            // setitem is method
                            // json stringify is used because local storage support string only so to convert to string we use that.
                            localStorage.setItem('score', JSON.stringify(score));
    
                           updateScoreElement();
    
                           document.querySelector('.js-result').innerHTML = result;
                           document.querySelector('.js-moves').innerHTML = `You <img src="./images/${playerMove}-emoji.png" class="move-icon"><img src="./images/${computerMove}-emoji.png" class="move-icon">Computer`;
                // this is for popup
                // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
                // wins: ${score.wins}, losses: ${score.losses}, tie: ${score.tie}`);
    
                
    
            }
    
            function updateScoreElement(){
                document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, tie: ${score.tie}`; 
            }
    
            function pickComputerMove(){
                const randomNumber = Math.random();
                let computerMove = '';
                
                if(randomNumber >= 0 && randomNumber < 1/3){
                    computerMove = 'rock';
                } else if(randomNumber >= 1/3 && randomNumber < 2/3){
                    computerMove = 'paper';
                } else if(randomNumber >= 2/3 && randomNumber < 1){
                    computerMove = 'scissors';
                }
    
                return computerMove;
            }