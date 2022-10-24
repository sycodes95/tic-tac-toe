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
    
    

const player1 = playersObj('player1', 'O');
const player2 = playersObj('player2', 'X')
//Create objects for both players and their weapon "X" or "O";



const displayController = (function() {
    
    function oddOrEven (){
        gameBoardObj.gameBoardArr.forEach((item) => {
            let count = 0;
            if (item === 0){
                count++;
                return count;
            }
        })
    }


    
    const gs1 = document.querySelector('#gs1');
    const gs2 = document.querySelector('#gs2');




    gs1.addEventListener('click', () => {
        const isEveryZero = (item) => item === 0;
        

        

        if (gs1.textContent == '') {
            if (gameBoardObj.gameBoardArr.every(isEveryZero)){
                gs1.textContent = `${player1.weapon}`;
                gameBoardObj.gameBoardArr.splice(0,1,player1);
    
            } else if (oddOrEven() % 2 == 0){
                gs1.textContent = `${player1.weapon}`
                gameBoardObj.gameBoardArr.splice(0,1,player1);
            } else {
                gs1.textContent = `${player2.weapon}`
                gameBoardObj.gameBoardArr.splice(0,1,player2);
            }

        } else {
            return;
        }

        
    })
    
    gs2.addEventListener('click', () => {
        const isEveryZero = (item) => item === 0;
        


        if (gs2.textContent == ''){
            if (gameBoardObj.gameBoardArr.every(isEveryZero)){
                gs2.textContent = `${player1.weapon}`;
                gameBoardObj.gameBoardArr.splice(1,1,player1);
    
            } else if (oddOrEven() % 2 == 0){
                gs2.textContent = `${player1.weapon}`
                gameBoardObj.gameBoardArr.splice(1,1,player1);
            } else {
                gs2.textContent = `${player2.weapon}`
                gameBoardObj.gameBoardArr.splice(1,1,player2);
            }

        } else {
            return;
        }

        
        
    })




        

            
            
        
        
})()







/* function turns (){
    if (gameBoardObj.gameBoardArr == null){

    }
} */


    

    

    












