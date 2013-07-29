exports.index = function (req, res) {
  'use strict';
  res.send("<h1>Welcome to the <em>customer</em> index page!</h1>");
};

exports.contact = function (req, res) {
  'use strict';
  res.send('<h1>Welcome to customer contact page!</h1>');
};
