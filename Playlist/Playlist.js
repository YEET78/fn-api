const fs = require('fs');
let PlaylistJson = JSON.parse(fs.readFileSync('Playlist/Playlist.json'));

exports.getPlaylistName = function(PlaylistName,Subgame=""){

  for(Playlist in PlaylistJson){
    Name = PlaylistJson[Playlist]["DisplayName"].toString().toUpperCase();
    PlayListName = PlaylistJson[Playlist]["PlaylistName"].toString().toUpperCase();
    if(Subgame == ""){
      if((Name == PlaylistName) || (PlayListName == PlaylistName)){
      return PlaylistJson[Playlist]["PlaylistName"]}
    }else{
      if(PlaylistJson[Playlist]["SubGame"] != null){
        let subgame = PlaylistJson[Playlist]["SubGame"].toString().toUpperCase();
if((Name == PlaylistName && subgame == Subgame) || (PlayListName == PlaylistName && subgame == Subgame)){
      return PlaylistJson[Playlist]["PlaylistName"]}
      }
      
    }
    
  }

  for(Playlist in PlaylistJson){
    Name = PlaylistJson[Playlist]["DisplayName"].toString().toUpperCase();
    PlayListName = PlaylistJson[Playlist]["PlaylistName"].toString().toUpperCase();
    if((Name.startsWith(PlaylistName)) || (PlayListName.startsWith(PlaylistName))){
      return PlaylistJson[Playlist]["PlaylistName"]
    }
  }

  return "Not Found!"
};