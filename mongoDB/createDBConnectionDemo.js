var mongoose = require("mongoose");
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb1";

mongoose.connect(url, { useNewUrlParser: true }, function() {
  console.log("url", url);

  console.log("Database created!");
  //db.close();
});
