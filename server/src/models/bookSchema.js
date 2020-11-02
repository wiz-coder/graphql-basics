import {GraphQLObjectType,GraphQLID,GraphQLString} from "graphql"
import _ from "lodash"
import author from "./authorSchema"
import {authors} from "./rootSchema"


const BookType = new GraphQLObjectType({
    name: "Book",
    fields:()=>({
        id:{
            type:GraphQLID,
            
        },
        name:{
            type:GraphQLString
        },
        genre:{
            type:GraphQLString
        },
        author:{
            type:author,
            resolve(parent,args){
                return _.find(authors,{id:parent.authorID})
            }
        }
    })
})

export default BookType