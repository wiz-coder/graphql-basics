import {gql} from "@apollo/client"

export const addBookMutation = gql`
    mutation ($name:String!,$genre:String!,$authorID:ID!) {
        addBook(name:$name,genre:$genre,authorID:$authorID){
            name
            id
        }
    }
`