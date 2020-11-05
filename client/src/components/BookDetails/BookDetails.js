import {useQuery} from "@apollo/client"


//importing getBookQuery
import {getBookQuery} from "../../queries/queries"

//importing CSS to this component
import "./BookDetails.css"
const BookDetails = (props) => {
    const {data,error,loading} = useQuery(getBookQuery,{variables:{id:props.bookid}})

    if(loading) return <p className="book-details">Loading book data ..</p>
    else if(error) return <p className="book-details">{error.message}</p>
    else{
        if(data){
            return (
                <div className="book-details">
                     
                     <h2><span>Book: </span>{data.book.name}</h2>
                     <p><span>Genre: </span> {data.book.genre}</p>
                     <p><span>Author: </span>{data.book.author.name}</p>
                     <p><span>Author's other books:</span> </p>
                     <ul className="other-books">
                     
                     {data.book.author.books.map((book,i)=><div  key={i}><small>{book.name}</small></div>)}
                     </ul>
                    
                </div>
            )
        }else{
            return <p>Error occured</p>
        }
    }
    
}

export default BookDetails
