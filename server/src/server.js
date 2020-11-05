import express from "express"
import morgan from "morgan"
import {graphqlHTTP} from "express-graphql"
import mongoose from "mongoose"
import "dotenv/config"
import cors from "cors"
import Schema from "./Schema/rootSchema"

const app = express()

//DB connection
mongoose.connect(process.env.DB_CONNECTION,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(result=>console.log('DB Connected')).catch(err=>console.log(err))

app.use(cors())
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
