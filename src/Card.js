
import "./Card.css";

function Card(props) {

let value = props.value;
let suit = props.suit;

let link = `https://deckofcardsapi.com/static/img/${value}${suit}.png`

  return (
 
    <img className="Card" src={link}></img>

  );
}

export default Card;