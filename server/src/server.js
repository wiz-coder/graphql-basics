import express from "express"
import morgan from "morgan"
import {graphqlHTTP} from "express-graphql"
import Schema from "./models/rootSchema"
const app = express()

app.use(morgan('dev'))

app.use('/gapp',graphqlHTTP({
    schema:Schema,
    graphiql:true
}))

app.use('/',(req,res)=>{
    res.send('Welcome to graphql')
})


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`server listening to ${PORT}`))
