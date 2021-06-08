import Card from './Card';
import Score from './Score';

function Board() {

  let card_value = ["2","3","4","5","6","7","8","9","0","J","Q","K","A"];

  let suit = ["H","D","C","S"];

  let first_card_value;
  let first_card_suit;
  let second_card_value;
  let second_card_suit;

  while(true){
    first_card_value = card_value[Math.floor(Math.random() * 13)];
    second_card_value = card_value[Math.floor(Math.random() * 13)];

    first_card_suit = suit[Math.floor(Math.random() * 4)];
    second_card_suit = suit[Math.floor(Math.random() * 4)];

      if((first_card_value + first_card_suit) !== (second_card_value + second_card_suit))break;
  }

  // console.log(first_card_value);
  // console.log(second_card_value);


  // let score = 0;
  // console.log(score)

  // if(first_card_value === "0" || first_card_value === "J" || first_card_value === "Q" || first_card_value === "K"){
  //   score += 10;
  // } else if(first_card_value === "A"){
  //   score += 11;
  // } else {
  //   score += parseInt(first_card_value);
  // }

  // console.log(first_card_value)
  // console.log(score)

  return (
    <div >
    <Card value={first_card_value} suit={first_card_suit}/>    
    <Card value={second_card_value} suit={second_card_suit}/>
    <Score first_val={first_card_value} second_val={second_card_value}/>    
    </div>
  );
}

export default Board;