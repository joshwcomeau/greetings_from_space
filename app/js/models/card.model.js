GreetingsFromSpace.Models.Card = Backbone.Model.extend({
  defaults: {
    photoUrl:     null,
    header:       null,
    content:      null,
    creatorId:    null,
    recipientId:  null
  },

  initialize: function() {
    console.log("initialized", this)
  }
});