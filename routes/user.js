//*************************************Collection 1 User  */
//routes mte3na el kolla ely mrboutin juste bil user khw 

const express = require('express');


const userRouter = express.Router();

const { v4: uuidv4 } = require('uuid');

let usersList = require('../data')

// ici c'est pour la lecture de data 

userRouter.get('/',(req,res)=>{
  res.send(usersList)  
})




//ici c'est pour l'ajout d'element 
userRouter.post('/',(req,res)=>{
    const newUser={
       ...req.body , id:uuidv4()
    }
if(!newUser.name){
    return res.status(400).json({msqg:"enter your name please"})
}else if (!newUser.email){
    return res.status(400).json({msg:"enter your email please "})
}
    usersList.push(newUser)
    res.json({ msg :"user added" , usersList ,newUser     })
})

//path update 

userRouter.put('/update/:id',(req,res)=>{
    try{
const {id} = req.params.id
const data = usersList.find((el)=> el.id == id)

const newUser={
    ...data,
    ...req.body
}

res.json({msg:'test upda    te',newUser,usersList})

    }catch(err){
        console.log(err)
        res.json({msg:'msg erreur'})
    }
})


//path delet user 

userRouter.delete('/delet/:id',(req,res)=>{
    try{
const {id} = req.params.id

const data = usersList.filter((el)=>el.id !==id)
res.json({msg:'test msg user my data data ', usersList})



    }catch(err){
        console.log(err)
        res.json({msg:'msg erreur'})
    }
})


module.exports = userRouter;




