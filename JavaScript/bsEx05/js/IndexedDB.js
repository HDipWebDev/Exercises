// The titles on this database were compiled from Rolling Stone Magazine top 500 albums of all time.

$('document').ready(initJS);

var db;

function initJS(){

  setupIndexedDB();

  reflectCode();
}



function setupIndexedDB(){
  
  if (!window.indexedDB) {
      window.alert("IndexedDB support not implemented in your browser..");
  }

  var request = window.indexedDB.open("HDipTestDatabase", 2);

  request.onerror = function (event) {
    console.log("IndexedDB Error :", event.target.errorCode)
  }

  request.onsuccess = function(event){
    console.log('Woo-hoo; it\'s Alive! ');
    db = event.target.result;

  }

  request.onupgradeneeded = function (event) {
    console.log('Upgrading Database');

    var objectStore = db.createObjectStore('movies', {keyPath: 'IMDBKey'});


  }

}




function reflectCode(){
  $.get('js/IndexedDB.js', function(data) {
     $('#codeExample').text(data);
  }, 'text');
}