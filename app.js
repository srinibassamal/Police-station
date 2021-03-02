var express=require("express");
var app=express();
//var request=require("request");
//app.set("view engine","ejs");
var bodyParser=require("body-parser");

var station=[
{name: 'Srinibas Samal',address:'Dhenkanal',age:'21'},
{name: 'Devjyoti Pattanaik',address:'Bhubaneswar',age:'20'},
{name: 'Sandip Nayak',address:'Bhubaneswar',age:'22'}
];

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("Login");
});
app.get("/station",function(req,res){
	res.render("station");
});
app.get("/Register",function(req,res){
	res.render("Register");
});

app.listen(5000,function(){
	console.log("Police station server has started!");
});

