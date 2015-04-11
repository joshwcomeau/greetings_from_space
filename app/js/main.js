var card = new GreetingsFromSpace.Models.Card;

// card.set('header', 'Happy Space Birthday!!!')

console.log("Card is", card);

console.log(GreetingsFromSpace.Collections);

// this collection will immediately begin syncing data
// no call to fetch is required, and any calls to fetch will be ignored
var cards = new GreetingsFromSpace.Collections.cards();

cards.on('sync', function(collection) {
  console.log('collection is loaded', collection);
});

cards.add({
  header: "Hi! Space!"
});