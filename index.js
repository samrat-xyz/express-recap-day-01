const express = require("express")
const port = process.env.PORT || 3030

const app = express();

app.get('/', (req,res)=>{
    res.send('express-recap-01-basics server successfully running......')
})

app.listen(port,()=>{
    console.log(`Express server running on port : ${port}`)
})