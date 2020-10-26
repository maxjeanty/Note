const express = require("express");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


var PORT = process.env.PORT || 3001;

app.listen(PORT, function(){

});