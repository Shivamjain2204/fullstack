// const express = require('express')
import express from "express";
const app = express()
const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id:1,
            title:"1 joke",
            content:"This is 1 joke"
        },
        {
            id:2,
            title:"2 joke",
            content:"This is 2 joke"
        },
        {
            id:3,
            title:"3 joke",
            content:"This is 3 joke"
        },
        {
            id:4,
            title:"4 joke",
            content:"This is 4 joke"
        },
        {
            id:5,
            title:"5 joke",
            content:"This is 5 joke"
        }
    ];
    res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})