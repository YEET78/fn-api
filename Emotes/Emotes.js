const fs = require('fs');
let EmoteJson = JSON.parse(fs.readFileSync('Emotes/Emotes.json'));

exports.getEmote = function(EmoteName){
  for(Emote in EmoteJson){
    if (EmoteJson[Emote]["DisplayName"] != null && EmoteJson[Emote]["EID"] != null){
      Name = EmoteJson[Emote]["DisplayName"].toString().toUpperCase();
    EID = EmoteJson[Emote]["EID"].toString().toUpperCase();
    if((Name == EmoteName) || (EID == EmoteName)){
      return EmoteJson[Emote]
    }
    }
  }

  for(Emote in EmoteJson){
    if (EmoteJson[Emote]["DisplayName"] != null && EmoteJson[Emote]["EID"] != null){
    Name = EmoteJson[Emote]["DisplayName"].toString().toUpperCase();
    EID = EmoteJson[Emote]["EID"].toString().toUpperCase();
    if((Name.startsWith(EmoteName)) || (EID.startsWith(EmoteName))){
     return EmoteJson[Emote]
    }
    }
  }
  
  return "Not Found!"
};
