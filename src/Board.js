import Card from './Card';

function Board() {

  let card_value = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

  let suit = ["H","D","C","S"];

  let first_card_value;
  let first_card_suit;
  let second_card_value;
  let second_card_suit;

  while(true){
    first_card_value = (card_value[Math.floor(Math.random() * 13)]).toString();
    second_card_value = (card_value[Math.floor(Math.random() * 13)]).toString();

    first_card_suit = (suit[Math.floor(Math.random() * 4)]).toString();
    second_card_suit = (suit[Math.floor(Math.random() * 4)]).toString();

    if((first_card_value + first_card_suit) !== (second_card_value + second_card_suit))break;
  }

  
  

  return (
    <div >
    <Card card_value={first_card_value} card_suit={first_card_suit}/>    
    <Card card_value={second_card_value} card_suit={second_card_suit}/>    
    </div>
  );
}

export default Board;