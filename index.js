// Code your solutions in this file
for (let age=30; age<40; age++){
    console.log(`I am ${age} years old. Happy birthday to me`);
}


const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gift){
    for(i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);

    }
    return gifts;
}

wrapGifts(gifts);


function writeCards(names) {
    const thankYouMessages = []; 
    for (const name of names) {
      const message = `Thank you, ${name}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages; 
  }
  

function countDown(num){
  while (num>=0){
    console.log(num);
    num--;
  }
}
countDown()