import requests
import json
from io import BytesIO
from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw
import os
import textwrap
import time
import datetime
import textwrap

Black = 0, 0, 0
Blue = 77, 145, 182
Background = Image.open('FortniteMares.png', 'r').resize((2048, 1024), Image.ANTIALIAS)
Draw = ImageDraw.Draw(Background)

def News():
    response = requests.get("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game")
    data = json.loads(response.text)

    if (len(data["battleroyalenews"]["news"]["messages"]) == 1 and data["battleroyalenews"]["news"]["messages"][0]["image"] != "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battleroyalenews/v42/BR04_MOTD_Shield-1024x512-75eacc957ecc88e76693143b6256ba06159efb76.jpg") or (len(data["battleroyalenews"]["news"]["messages"]) == 2 and data["battleroyalenews"]["news"]["messages"][1]["image"] == "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battleroyalenews/v42/BR04_MOTD_Shield-1024x512-75eacc957ecc88e76693143b6256ba06159efb76.jpg"):
        News1(data)
        return
    else:
        News3()

def News3(data):
    i = 0
    x = 115

    #Setting the Fonts
    TitleFont = ImageFont.truetype('Burbank.ttf', 32)
    BodyFont = ImageFont.truetype('Burbank.ttf', 25)
    DateFont = ImageFont.truetype('Burbank.ttf', 45)
    DescriptionFont = ImageFont.truetype('BurbankSmall-Bold.otf', 22)
    NewsFont = ImageFont.truetype('Burbank.ttf', 175)

    #Draw Date,"NEWS"
    Date = datetime.datetime.now().strftime('%A %dth %B %Y')
    Draw.text(((Background.width - DateFont.getsize(Date)[0])/2, 50), Date,font=DateFont)
    Draw.text(((Background.width - NewsFont.getsize("NEWS")[0])/2, 150), "NEWS",font=NewsFont)

    for News in data["battleroyalenews"]["news"]["messages"]:
        y = 690
        if i > 3:
            break

        #Paste Image
        image = Image.open(BytesIO((requests.get(News["image"])).content))
        image = image.resize((512, 256), Image.ANTIALIAS)
        Draw.rectangle((x - 6, 370, x + 6 + image.width, 772), fill="white")
        Background.paste(image,(x,376))

        #Draw Title,Description
        Draw.text(((((image.width - TitleFont.getsize(News["title"])[0]) / 2) + x), 653), (News["title"]).upper(),Black, font=TitleFont)
        Descriptions = textwrap.wrap(News["body"], width=45)
        for Description in Descriptions:
            Draw.text((x + 15, y), Description,Blue, font=DescriptionFont)
            y += 25

        x += 580

        #Adspace
        if "adspace" in New:
            Left = Image.open('Left.png', 'r')
            Background.paste(Left,(xS,353),Left)

            Middle = Image.open('Middle.png', 'r')
            Middle = Middle.resize((TitleFont.getsize(New["adspace"])[0] -20, 64), Image.ANTIALIAS)
            Background.paste(Middle,(xS + Left.width,353),Middle)

            Right = Image.open('Right.png', 'r')
            Background.paste(Right,(xS + Left.width + Middle.width,353),Right)

            Draw.text((x - 24 + 30, 370), News["adspace"], font=TitleFont)
    Background.save("News.png")
    print("Saved Image as News.png")

def News1(data):
    #Setting the Fonts
    DateFont = ImageFont.truetype('Burbank.ttf', 45)
    TitleFont = ImageFont.truetype("Burbank.ttf", 60)
    DescriptionFont = ImageFont.truetype('BurbankSmall-Bold.otf', 40)

    #Get image
    r = requests.get(data["battleroyalenews"]["news"]["messages"][0]["image"])
    image = Image.open(BytesIO(r.content))

    #Paste image on Background
    image = image.resize((1024, 512), Image.ANTIALIAS)
    ImageX = int((Background.width - image.width) / 2)
    print(image.width)
    Draw.rectangle(((ImageX -6, 144), (1541, 924)), fill="white")
    Background.paste(image,(ImageX,150))

    #Draw Date,Title,Description
    Draw.text(((Background.width- (DateFont.getsize(datetime.datetime.now().strftime('%A %dth %B %Y')))[0])/2, 45), datetime.datetime.now().strftime('%A %dth %B %Y'),font=DateFont)
    Title = data["battleroyalenews"]["news"]["messages"][0]["title"]
    Draw.text(((Background.width - (TitleFont.getsize(Title)[0])) / 2, 672),Title.upper(),(0,0,0),font=TitleFont)
    y = 730
    print(DescriptionFont.getsize(data["battleroyalenews"]["news"]["messages"][0]["body"][:50])[0])
    Descriptions = textwrap.wrap(data["battleroyalenews"]["news"]["messages"][0]["body"], width=50)
    for Description in Descriptions:
        Draw.text((ImageX + 15, y), Description,Blue, font=DescriptionFont)
        y += 35

    Background.save("News.png")
    print("Saved Image as News.png")