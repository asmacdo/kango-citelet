// ==UserScript==
// @name Citelet
// @include http://*
// @include https://*
// @include about:blank
// @require jquery-1.9.1.min.js
// @require cache-control.js
// ==/UserScript==

var $ = window.$.noConflict(true); // Required for Opera and IE

var CITELET_JS_URL = 'http://162.243.115.205/citelet/static/js/citelet.min.js';

$(document).ready(function () {
    main();
});

function main() {
  var msg = {};
  kango.dispatchMessage('GetScript', msg);
  kango.addMessageListener('SetScript', function(event) {
    var script = document.createElement('script');
    script.innerHTML = event.data.src;
    document.body.appendChild(script);
  });
}
