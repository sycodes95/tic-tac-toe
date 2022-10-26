//Creates gameboard obj with gameboard array inside of it.
const gameBoardObj = (function() {
    let gameBoardArr = new Array(9).fill(0);
    return {gameBoardArr}
})();
console.log(gameBoardObj)

const playersObj = (player, weapon) => {
    return {player, weapon}
}
//Factory function

document.querySelector('.reset').addEventListener('click', ()=>{
    gameBoardObj.gameBoardArr = new Array(9).fill(0);
    let gameSlots = document.querySelectorAll('.gameSlots');
    gameSlots.forEach((e) => e.textContent = '')
    result.textContent = '';
    
})
    
    

const player1 = playersObj('player1', 'O');
const player2 = playersObj('player2', 'X')
//Create objects for both players and their weapon "X" or "O";



const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const result = document.querySelector('.result');


const displayController = (function() {
    let gameSlots = document.querySelector('.gameContainer');
    
    Array.from(gameSlots.children).forEach((slot, index) => {
        slot.addEventListener('click', () => {
            const isEveryZero = (item) => item === 0;
            

            let count = 0;
            gameBoardObj.gameBoardArr.forEach((item) => {
                
                if (item !== 0){
                    count++;
                    
                    return count;
                };
            });

            if (slot.textContent == '') {
                if (gameBoardObj.gameBoardArr.every(isEveryZero)){
                    slot.textContent = `${player1.weapon}`;
                    gameBoardObj.gameBoardArr.splice(index,1,player1);
        
                } else if (count % 2 == 0){
                    slot.textContent = `${player1.weapon}`
                    gameBoardObj.gameBoardArr.splice(index,1,player1);
                } else {
                    slot.textContent = `${player2.weapon}`
                    gameBoardObj.gameBoardArr.splice(index,1,player2);
                }
            } else {
                return;
            };

            winConditions.forEach((item, index) => {
                let player1Check = [];
                let player2Check = [];

                gameBoardObj.gameBoardArr.filter((e, i) => {
                    if (e == player1){
                        player1Check.push(i);
                    }
                    
                    return player1Check;
                })
                
                gameBoardObj.gameBoardArr.filter((e, i) => {
                    if (e == player2){
                        player2Check.push(i);
                    }
                    
                    return player2Check;
                })

                const result = document.querySelector('.result');



                if(item.every(e => player1Check.includes(e)) == true){
                    result.textContent = 'you win!'
                } else if (item.every(e => player2Check.includes(e)) == true){   result.textContent = 'you lose!'
                } else if (count == 8 && item.every(e => player1Check.includes(e)) !== true && item.every(e => player2Check.includes(e)) !== true ){
                    result.textContent = 'draw!'
                    count = 0;
                    
                    return count;
                    
                }
                    

                console.log(player1Check)
                console.log(item)

                
                
                
                
            })

            console.log(winConditions);

            /*
            
            */

            
        });

        
    })
})()





   
    



            
            

    

    
    

        
        



        



        
    




        

            
            
        
        








    

    

    












