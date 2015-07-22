import Ember from "ember";

export default Ember.Component.extend({
  tagName: "circle",
  classNames: ["ember-pie-chart__chart-circle"],
  value: 0,
  duration: 400,
  didInsertElement: function() {
    this.$().attr("r", "25%");
    this.$().attr("cx", "50%");
    this.$().attr("cy", "50%");
    this.$().attr("stroke-dasharray", "0 100");
    this.$().attr("stroke-dashoffset", "0");
    this.$().attr("stroke", this.get("color"));
  },
  didRender: function() {
    // animate the thing!
    if (this.animation) {
      clearInterval(this.animation);
    }

    var duration = this.get("duration");
    var iterations = Math.floor(this.get("duration") / 10);
    var currentValue = parseFloat(this.$().attr("stroke-dasharray").split(" ")[0]);
    var valueIncrement = (this.get("value") - currentValue) / iterations;
    var value = this.get("value");

    var i = 1;
    var _this =  this;
    this.animation = setInterval(function() {
      var newValue = Math.min(valueIncrement * i + currentValue, value);

      _this.$().attr("stroke-dasharray", newValue + " 100");
      if (_this.$().next()) {
        _this.$().next().attr("stroke-dashoffset", -newValue);
      }
      i++;
      if (i > iterations) {
        clearInterval(_this.animation);
      }
    }, 10);
  }
});
