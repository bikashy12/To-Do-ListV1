const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let items = ["Homework", "Assignment"];
let workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false})); // initialising body-parser for use
app.use(express.static("public"));

app.get("/", function(req, res){
  let day = date.getDate(); 
  res.render("list", {listTitle:day, item: items});
})

app.post("/", function(request, response){
  let toDoItem = request.body.newItem;
  console.log(request.body);
  if(request.body.list === "Work"){
    workItems.push(toDoItem);
    response.redirect("/work");
  }
  else{
    items.push(toDoItem);
    response.redirect("/"); // redirecting the user to the home page
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle:"Work List", item: workItems});
})

app.get("/about", function(req,res){
  res.render("about");
})

app.listen(3000, function(){
  console.log("Server started listening on 3000");
})
