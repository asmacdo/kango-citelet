// Source for minified javascript file.
var CITELET_SRC = "http://162.243.115.205/citelet/static/js/citelet.min.js";

// Checks on browser load or once per day that the most current version of the 
// Citelet bookmarklet code is cached to the kango storage "citeletCache".

function ensureNewestVersion() {

  var nowTime = new Date().getTime();
  var cacheTime = kango.storage.getItem('citeletTimeStamp');

  // If files are not cached or cached file are more than a day old,
  // cache a fresh version from the server.
  if((nowTime - 86400000 > cacheTime) ||
    !kango.storage.getItem('citeletTimeStamp') ||
    isNaN(kango.storage.getItem('citeletTimeStamp')) ||
    !kango.storage.getItem('citeletCache'))  {

    console.log("Checking server for latest version of Citelet");

    // Get a fresh file from CITELET_SRC and save to local storage
    var request = kango.xhr.getXMLHttpRequest();
    request.open('GET', CITELET_SRC, false);
    request.send(null);

    if (request.status == 200) {
      kango.storage.setItem('citeletCache', request.responseText);
      kango.storage.setItem('citeletTimeStamp', nowTime);
    }

  } // Does not need a new file, no change needed.
}


// Wait for loader to ask for current script, then send.
kango.addMessageListener('GetScript', function(msg) {
  ensureNewestVersion();
  msg.source.dispatchMessage('SetScript', {src: kango.storage.getItem('citeletCache')});
});
