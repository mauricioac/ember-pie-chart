import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["ember-pie-chart"],
  series: [],
  calculatedSeries: function() {
    var offset = 0;
    var series = this.get("series");
    var newSeries = [];
    console.log(series.length);

    for (var i = 0; i < series.length; i++) {
      newSeries.push({
        title: series[i].title,
        color: series[i].color,
        value: series[i].value,
        offset: offset
      });

      offset -= series[i].value;
    }

    return newSeries;
  }.property("series.@each.value"),
  showLegend: false
});
