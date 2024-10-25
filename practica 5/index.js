let cards=[]
let sum = 0
let hasBlackJack = false
let isalive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let startGameEL=document.getElementById("startGame")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("playerEL")
let staybutton= document.getElementById("stay")
// 2. Store the sum paragraph in a variable called sumEl
let player={
    name:prompt("Ingresa tu nombre:"),
    chips:0
}
playerEl.textContent=player.name +" "+"$ "+player.chips
function getrandomcard(){
    let randonumber=Math.floor( Math.random()*13 ) + 1
    if(randonumber===1){
        return 11
    }
    // if 11-13 -> return 10
    else if(randonumber>10){
        return 10
    }
    else{
        return randonumber
    }
}
function startGame(){
    isalive = true
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    // 3. Render the sum on the page using this format -> "Sum: 14"
   
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        if(sum<=20 && sum>=18){
        }
       
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        player.chips=player.chips+5;
        playerEl.textContent=player.name +" "+"$ "+player.chips
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isalive = false
    }
    messageEl.textContent=message
    cardsEl.textContent="CARDS: "
    for(i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="SUM: " + sum
}
function newcard(){
    if(isalive===true && hasBlackJack ===false){
        let thirdcard=getrandomcard()
        sum=+sum+thirdcard ;
        cards.push(thirdcard)
        for(i=0;i<cards.length;i++){
            cardsEl.textContent+=cards[i]+" "
        }
        renderGame();
    }
}

