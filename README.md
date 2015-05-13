# agario_mmap

## overview

written in **CoffeeScript** (+ **Python** for build), <br>
this is a small project that shows <br>
how to execute your own client-side code with http://agar.io in browser.

demo: http://i.imgur.com/FSuoDV6.gif

there are: working minimap; an option to write custom onscrean console and bot.

## installation

1. git clone this project
2. create new python 2.7 virtualenv (preferably by using **virtualenvwrapper**)
3. ```pip install -r requirements.txt```
4. create **settings.json** in project dir, example of such:
   
```json
{
       "url": "ws://45.33.103.22:443",
       "nickname": "desired_nickname",
       "region": "Russia",
       "show_mass": "true"
}
```

## build & usage

okay that's a bit tricky, was too lazy to found more human way to do it. =)

1. run **build.py**.<br>
(it will build all the project code together and will copy the resulted js to your clipboard.)
2. open http://agar.io in chrome (probably should work with ff fine too).
3. open devtools ( **F12** ) > **Sources** > **main_out.js** > format it out (there's a button ```{}```)
4. make a breakpoint, line 500 (or at another one, doesn't actually matter much).
5. make sure you stopped at breakpoint.
6. insert (ctrl-v) your code to devtools console and press enter.<br>
It will be executed all the time with short interval (50 ms, look in run.coffee).<br>
(That's how we make sure our code can access client-js closure variables).
7. on devtools control panel: enable 'pass through breakpoints' button, then press 'run' button.
8. that's it, your client-side code executing in realtime.

**note** that because of the unreliable way we access<br>
the clients data (simply grabbing from closure on breakpoint),<br>
things can broke after another update, so you will need to debug it out and fix.


## special thx to

http://steamcommunity.com/id/m2828/,<br>
for making all that possible by creating wonderful game;
<br><br>
http://habrahabr.ru/users/vintage/,<br>
for showing me the way how to done all that.