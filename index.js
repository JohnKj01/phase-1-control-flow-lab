var distance = n
function scuberGreetingForFeet(n) {
  let result
  if (n <= 400){
    result="gives customers a free sample if the ride is less than or equal to 400 feet"
    return "This one is on me!";}
    else if (2000 < n < 2500){
      result="charges 30 dollars for a distance over 2000 feet"
      return 'I will gladly take your thirty bucks.';}
      else {
        result="does not allow rides over 2500 feet"
        return 'Scuber does not allow rides over 2500 feet No can do.';}
  // Write your code here!
}
function ternaryCheckCity(city) {
  if (city = "NYC") {
    return 'Ok, sounds good.';
  }
  else if (city !== NYC) {
    return "No go.";
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip) {
  if (tip = "generous") {
    return "Thank you so much."}
    else if (tip = "not generous") {
      return "Thank you so much.";}
        else {return "Bye"}

  // Write your code here!
}
