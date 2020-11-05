import {GraphQLID,GraphQLInt,GraphQLList,GraphQLObjectType,GraphQLSchema, GraphQLString,GraphQLNonNull} from "graphql"
import _ from "lodash"
import book from "./bookSchema"
import author from "./authorSchema"
import BOOK from "../models/book"
import AUTHOR from "../models/author"

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        book:{
            type:book,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                // return _.find(books,{id:args.id})
                return BOOK.findById(args.id)
            }
        },
        author:{
            type:author,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                // return _.find(authors,{id:args.id})
                return AUTHOR.findById(args.id)
            }
        },
        books:{
            type: new GraphQLList(book),
            resolve(parent,args){
                // return books
                return BOOK.find()
            }
        },
        authors:{
            type: new GraphQLList(author),
            resolve(parent,args){
                // return authors
                return AUTHOR.find({})
            }
        }
    }
})
const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addAuthor:{
            type:author,
            args:{
                name:{
                    type: new GraphQLNonNull(GraphQLString)
                },
                age:{
                    type: new GraphQLNonNull(GraphQLInt)
                }
            },
            resolve(parent,args){
                let newAuthor = new AUTHOR({
                    name:args.name,
                    age:args.age
                })
                return newAuthor.save()
            }
        },
        addBook:{
            type: book,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                genre: {type:new GraphQLNonNull(GraphQLString)},
                authorID: {type:new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                let newBook = new BOOK({
                    name:args.name,
                    genre:args.genre,
                    authorID:args.authorID
                })
                return newBook.save()
            }
        }
    }
})
const Schema = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})

export default Schema