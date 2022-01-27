const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')



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

bountyRouter.get('/', (req, res)=>{
    res.send(bounties)
})

bountyRouter.post('/', (req, res)=>{
        const newBounty = req.body;
        bounties.push(newBounty)
        res.send(`bounty has been posted ${newBounty.firstName}`)
    })


bountyRouter.delete('/bountyId', (req, res) =>{
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounties_id === bountyId)
    bounties.splice(bountyIndex, 1);
    res.send('Succesfully deleted a bounty');
    })
    
    
module.exports = bountyRouter;