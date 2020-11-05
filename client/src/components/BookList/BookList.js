import {useState} from "react"
import {useQuery} from "@apollo/client"

//importing Book details component
import BookDetails from "../BookDetails/BookDetails"

//importing books query
import {getBooksQuery} from "../../queries/queries"


//import css for this component
import "./BookList.css"

const BookList = (props) => {
    const [bookid,setBookid] = useState()
    const {loading,error,data} = useQuery(getBooksQuery)
    const bookDetailsHandler = (bookid) =>{
        setBookid(bookid)
        

    }
    if(loading) return <p>loading data ...</p>
    else if(error) return <p>{error.message}</p>
    else{
        return (
            <div id="book-list">
            <ul>
            {data.books.map((book,i)=><li key={i} onClick={()=>bookDetailsHandler(book.id)}>{book.name}</li>)}
            </ul>
            {bookid?<BookDetails bookid={bookid}/>:null}
            </div>
        )
    }
}

export default BookList
