// ==UserScript==
// @name Citelet
// @include http://*
// @include https://*
// @include about:blank
// @require jquery-1.9.1.min.js
// @require cache-control.js
// ==/UserScript==

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
    document.body.appendChild(script);
  });
});
