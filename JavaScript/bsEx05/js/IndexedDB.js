// The titles on this database were compiled from Rolling Stone Magazine top 500 albums of all time.

$('document').ready(initJS);

var db;

function initJS(){

  setupIndexedDB();
  reflectCode();
}


function setupIndexedDB(){
  
  const todoTaskList = [
    { tasks: "Learn Doxygen", complete: 'in progress', date: "bill@company.com" },
    { tasks: "Unit Testing", complete: 'no', date: "bill@company.com" },  
    { tasks: "Fix Broken Code", complete: 'yes', date: "donna@home.org" }
  ];

  if (!window.indexedDB) {
      window.alert("IndexedDB support not implemented in your browser..");
  }

  var request = window.indexedDB.open("HDipTestDatabase", 1);

  request.onerror = function (event) {
    console.log("IndexedDB Error :", event.target.errorCode)
  }

  request.onsuccess = function(event){
    console.log('Woo-hoo; it\'s Alive! ');
    db = event.target.result;

  }

  request.onupgradeneeded = function (event) {
    console.log('Upgrading Database');
    var db = event.target.result;
    var objectStore = db.createObjectStore('todoList', {keyPath: 'date'});
    objectStore.createIndex('tasks', 'tasks', { unique: false });
    objectStore.createIndex('complete', 'complete', { unique: false });

    objectStore.transaction.oncomplete = function(event) {
      // Store values in the newly created objectStore.
      var objectStore = db.transaction('tasks', 'readwrite').objectStore('todoList');
      for (var i in tasks) {
        objectStore.add(todoTaskList[i]);
        console.log(todoTaskList[i])
      }
    };
  }
}




function reflectCode(){
  $.get('js/IndexedDB.js', function(data) {
     $('#codeExample').text(data);
  }, 'text');
}