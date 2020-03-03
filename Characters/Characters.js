const fs = require('fs');

let CharacterJson = JSON.parse(fs.readFileSync('Characters/Characters.json'));

exports.getSkin = function(SkinName){
  for(Skin in CharacterJson){
    Name = CharacterJson[Skin].DisplayName.toString().toUpperCase();
    CID = CharacterJson[Skin].CID.toString();
    if((Name.startsWith(SkinName.toUpperCase())) || (CID.startsWith(SkinName))){
      return JSON.stringify(CharacterJson[Skin]).split(",").join("</br>")
    }
  }
  
  return "Not Found!"
};

exports.getImage = function(SkinName) {
  for(Skin in CharacterJson){
    Name = CharacterJson[Skin].DisplayName.toString().toUpperCase();
    CID = CharacterJson[Skin].CID.toString()
    if((Name.startsWith(SkinName.toUpperCase())) || (CID.startsWith(SkinName))){
      return fs.readFileSync(`Images/${CID}.png`)
    }
  }
  return fs.readFileSync(`Images/CID_tbd_athena_commando_M_nutcracker_cine.png`)
}