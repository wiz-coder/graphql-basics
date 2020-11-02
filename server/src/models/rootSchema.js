import {GraphQLID,GraphQLList,GraphQLObjectType,GraphQLSchema} from "graphql"
import _ from "lodash"
import book from "./bookSchema"
import author from "./authorSchema"

// dummy data
export const books = [
    {
        name:"Name of the Wind",
        genre:"Fantasy",
        id:"1",
        authorID: "1"
    },
    {
        name:"The Final Empire",
        genre:"Fantasy",
        id:"2",
        authorID:"2"
    },
    {
        name:"The Long Earth",
        genre:"Sci-Fi",
        id:"3",
        authorID:"3"
    },
    {
        name: "The Hero of Ages",
        genre: "Fantasy",
        id:"4",
        authorID:"2",
    },
    {
        name:"The Color of Magic",
        genre:"Fantasy",
        id:"5",
        authorID:"1"
    },
    {
        name:"The Light Fantastic",
        genre:"Fantasy",
        id:"6",
        authorID:"3"
    }
]

export const authors = [
    {
        name:"Patrick Rothfuss",
        age:44,
        id:"1"
    },
    {
        name:"Brandon Sanderson",
        age:42,
        id:"2"
    },
    {
        name:"Terry Pratchett",
        age:66,
        id:"3"
    }
]

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        book:{
            type:book,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(books,{id:args.id})
            }
        },
        author:{
            type:author,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id})
            }
        },
        books:{
            type: new GraphQLList(book),
            resolve(parent,args){
                return books
            }
        },
        authors:{
            type: new GraphQLList(author),
            resolve(parent,args){
                return authors
            }
        }
    }
})

const Schema = new GraphQLSchema({
    query:RootQuery
})

export default Schema