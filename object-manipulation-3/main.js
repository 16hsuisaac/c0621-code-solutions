console.log('Lodash is loaded:', typeof _ !== 'undefined');

var player1 = { name: 'name1', hand: [], score: 0 };
var player2 = { name: 'name2', hand: [], score: 0 };
var player3 = { name: 'name3', hand: [], score: 0 };
var player4 = { name: 'name4', hand: [], score: 0 };
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

function rng() {
  var num = _.random(0, (deck.length - 1));
  return num;
}
var x = 0;

for (var o = 0; o < playerArray.length; o++) {
  for (var u = 0; u < 2; u++) {
    x = rng();
    playerArray[o].hand.push(deck[x]);
    playerArray[o].score = playerArray[o].score + deck[x].Value;
    _.remove(deck, deck[x]);
  }
}

if (playerArray[0].score > playerArray[1].score) {
  var winner1 = playerArray[0];
} else {
  winner1 = playerArray[1];
}
if (playerArray[2].score > playerArray[3].score) {
  var winner2 = playerArray[2];
} else {
  winner2 = playerArray[3];
}
if (winner1.score > winner2.score) {
  var finalWinner = winner1;
} else {
  finalWinner = winner2;
}

console.log('The winning player is: ', finalWinner.name);
