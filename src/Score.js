

function Score(props) {

let first_value = props.first_val;
let second_value = props.second_val;

let score = 0;

  if(first_value === "0" || first_value === "J" || first_value === "Q" || first_value === "K"){
    score += 10;
  } else if(first_value === "A"){
    score += 11;
  } else {
    score += parseInt(first_value);
  }
  if(second_value === "0" || second_value === "J" || second_value === "Q" || second_value === "K"){
    score += 10;
  } else if(second_value === "A"){
    score += 11;
  } else {
    score += parseInt(second_value);
  }


  return (
    <div >
    <div>Score: {score}</div>
    {score === 21 ? <div>BLACK JACK!!!!!</div> : null}
    </div>
  )
}

export default Score;