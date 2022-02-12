import './App.css';
import {Nav} from './components/Nav';
import {SearchArea} from './components/SearchArea';



function App() {
  return (
    <div className="App">
      <Nav />
     <div className="content">
       <h1> Pagination SGBDR </h1>

       <SearchArea />
     </div>
    </div>
  );
}

export default App;