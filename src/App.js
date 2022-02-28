import './App.css';
import {useState, useEffet} from 'react';

import {Nav} from './components/Nav';
import {SearchArea} from './components/SearchArea';
import {Movies} from './components/Movies';
import {Pagination} from './components/Pagination';

import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('');
      setMovies(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  //get current posts
  const indexOfLastMovie = currentPage * postsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = posts.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
            <div className="App">
              <Nav />
                <div className="content">
                  <h1> Pagination SGBDR </h1>
    
                  <SearchArea />
                  <Movies movies={currentMovies} loading={loading} />
                  <Pagination moviesPerPage={moviesPerPage} totalMovies={page.length} />
                </div>
            </div>
        );
}


// class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     movies: [],
  //     searchTerm: ''
  //   }
  //   this.apiKey = process.env.REACT_APP_API
  // }
//     render() {
//       return (
//         <div className="App">
//           <Nav />
//             <div className="content">
//               <h1> Pagination SGBDR </h1>

//               <SearchArea />
//             </div>
//         </div>
//     );
//   }
// }

export default App;