// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const templatePath = path.join(__dirname,'/templates');
const collection = require("./mongodb");

app.use(express.json())
app.set('view engine', 'hbs')
app.set('views',templatePath)

app.get("/",(req,res)=>{
    res.render('login')
})

app.get("/signup",(req,res)=>{
  res.render('signup')
})

app.post("/signup", async(req,res)=>{
  const data={
    name:req.body.name,
    password:req.body.password
  }

  await collection.insertMany([data])

  res.render("home")

});

app.listen(3000, ()=>{
  console.log('port connected');
})