import {gql} from "@apollo/client"

export const getBooksQuery = gql`
{
    books {
        name
        genre
        id
        author{
            name
            age
        }
    }
}
`
export const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`