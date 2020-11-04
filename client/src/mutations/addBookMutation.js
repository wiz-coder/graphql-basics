import {gql} from "@apollo/client"

export const addBookMutation = gql`
    mutation {
        addBook(name:"",genre:"",authorID:""){
            name
            id
        }
    }
`