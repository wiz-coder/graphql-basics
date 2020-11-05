import {GraphQLID,GraphQLObjectType,GraphQLString,GraphQLInt,GraphQLList} from "graphql"
import _ from "lodash"
import book from "./bookSchema"
import BOOK from "../models/book"


const AuthorType = new GraphQLObjectType({
    name:"Author",
    fields:()=>({
        id:{
            type:GraphQLID
        },
        name:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        },
        books:{
            type: new GraphQLList(book),
            resolve(parent,args){
                // return _.filter(books,{authorID:parent.id})
                return BOOK.find({authorID:parent.id})
            }
        }
    })
})

export default AuthorType