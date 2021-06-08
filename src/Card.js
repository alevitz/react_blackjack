
function Card(props) {

let value = props.value;
let suit = props.suit;

let link = `https://deckofcardsapi.com/static/img/${value}${suit}.png`

  return (
    <div >
    <img src={link}></img>
    </div>
  );
}

export default Card;