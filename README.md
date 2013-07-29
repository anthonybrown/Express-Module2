#Express
### what I found out
Express reminds me a lot of Sinatra. It is RESTful and simplistic.
It doesn't force any conventions on you and leaves things up to you as
far as MVC, for one it really doesn't have a controller, Express uses
Routes.

This is my documentation of Express and how to use it.

##Nice ! 

> Lets add a code block in markdown?

> this is an example of one of the express examples.

> Not much going on just getting the inner working of Express

	 var express = require('express');
      
      var app = express();

      app.configure( function () {
        app.use(express.logger('dev'));
        app.use(express.favicon());
        app.use(express.static(_dirname + '/public'));
      });
    
      app.listen(3000);

