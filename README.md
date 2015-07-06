# Ember Pie Chart

This package provides a simple pie chart that uses SVG.
This work was inspired by a Lea Verou's talk called [The Missing Slice](https://www.youtube.com/watch?v=s4HdeJctq-A), where she demonstrated some alternatives to build pie charts and I felt particularly interested by the SVG solution.

It is usable, but it lacks some things (in order of importance?):

- [ ] Change base chart color (in case only one slice is provided)
- [ ] Cross browser test
- [ ] Animations
- [ ] Tests
- [ ] Hover labels
- [ ] Slice highlighting
- [ ] Slice removal by legend
- [ ] Fallback to canvas?
- [ ] Make a website with demo and options table

If you need a static simple pie chart that is lightweight, this one is awesome.

### Pre-requisites

This package assumes you're using at least Ember version 1.13, which introduces new hooks for components, and also that you're using Ember CLI.

### Installation

In order to install the addon, please use the following command:

```
ember install ember-pie-chart
```

### Usage

Easy peasy. On your templates, just use it as a normal component, like so:

```
{{pie-chart series=myData showLegend=true}}
```

You see here that you pass a `series` parameter, which is an array of objects, with the following properties:

- color: The color to be used on the slice and legend (if enabled)
- title: Title to show on legend and, on the future, on hovers
- value: The value in percentage of the slice

Also, it is possible to see that you can opt in to show or not the chart's legend, using the param `showLegend`, which is **false** by default.

## Changelog

##### Version 0.0.1

Initial version.
Has the ability to display static pie charts and update them.
