// The titles on this database were compiled from Rolling Stone Magazine top 500 albums of all time.

var db = openDatabase('HDip', '1', 'HDip WebSQL Music Database', 2 * 1024 * 1024);


if (db) {
  db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS albums (id INTEGER AUTO_INCREMENT, album TEXT, artist TEXT)", []);
  });
}

addEvent(document.getElementById('goBtn'), 'click', addItem)

showAll();

function addItem() {

  var albumIn = document.getElementById('albumIn').value
  var artistIn = document.getElementById('artistIn').value

  console.log(albumIn, artistIn)

  db.transaction(function(tx) {
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', [albumIn, artistIn]);
  });

  albumIn, artistIn = ''; // Clean for the next run.
  showAll();
}




function showAll() {
  var albumList = document.getElementById('albumList');
  albumList.innerHTML = '';

  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM albums', [], function (tx, results) {
      var len = results.rows.length;

      if (len <= 0 ){loadDB()}


      var ul = document.createElement("ul");
      for (var i = 0; i < len; i++) {
        var item = results.rows.item(i);

        var li = document.createElement("li");
        var t = document.createTextNode(i + ") Album: " + item.album +
                                        " => Artist: " + item.artist);
        li.appendChild(t);
        ul.appendChild(li);
      }

      // Update the DOM only after we have ALL items in one element...
      albumList.appendChild(ul);
    }); // end of function
  }); // end of db.transaction
}  // end of function



function deleteItem(id, text) {
  if (confirm("Are you sure you want to Delete "+ text +"?")) {
    db.transaction(function(tx) {
      tx.executeSql('DELETE FROM tasks WHERE id=?', [id]);
    });
    showAll();
  }
}



function addEvent (obj, listener, handler) {
  if (obj){
    if (obj.addEventListener){
      obj.addEventListener(listener, handler, false);
      console.log("Added Event Listener to " + obj );
    }
    else if (obj.attachEvent){
      obj.attachEvent("on" + listener, handler);
      console.log("Attached Event - Old IE");
    }
  }
  else {
    console.error("Element " + obj + " not found"); 
  }
}



function loadDB() {

  db.transaction(function(tx) {
    
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Sgt. Pepper\'s Lonely Hearts Club Band', 'The Beatles']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Pet Sounds', 'The Beach Boys']); 
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Revolver', 'The Beatles']); 
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Highway 61 Revisited', 'Bob Dylan']); 
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Rubber Soul', 'The Beatles']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['What\'s Going On', 'Marvin Gaye']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Exile on Main Street', 'The Rolling Stones']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['London Calling', 'The Clash']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Blonde on Blonde', 'Bob Dylan']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Beatles ("The White Album")', 'The Beatles']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Sun Sessions', 'Elvis Presley']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Kind of Blue', 'Miles Davis']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Velvet Underground and Nico', 'The Velvet Underground']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Abbey Road', 'The Beatles']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Are You Experienced?', 'The Jimi Hendrix Experience']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Blood on the Tracks', 'Bob Dylan']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Nevermind', 'Nirvana']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Born to Run', 'Bruce Springsteen']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Astral Weeks', 'Van Morrison']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Thriller', 'Michael Jackson']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Great Twenty-Eight', 'Chuck Berry']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Plastic Ono Band', 'John Lennon']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Innervisions', 'Stevie Wonder']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Live at the Apollo (1963)', 'James Brown']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Rumours', 'Fleetwood Mac']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Joshua Tree', 'U2']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['King of the Delta Blues Singers, Vol. 1', 'Robert Johnson']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Who\'s Next', 'The Who']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Led Zeppelin', 'Led Zeppelin']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Blue', 'Joni Mitchell']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Bringing It All Back Home', 'Bob Dylan']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Let It Bleed', 'The Rolling Stones']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Ramones', 'Ramones']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Music From Big Pink', 'The Band']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Rise and Fall of Ziggy Stardust and the Spiders From Mars', 'David  Bowie']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Tapestry', 'Carole King']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Hotel California', 'The Eagles']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Anthology, 1947 - 1972', 'Muddy Waters']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Please Please Me', 'The Beatles']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Forever Changes', 'Love']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Never Mind the Bollocks, Here\'s the Sex Pistols', 'The Sex Pistols']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Doors', 'The Doors']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Dark Side of the Moon', 'Pink Floyd']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Horses', 'Patti Smith']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Band', 'The Band']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Legend', 'Bob Marley and the Wailers']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['A Love Supreme', 'John Coltrane']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['It Takes a Nation of Millions to Hold Us Back', 'Public Enemy']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['At Fillmore East', 'The Allman Brothers Band']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Here\'s Little Richard', 'Little Richard']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Bridge Over Troubled Waters', 'Simon and Garfunkel']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Greatest Hits', 'Al Green']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Birth of Soul: The Complete Atlantic Rhythm and Blues Recordings,  1952 - 1959', 'Ray Charles']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Electric Ladyland', 'The Jimi Hendrix Experience']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Elvis Presley', 'Elvis Presley']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Songs in the Key of Life', 'Stevie Wonder']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Beggars Banquet', 'The Rolling Stones']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Trout Mask Replica', 'Captain Beefheart and His Magic Band']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Meet the Beatles', 'The Beatles']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Greatest Hits', 'Sly and the Family Stone']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Appetite for Destruction', 'Guns n\' Roses']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Achtung Baby', 'U2']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Sticky Fingers', 'The Rolling Stones']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Phil Spector\, Back to Mono (1958 - 1969)', 'Various Artists']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Moondance', 'Van Morrison']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Led Zeppelin IV', 'Led Zeppelin']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Stranger','Billy Joel']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Off the Wall', 'Michael Jackson']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Superfly', 'Curtis Mayfield']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Physical Graffiti', 'Led Zeppelin']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['After the Gold Rush', 'Neil Young']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Purple Rain', 'Prince']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Back in Black', 'AC/DC']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Otis Blue', 'Otis Redding']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Led Zeppelin II', 'Led Zeppelin']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Imagine', 'John Lennon']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Clash', 'The Clash']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Harvest', 'Neil Young']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Star Time', 'James Brown']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Odessey and Oracle', 'The Zombies']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Graceland', 'Paul Simon']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Axis: Bold as Love', 'The Jimi Hendrix Experience']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['I Never Loved a Man the Way I Love You', 'Aretha Franklin']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Lady Soul', 'Aretha Franklin']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Born in the U.S.A.', 'Bruce Springsteen']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Let It Be', 'The Beatles']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Wall', 'Pink Floyd']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['At Folsom Prison', 'Johnny Cash']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Dusty in Memphis', 'Dusty Springfield']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Talking Book', 'Stevie Wonder']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Goodbye Yellow Brick Road', 'Elton John']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['20 Golden Greats', 'Buddy Holly']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Sign \'o\' the Times', 'Prince']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Bitches Brew', 'Miles Davis']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Green River', 'Creedence Clearwater Revival']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['Tommy', 'The Who']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['The Freewheelin Bob Dylan', 'Bob Dylan']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['This Year\'s Model', 'Elvis Costello']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['There\'s a Riot Goin\' On', 'Sly and the Family Stone']);
    tx.executeSql('INSERT INTO albums (album, artist) values (?, ?)', ['In the Wee Small Hours', 'Frank Sinatra']);
    
  
  });

  showAll();

}



