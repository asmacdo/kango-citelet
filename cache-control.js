
var CITELET_SRC = "http://162.243.115.205/citelet/static/js/citelet.min.js";

function cacheNewFile(file) {
  var cacheTime = new Date().getTime(); 
  kango.storage.setItem('TimeStamp', cacheTime);
  kango.storage.setItem('cachedJS', file);
}

function getFile() {
  var nowTime= new Date().getTime();
  var cacheTime = kango.storage.getItem('TimeStamp');
  if (nowTime > cacheTime) {
    cacheNewFile("new cache"); 
  }
}

//cacheNewFile("old cache");
//getFile();

function ensureNewestVersion() {

  // If nothing is there###############################################.
  var nowTime = new Date().getTime();
  var cacheTime = kango.storage.getItem('TimeStamp');
  
  // Needs a new file
  if((nowTime - 100000 > cacheTime) || !(kango.storage.getItem('cachedJS') == undefined)) {
    var request = kango.xhr.getXMLHttpRequest();
    request.open('GET', CITELET_SRC, false);
    request.send(null);
    if (request.status == 200) {
      kango.storage.setItem('cachedJS', request.responseText);
      kango.storage.setItem('TimeStamp', nowTime);
    }
  } else {
    alert("did not need new JS");
  }
  //if(!kango.storage.getItem('cachedJS')) {  
  //  kango.storage.setItem('cachedJS', 'alert("hello")');// not alert!
  //  console.log("Nothing there yet");
  //  console.log(kango.storage.getItem('cachedJS')) 
  //  var nowTime= new Date().getTime();
  //  var cacheTime = kango.storage.getItem('TimeStamp');


  //} else {
  //  var nowTime = new Date().getTime();
  //  var cacheTime = kango.storage.getItem('TimeStamp');
  //  if (nowTime > cacheTime) {
  //    console.log("reset cache");

  //    var request = kango.xhr.getXMLHttpRequest();
  //    request.open('GET', CITELET_SRC, false);
  //    request.send(null);
  //    if (request.status == 200) {
  //      kango.storage.setItem('cachedJS', request.responseText);
  //      kango.storage.setItem('TimeStamp', nowTime);
  //    }
  //  }
  //}
}

kango.addMessageListener('GetScript', function(msg) {
  //Find age of cached scritpt
  //If too old, get new
  //gt
  ensureNewestVersion();
  msg.source.dispatchMessage('SetScript', {src: kango.storage.getItem('cachedJS')});
});
