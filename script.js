function rollDice() {
  const diceFaces = ['&#x2680;', '&#x2681;', '&#x2682;', '&#x2683;', '&#x2684;', '&#x2685;'];
  const random = Math.floor(Math.random() * 6);

  document.getElementById("dice").innerHTML = diceFaces[random];
  document.getElementById("result").textContent = "You rolled a " + (random + 1);
}
