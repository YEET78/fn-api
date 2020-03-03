const fs = require('fs');
let BannerJson = JSON.parse(fs.readFileSync('Banner/Banner.json'));

exports.getBanner = function(BannerName){
  for(Banner in BannerJson){
    Name = BannerJson[Banner]["Name"].toString().toUpperCase();
    if(Name == BannerName){
      return BannerJson[Banner]["Name"];
    }
  }

  for(Banner in BannerJson){
    Name = BannerJson[Banner]["Name"].toString().toUpperCase();
    if(Name.startsWith(BannerName)){
      return BannerJson[Banner]["Name"];
    }
  }

  for(Banner in BannerJson){
    UnofficiaName = BannerJson[Banner]["SmallImage"].toString().toUpperCase().split(".")[1];
    
    if(UnofficiaName.includes("T-BANNERS-ICONS-")){
      UnofficiaName = UnofficiaName.replace("T-BANNERS-ICONS-","")
    }
    if(UnofficiaName.includes("T-BANNER-ICONS-")){
      UnofficiaName = UnofficiaName.replace("T-BANNER-ICONS-","")
    }
    if(UnofficiaName.includes("-")){
      UnofficiaName = UnofficiaName.replace("-"," ")
    }

    if(UnofficiaName.startsWith(BannerName)){
      return BannerJson[Banner]["Name"];
    }
  }

  return "Not Found!"
};