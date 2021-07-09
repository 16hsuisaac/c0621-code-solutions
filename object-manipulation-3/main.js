console.log('Lodash is loaded:', typeof _ !== 'undefined');

var player1 = { name: 'name1', hand: {} };
var player2 = { name: 'name2', hand: {} };
var player3 = { name: 'name3', hand: {} };
var player4 = { name: 'name4', hand: {} };
var playerArray = [player1, player2, player3, player4];

var deck = [];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var value = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

for (var i = 0; i < suit.length; i++) {
  for (var a = 0; a < rank.length; a++) {
    var card = { Suit: suit[i], Rank: rank[a], Value: value[a] };
    deck.push(card);
  }
}

/* shuffle */
function rng() {
  var num = Math.floor(Math.random() * 52);
  return num;
}
rng();

/* distribute cards */
for (var o = 0; o < playerArray.length; o++) {
  for (var u = 0; u < 2; u++) {
    playerArray[o].hand = deck[rng()];
  }
}
console.log(playerArray);
