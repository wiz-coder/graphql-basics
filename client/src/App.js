import {ApolloClient,ApolloProvider,InMemoryCache} from "@apollo/client"
import "./App.css"

//components
import AddBook from "./components/AddBook/AddBook"
import BookList from "./components/BookList/BookList"

//setting up Apollo client
const client = new ApolloClient({
  uri:"http://localhost:5000/gapp",
  cache: new InMemoryCache()
})

function App() {
  return (
   <ApolloProvider client={client}>
   <div id="main">
   <h1>Ninja's Reading List</h1>
   <BookList/>

   <AddBook/>
   
 </div>
   </ApolloProvider>
  );
}

export default App;
