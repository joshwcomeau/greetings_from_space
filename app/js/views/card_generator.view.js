GreetingsFromSpace.Views.cardGenerator = Backbone.View.extend({
  el: "#content",
  initialize: function() {
    this.render();
  },
  render: function() {
    var template;

    // Get our photo of the day
    $.ajax({
      url: '/api/nasa', 
      dataType: 'json',
      success: function(rawNasaData) {
        var nasaData = JSON.parse(rawNasaData);

        $.get( '/templates/card_generator.template.html', function(templateData) {
          template = _.template(templateData, { photoUrl: nasaData.url });
          this.$el.html(template);
        }.bind(this), 'html');

      }.bind(this)
    });

    
  }
});