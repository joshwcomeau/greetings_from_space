GreetingsFromSpace.Views.cardGenerator = Backbone.View.extend({
  el: "#content",
  initialize: function() {
    console.log("cardGenerator initialized")
    this.render();
  },
  render: function() {
    var template;

    console.log("Rendering content");
    console.log("This:", this);

    $.get( '/templates/card_generator.template.html', function(data) {
      console.log("Fetched ", data);
      template = _.template(data, { name: 'Josh' });
      this.$el.html(template);
    }.bind(this), 'html')
  }
});