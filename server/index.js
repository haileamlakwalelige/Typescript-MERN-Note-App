const express = require('express');
const cors = require("cors");


const app = express();


app.use(
    cors({
        origin:true,
    })
)

app.get('/', (req, res)=>{
    res.json({data:"hello"})
})


app.listen(3001, ()=>{
    console.log("Successfully Start The Server!");
})