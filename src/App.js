import './App.css';
import Books from './components/books';
import 'bootstrap/dist/css/bootstrap.min.css';



const data = [
  {id:"Title", genere:"Genere", year: "Year", pages: "Pages", author: "Author"},
  {id:"The Shining", genere:"Terror", year: "1977", pages: 599, author: "Stephen King"},
  {id:"El Aleph", genere:"Filosofía", year: "1977", pages: 599, author: "Stephen King"},
  {id:"La Odisea", genere:"Terror", year: "1977", pages: 599, author: "Stephen King"},
  {id:"La biblia", genere:"Terror", year: "1977", pages: 599, author: "Stephen King"},
  {id:"La divina comedia", genere:"Terror", year: "1977", pages: 599, author: "Stephen King"},
  {id:"La tortafrita", genere:"Terror", year: "1977", pages: 599, author: "Stephen King"}

];


function App() {
 
  return (
    <div className="App">
      
      { data.map((book) =>
      <Books title = {book.id} genere = {book.genere} year = {book.year} pages = {book.pages} author = {book.author}/>)}
    </div>
  );
}

export default App;
