import {useQuery} from "@apollo/client"

//importing books query
import {getBooksQuery} from "../../queries/queries"

const BookList = (props) => {
    const {loading,error,data} = useQuery(getBooksQuery)
    console.log(data)
    if(loading) return <p>loading data ...</p>
    else if(error) return <p>{error.message}</p>
    else{
        return (
            <ul>
            {data.books.map((book,i)=><li key={i}>{book.name + " -  "+book.author.name}</li>)}
            </ul>
        )
    }
}

export default BookList
