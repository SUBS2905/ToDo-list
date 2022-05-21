const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();
var Tasks = ['Buy Food','Cook Food','Eat Food'];
var WorkTasks = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    
    let day = date.getDate();
    res.render('list', {listTitle : day, task:Tasks});
});


app.post('/',(req,res)=>{
    let Task = req.body.task;
    if(req.body.list === "Work"){
        WorkTasks.push(Task);
        res.redirect('/work');
    } else{
        Tasks.push(Task);
        res.redirect('/');
    }
});

app.get('/work',(req,res)=>{
    res.render('list',{listTitle:"Work",task: WorkTasks});
});

app.listen(3000, ()=>{
    console.log('Server listening at PORT 3000');
    console.log('http://localhost:3000');
});