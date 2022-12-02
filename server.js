
// Quand vous allez clonner le repo , svp de faire npm install suivit de npm start 
// pour installer les paquets 


const express = require('express')

const app = express()

const port = 4001
//njibou el router ely sna3neha ely tb3a el user collection 
const userRouter = require('./routes/user')


app.use(express.json())

app.use('/api/user',userRouter)



app.listen(port,(err)=>{
    err?console.log(err):console.log(`go to the port number ${port}`)
})