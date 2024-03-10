const express= require('express');
const app= express();
const path= require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('templates/index.ejs');
});

app.get('/skills', (req, res)=>{
    res.render('templates/skills.ejs');
})

app.get('/education', (req, res)=>{
    res.render('templates/ed.ejs');
});

app.get('/aboutme', (req, res)=>{
    res.render('templates/about.ejs');
})

app.listen(8080, ()=>{
    console.log("Server started successfully on port 8080");
})