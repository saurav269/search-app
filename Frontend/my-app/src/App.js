import logo from './logo.svg';
import './App.css';
import Search from './Page/Search';
import Products from './Page/Products';
import Allsearch from './Page/Allsearch';

function App() {
  return (
    <div className="App">
     <h1>Search Item</h1>
     <Allsearch />
      {/* <Search /> */}
      <Products />
    </div>
  );
}

export default App;
