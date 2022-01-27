const express = require('express');
const app = express()
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const morgan = require('morgan')

const bounties = [
    {
        'firstName': 'Spike',
        'lastName': 'unknown',
        'living': true,
        'bountyAmount': 5000,
        'type' : 'jedi',
        '_id' : uuidv4() 
    },
    {
        'firstName': 'Sage',
        'lastName': 'Wolfe',
        'living': true,
        'bountyAmount': 30000,
        'type' : 'sith',
        '_id' : uuidv4() 
    }
]

//middleware
bountyRouter.use(express.json())
app.use(morgan('dev'))

// get request 
bountyRouter.get('/bounties', (req, res)=>{
    res.send(bounties)
})

// post request 
bountyRouter.post('/bounties', (req, res)=>{
    const newBounty = req.body;
    bounties.push(newBounty)
    res.send(`bounty has been posted ${newBounty.firstName}`)
})

// delete request 

bountyRouter.delete('/bountyId', (req, res) =>{
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounties_id === bountyId)
    bounties.splice(bountyIndex, 1);
    res.send('Succesfully deleted a bounty');
})

//server listening/
app.listen(9000, ()=>{
    console.log('listening on port 9000')
})