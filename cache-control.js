// Source for minified javascript file.
var CITELET_SRC = "http://162.243.115.205/citelet/static/js/citelet.min.js";

/*
/ Caches a file and 
/ @param file the script to be cached 
*/
function cacheNewFile(file) {
  var cacheTime = new Date().getTime(); 
  kango.storage.setItem('citeletTimeStamp', cacheTime);
  kango.storage.setItem('citeletCache', file);
}

function ensureNewestVersion() {

  var nowTime = new Date().getTime();
  var cacheTime = kango.storage.getItem('citeletTimeStamp');

  // If file is not cached or cached file is more than a day old,
  // cache a fresh version from the server.
  if((nowTime - 86400000 > cacheTime) ||
    (kango.storage.getItem('citeletCache') == undefined)) {
    console.log("Checking to see if this is latest version of citelet");
    // Get a fresh file from CITELET_SRC and save to local storage
    var request = kango.xhr.getXMLHttpRequest();
    request.open('GET', CITELET_SRC, false);
    request.send(null);
    if (request.status == 200) {
      kango.storage.setItem('citeletCache', request.responseText);
      kango.storage.setItem('citeletTimeStamp', nowTime);
    }

  // Does not need a new file
  } 
}

kango.addMessageListener('GetScript', function(msg) {
  //Find age of cached scritpt
  //If too old, get new
  ensureNewestVersion();
  msg.source.dispatchMessage('SetScript', {src: kango.storage.getItem('citeletCache')});
});
