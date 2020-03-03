const fs = require('fs');
let BackpackJson = JSON.parse(fs.readFileSync('Backpacks/Backpacks.json'));

exports.getBackpack = function(BackpackName){
  for(Backpack in BackpackJson){
    if (BackpackJson[Backpack]["DisplayName"] != null && BackpackJson[Backpack]["BID"] != null){
      Name = BackpackJson[Backpack]["DisplayName"].toString().toUpperCase();
    BID = BackpackJson[Backpack]["BID"].toString().toUpperCase();
    if((Name == BackpackName) || (BID == BackpackName)){
      return BackpackJson[Backpack]
    }
    }
  }

  for(Backpack in BackpackJson){
    if (BackpackJson[Backpack]["DisplayName"] != null && BackpackJson[Backpack]["BID"] != null){
    Name = BackpackJson[Backpack]["DisplayName"].toString().toUpperCase();
    BID = BackpackJson[Backpack]["BID"].toString().toUpperCase();
    if((Name.startsWith(BackpackName)) || (BID.startsWith(BackpackName))){
     return BackpackJson[Backpack]
    }
    }
  }
  
  return "Not Found!"
};
