var SPINNER_CLASS = 'spinner';
var spinnerOptions = {
  lines: 15, // The number of lines to draw
  length: 4, // The length of each line
  width: 4, // The line thickness
  radius: 14, // The radius of the inner circle
  corners: 0.1, // Corner roundness (0..1)
  rotate: 15, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1.1, // Rounds per second
  trail: 41, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: SPINNER_CLASS, // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};