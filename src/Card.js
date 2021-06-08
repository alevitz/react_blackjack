
function Card(props) {

let value = props.card_value;
let suit = props.card_suit;

let link = `https://deckofcardsapi.com/static/img/${value}${suit}.png`

  return (
    <div >
    <img src={link}></img>
    </div>
  );
}

export default Card;