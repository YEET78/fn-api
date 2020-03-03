const express = require("express");
const app = express();
var fs = require("fs")
var cors = require('cors')
var Playlist = require('./Playlist/Playlist.js');
var Character = require('./Characters/Characters.js');
var Banner = require("./Banner/Banner.js")
var Emotes = require("./Emotes/Emotes.js");
var Backpack = require("./Backpacks/Backpacks.js");


app.use(cors())

app.get("/Help", function(request, response) {
  response.send(`
<html dir="ltr" lang="en" class="offline">
  <style>
      body {
          background-color: black;
          color: whitesmoke;
          text-align: center;
          font-size: 20px;
      }
      h1 {
          color: red;
          text-align: center;
          font-size: 60px;
      }
      span{
          color: whitesmoke;
          text-align: center;
          font-size: 20px;
      }
      button{
          color: blue;
          border: solid;
          text-align: center;
          font-size: 20px;
      }
      input{
          color: blue;
          border: solid;
          text-align: center;
          font-size: 20px;
      }
  </style>   
      <h1 jstcache="0">
          Help Page
      </h1>
      <body>
      <span jsselect="body" jsvalues=Submit">
      Type The Cosmetic Name In The Box And Then Click The Submit Button
      <br>
      <br>
      Redirects:
      <br>
      <div id="buttons" class="nav-wrapper suggested-left" jstcache="0">
          <button id="details-button" onclick="window.location.href= '/'" jstcache="3">Welcome Page</button><br>
      <br>
          <button id="details-button" onclick="window.location.href= '/Help'" jstcache="3">Help Page (This Page)</button><br>
      <br>
          <button id="details-button" onclick="window.location.href= '/VariantChannelNames'" jstcache="3">VariantChannelNames</button><br>
      <br>
          <button id="details-button" onclick="window.location.href= '/VariantChannelNamesList'" jstcache="3">VariantChannelNamesList</button><br>
      <br>
          <button id="details-button" onclick="window.location.href= '/VariantChannels'" jstcache="3">VariantChannels</button><br>
      <br>
      Playlist Help:
      <br>
          <button id="details-button" onclick="window.location.href= '/Playlist'" jstcache="3">Playlist Help</button><br>
      <br>
      Cosmetic Help:
      <br>
          <button id="details-button" onclick="window.location.href= '/Cosmetic'" jstcache="3">Cosmetic Help</button><br>
      <br>
      Playlist Request:
      <br>
      <form action="/Playlist?subgame=">
          Playlist Sub Game Name: <input type="text" name="subgame">
          <input type="submit" value="Submit">
      </form>
      Cosmetic Requests:
      <form action="/Cosmetic?banner=">
          Banner Name: <input type="text" name="banner">
          <input type="submit" value="Submit">

      </form>
      <br>
      <form action="/Cosmetic?skin=">
          Skin Name: <input type="text" name="skin">
          <input type="submit" value="Submit">
      </form>
      <br>
      <form action="/Cosmetic?emote=">
          Emote Name: <input type="text" name="emote">
          <input type="submit" value="Submit">
      </form>
      <br>
      <form action="/Cosmetic?backpack=">
          Backpack Name: <input type="text" name="backpack">
          <input type="submit" value="Submit">
      </form>
      <br>
      News - Not Up To Date
      <br>
          <button id="details-button" onclick="window.location.href= '/News'" jstcache="3">News</button><br>
      <br>
      Leaked - Not Up To Date
      <br>
          <button id="details-button" onclick="window.location.href= '/Leaked'" jstcache="3">Leaked</button><br>
      <br>
          Or You Can Manually Type In The URL, e.g HOSTNAME/Cosmetic?Skin=SKINNAME<br>
      <br>
      </span>   
  </body>
</html>`)
})
app.get("/", function(request, response) {
  response.send(`
<html dir="ltr" lang="en" class="offline"> 
  <style>
      body {
          background-color: black;
          color: whitesmoke;
          text-align: center;
          font-size: 20px;
      }
      h1 {
          color: red;
          text-align: center;
          font-size: 80px;
      }
      button{
          color: whitesmoke;
          border: solid;
          border-color: blue;
          background-color: blue;
          font-size: 70px;
          position: absolute;
          bottom: 80px;
          right: 80px;
          
      }
      text{
          color: whitesmoke;
          position: absolute;
          bottom: 80px;
          left: 20px;
      }
      .tooltip {
          display: inline-block;
      }

      /* Tooltip text */
      .tooltip .tooltiptext {
          visibility: hidden;
          width: 120px;
          background-color: blue;
          color: #fff;
          text-align: center;
          font-size: 15px;
          border-radius: 6px;
          padding: 5px 0;
            /*Position the tooltip */
          position: absolute;
          z-index: 1;
          bottom: 170px;
          right: 7.7%; 
      }

      /* Show the tooltip text when you mouse over the tooltip container */
      .tooltip:hover .tooltiptext {
          visibility: visible;
      }
  </style>   
      <h1 jstcache="0">
          Welcome
      </h1>
      <body>
          API Created By Jawschamp, Intergrated into the bot by DANG1172, edited by DANG1172
          <br>
          <br>
          All Credit To Jawschamp For The API, Credit To DANG1172 For The HTML And CSS Used And The Time And Work Put Into Making The Website Look Good
          <div class="tooltip">
              <button id="details-button" onclick="window.location.href= '/Help'" jstcache="3">Help</button>
              <span class="tooltiptext">This Button Takes You To The Help Page</span>
          </div>
      </body>
      <text>
          Note This API Was Made For The Fortnite Lobby Bot <br>
          We Are In No Way Responsible For Any Misuse Of These Bots <br>
          This Comment Is Due To The Recent Violation Of People Crashing Lobbies With The Bot,<br>
          Please Note This Is A Bannable Offence.
      </text>
</html>
`)
  
});

