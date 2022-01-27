const express = require('express');
const app = express()
const morgan = require('morgan')



//middleware
// bountyRouter.use(express.json())
app.use(morgan('dev'))
app.use("/bounties" , require("./routes/bountyRouter"))






//server listening/
app.listen(9000, ()=>{
    console.log('listening on port 9000')
})