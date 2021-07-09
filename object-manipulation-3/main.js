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
console.log(deck);
/* shuffle */
function rng() {
  var num = _.random(0, deck.length);
  return num;
}
var x = 0;

/* distribute cards and remove from deck */
for (var o = 0; o < playerArray.length; o++) {
  for (var u = 0; u < 2; u++) {
    x = rng();
    playerArray[o].hand.push(deck[x]);
    _.remove(deck, deck[x]);
    playerArray[o].score = playerArray[o].score + deck[x].Value;
    console.log(deck[x].Value);
    console.log(playerArray[o].score);
  }
}
console.log(playerArray);
console.log(deck);

/* find the winning player */
