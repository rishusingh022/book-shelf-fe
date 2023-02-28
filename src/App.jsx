import './App.css';
import { default as Shelf } from './components/shelf';
import mockData from './mocks/data';

function App() {
  return (
    <div className="App">
      <div className="book-shelf-header">
        <div className="book-shelf-header-line">
          <hr />
        </div>
        <div className="book-shelf-header-content">
          <div className="book-shelf-header-content-button">BS</div>
          <p>
            <i>The Book Shelf</i>
          </p>
        </div>
        <div className="book-shelf-header-line">
          <hr />
        </div>
      </div>
      {Object.keys(mockData).map((author, index) => {
        console.log(author, index, mockData[author]);
        return <Shelf key={index} author={author} books={mockData[author]} />;
      })}
    </div>
  );
}
export default App;
