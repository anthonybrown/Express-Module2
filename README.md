#Express
### what I found out
Express reminds me a lot of Sinatra. It is RESTful and simplistic.
It doesn't force any conventions on you and leaves things up to you as
far as MVC, for one it really doesn't have a controller, Express uses
Routes.

This is my documentation of Express and how to use it.

Use with 
  -    connect
  -    stylus
  -    ejs
  -    node


> That was suppose to be a list
> 
> Markdown I love you, but I need to learn your syntax better

Markdown is really much nicer to work with if you use moo.

Moo spits out the markup in almost real time.

So you can see exactly what you get.

##Nice ! 

** Anyways we always going to use markdown when we can! **

> Lets add a code block in markdown?

> this is an example of one of the express examples.

> tell me what you think is going on?

		var express = require('express');
      
      var app = express();

      app.configure( function () {
        app.use(express.logger('dev'));
        app.use(express.favicon());
        app.use(express.static(_dirname + '/public'));
      });
    
      app.listen(3000);







       