app.get("/VariantChannelNames", function(request, response) {
  response.sendFile("./Variants/VariantChannelNames.json", { root: '.' })
});

app.get("/VariantChannelNamesList", function(request, response) {
  response.sendFile("./Variants/VariantChannelNamesList.json", { root: '.' })
});

app.get("/VariantChannels", function(request, response) {
  response.sendFile("./Variants/channel.json", { root: '.' })
});

app.get("/Playlist", function(request, response) {
  Query = request.query;


  if (Query["subgame"] != null) {
    // PlaylistName = request.query.name.toString().toUpperCase();
    // PlaylistName,
    response.send(Playlist.getPlaylistName(Query["subgame"].toString().toUpperCase()));
  }
  else {
    // PlaylistName = request.query.name.toString().toUpperCase();
    // PlaylistName
    response.send(`
<html dir="ltr" lang="en" class="offline">  
    <style>
        body {
            background-color: black;
            text-align: center;
            font-size: 20px;
        }
        h1 {
            color: red;
            text-align: center;
            font-size: 60px;
        }
        span{
            color: whitesmoke;
            text-align: center;
            font-size: 20px;
        }
        button{
            color: blue;
            border: solid;
            text-align: center;
            font-size: 20px;
        }
    </style>    
        <h1 jstcache="0">
            Playlist Help Page
        </h1>
        <body>
            <span jsselect="body" jsvalues=".innerHTML:msg" jstcache="10">Type a Playlist name in the box (or URL using a query) <br> URL Example: ?subame=Playlist Name.</span>
            <div id="buttons" class="nav-wrapper suggested-left" jstcache="0">
                <button id="details-button" onclick="window.location.href= 'Help'" jstcache="3">Back</button>
            </div>
        </body>
</html>`);
  }

});

app.get("/CosmeticImage", function(request, response) {
  Query = request.query;
  if (Query["skin"] != null) {
    response.statuscode = 200
    response.write(Character.getImage(Query["skin"]))
    response.end()
  }
})

app.get("/Cosmetic", function(request, response) {
  Query = request.query;
  if (Query["Discordbotreq"] != null) {
    response.send(Character.getSkin(Query["Discordbotreq"]))
  } else
  if (Query["banner"] != null) {
    response.send(Banner.getBanner(Query["banner"].toString().toUpperCase()))
  } else
  if (Query["skin"] != null) {
    response.statusCode = 200
    response.send(`
<html dir="ltr" lang="en" class="offline">  
    <style>
        body {
            background-color: black;
            text-align: center;
            font-size: 20px;
        }
        h1 {
            color: red;
            text-align: center;
            font-size: 60px;
        }
        span{
            color: whitesmoke;
            text-align: center;
            font-size: 20px;
        }
        button{
            color: blue;
            border: solid;
            text-align: center;
            font-size: 20px;
        }
        image{

        }
    </style>    
        <h1 jstcache="0">
            Cosmetic ${Query["skin"]}
        </h1>
        <body>
          <span jsselect="body" jsvalues=".innerHTML:msg" jstcache="10">${Character.getSkin(Query["skin"])}</br><img src="/CosmeticImage?skin=${Query["skin"]}" alt="IMAGE NOT FOUND" width="100" height="100"></span>
          <div id="buttons"  jstcache="0">
              <button  style = "position:fixed id="details-button" onclick="window.location.href= 'Back'" jstcache="3">Back</button>
          </div>
        </body>
        
</html>`)
    response.end()
  } else
  if (Query["emote"] != null) {
    response.send(Emotes.getEmote(Query["emote"].toString().toUpperCase()))
  } else

  if (Query["backpack"] != null) {
    response.send(Backpack.getBackpack(Query["backpack"].toString().toUpperCase()))
  }

  else {
    response.send(`
      <html dir="ltr" lang="en" class="offline">    
        <style>
            body {
                background-color: black;
                text-align: center;
                font-size: 20px;
            }
            h1 {
                color: red;
                text-align: center;
                font-size: 60px;
            }
            span{
                color: whitesmoke;
                text-align: center;
                font-size: 20px;
            }
            button{
                color: blue;
                border: solid;
                text-align: center;
                font-size: 20px;
            }
        </style>   
            <h1 jstcache="0">
                Cosmetic Help Page
            </h1>
            <body>
                <span jsselect="body" jsvalues=".innerHTML:msg" jstcache="10">Type a cosmetic name in the boxes (or URL using a query) <br> URL Example: ?skin=SKIN NAME, ?emote=EMOTE NAME  etc.</span>
                <div id="buttons" class="nav-wrapper suggested-left" jstcache="0">
                    <button id="details-button" onclick="window.location.href= 'Help'" jstcache="3">Back</button>
                </div>
            </body>
      </html>`)
  }
});

app.get("/News", function(request, response) {
  let CharacterJson = JSON.parse(fs.readFileSync('Characters/Leaked.json'));
  response.send(CharacterJson)
});

app.get("/Leaked", function(request, response) {
  let CharacterJson = JSON.parse(fs.readFileSync('Characters/Leaked.json'));
  response.send(CharacterJson)
});

var PORT = 9988

const listener = app.listen(PORT);


console.log(`API Online At Host :${PORT}`)