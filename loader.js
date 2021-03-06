// ==UserScript==
// @name Citelet
// @include http://*
// @include https://*
// @include about:blank
// @require jquery-1.9.1.min.js
// @require cache-control.js
// ==/UserScript==

var THANKS_STYLE = "border:2px solid; border-radius:25px; position:fixed; right:0px; background-color:#08c; padding:5px; bottom:0px; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;";
var THANKS_FADEOUT = 1500;

var $ = window.$.noConflict(true); // Required for Opera and IE

// When document is loaded send a message to cache-control to send cached 
// Citelet javascript. Append script to page and execute
$(document).ready(function () {

  var msg = {};
  // To cache-control
  kango.dispatchMessage('GetScript', msg);

  // From cache-control, payload contains bookmarklet code
  kango.addMessageListener('SetScript', function(event) {
    // Attach code to page
    var script = document.createElement('script');
    script.innerHTML = event.data.src;
    script.async = false;
    document.body.appendChild(script);

    // Not ideal. .ready() calls too soon .load() doesnt run at all.
    setTimeout(function() {

      // If publisher is recognized, create and show thank you div
      if ($('#citeletPublisher').length) {
        $('<div></div>')
            .attr('id', 'citeletThanks')
            .attr('style', THANKS_STYLE)
            .text('Thank you for your contribution!')
            .appendTo('body')
            .delay(THANKS_FADEOUT)
            .fadeOut(); 
      }
    }, 1000); // Wait to check whether publisher was found

  }); // message listener
});
