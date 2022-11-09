import $ from 'jquery';

function alphaOnly(event) {
    var value = String.fromCharCode(event.which);
          var pattern = new RegExp(/[a-zA-Z]/i);
          return pattern.test(value);
  }
$('#inputFthrnme').bind('keypress', alphaOnly);



