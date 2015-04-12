
//////// Create a new Card
// var card = new GreetingsFromSpace.Models.Card;
// console.log("Card is", card);

//////// Create a new collection of Cards
// this collection will immediately begin syncing data
// no call to fetch is required, and any calls to fetch will be ignored
var cards = new GreetingsFromSpace.Collections.cards();

cards.on('sync', function(collection) {
  console.log('collection is loaded', collection);
});

// Add a new card to this collection
// cards.add({
//   header: "Hi! Space!"
// });