---
title: "Host a Discord Bot online 24/7 for FREE!"
date: "2020-11-04"
---

Today I'll explain the **100% working method** to host a Discord bot online 24/7 for free.

First we have to upload our bot in repl.it, then we'll add a bg task in the bot and then we'll setup the uptime robot in a special way.

## 1. uploading your project on [repl.it](https://medium.com/r/?url=https%3A%2F%2Frepl.it)

- Create a new repl and select the language.

![repl.it](https://cdn-images-1.medium.com/max/800/1*JczKvkb6zEhFmQ7YrDcQqg.png)

- Upload your project simply by dragging & dropping it from your PC or by importing it from github… here is an example:

![example](https://cdn-images-1.medium.com/max/800/1*0sKyXF2dABIbqDD0fJDWqg.png)

- Now we have to add a background task in the bot, have to keep it alive because repl.it auto sleeps after few minutes.

- Now Im goin to tell you adding background tasks in two languages that are discord.js and discord.py

## 2. Adding a bg task and keeping the bot alive.

### (1) Keeping the bot alive & Adding BG tasks in a discord js v11 bot :

- To keep our bot alive we have to add the following code on the head of our js file.

![code](https://cdn-images-1.medium.com/max/800/1*qOJISI2acK5l6u9Ymz-y6Q.png)

- code :

```
var http = require('http');  

http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);
```

- As a bg task we will be adding an auto changing bot status feature in our bot.

![bot status](https://cdn-images-1.medium.com/max/800/1*JTDqhdhjYXPNhxV-eKYmDw.png)

- here is the sample code :

```py
bot.on('ready', () => {

  console.log('Your Bot is now Online.')
  let activities = [`chill gang`, `with the gang`, `with the gang`   ],i = 0;

  setInterval(() => bot.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"STREAMING",url:"https://www.youtube.com/watch?v=DWcJFNfaw9c"  }), 5000)

)}
```

## 2. Keeping the bot alive & Adding BG tasks in a discord.Py bot :

- After uploading your project in repl.it don't forget to install the python packages. by goin to packages option on the left side and searching python.

- To keep our bot alive we have to add the following code on the head of our py file.

![bot alive](https://cdn-images-1.medium.com/max/800/1*Dco0LdiojvGFhEnUf_frwA.png)

- code :

```py
from flask import Flask
from threading import Thread

app = Flask('')

@app.route('/')
def main():
  return "Your Bot Is Ready"

def run():
  app.run(host="0.0.0.0", port=8000)

def keep_alive():
  server = Thread(target=run)
  server.start()
```

- Adding a background task :

![bg task](https://cdn-images-1.medium.com/max/800/1*txLPy38FXtGQa0X7fawTdg.png)

- here is the sample code :

```py
status = cycle(['with Python','JetHub'])

@bot.event
async def on_ready():
  change_status.start()
  print("Your bot is ready")

@tasks.loop(seconds=10)
async def change_status():
  await bot.change_presence(activity=discord.Game(next(status)))
```

## 3. Setup the [Uptime Robot](https://medium.com/r/?url=https%3A%2F%2Fuptimerobot.com) :

- First create an account on uptime robot for free.

![uptimerobot](https://cdn-images-1.medium.com/max/800/1*i4lsl5yn_OrgJ9b0JhQ0dw.png)

- After creating an account, go to the dashboard and click on Add new monitor :

![monitor](https://cdn-images-1.medium.com/max/800/1*u5mz5gZBjONNNyGojoSWug.png)

- select monitor type Http(s) :

![http](https://cdn-images-1.medium.com/max/800/1*dAw9_wEcCTsRaQ5iBaGM3A.png)

- then go to to your project on repl.it and copy the url from the top of the console and paste it in url section of the monitor:

![link](https://cdn-images-1.medium.com/max/800/1*ibsVa1qYSHeOh9_xQ8RjcQ.png)

- now set the monitoring interval to every 5 mins (so that it will ping the bot every 5 mins) and click on create monitor twice :

![finish monitor](https://cdn-images-1.medium.com/max/800/1*-pue7Vm9fNbayWVIxmoW5g.png)

- That's it…Now go to your project on repl.it and hit the Run button :

![run button](https://cdn-images-1.medium.com/max/800/1*TFJU43alnxdiII5hJpjYUw.png)

**So this was the tutorial on :**

# How to keep your discord bot online 24/7 for FREE.

This method worked for me and my bot is also working fine :D

Hope you guys liked it and You're bot is now online….peace.
