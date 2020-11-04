import {useState} from "react"
import {useMutation,useQuery} from "@apollo/client"

//importing authors query
import {getAuthorsQuery} from "../../queries/queries"


const AddBook = (props) => {
    const [name,setName] = useState('')
    const [genre,setGenre] = useState('')
    const [authorID,setAuthorID] = useState('')
    const {loading,error,data} = useQuery(getAuthorsQuery)
    const nameChangeHandler = e => {
        setName(e.target.value)
    }
    const genreChangeHandler = e => {
        setGenre(e.target.value)
    }
    const authorIDChangeHandler = e => {
        setAuthorID(e.target.value)
    }
    const addBookHandler = e => {
        e.preventDefault()
        console.log(e)
    }
    if(loading) return <p>loading authors ...</p>
    else if(error) return <p>Error: {error.message}</p>
    else if(data){
        const allAuthors = data.authors.map((author,i)=><option key={i} value={author.id}>{author.name}</option>)
        return (
            <form id="add-book" onSubmit={addBookHandler}>
            
            <div className="field">
            <label>Book Name:</label>
            <input type="text" name="bookname" onChange={nameChangeHandler}/>
            </div>
            <div className="field">
            <label>Genre:</label>
            <input type="text" name="genre" onChange={genreChangeHandler}/>
            </div>
            <div className="field">
            <label>Author:</label>
            <select name="authorID" onChange={authorIDChangeHandler}>
            <option>Select Author</option>
            {allAuthors}
            </select>
            </div>
            <button type="submit">+</button>

            </form>
        )
    }
}

export default AddBook
