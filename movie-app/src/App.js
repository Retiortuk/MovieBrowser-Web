import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import {Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';


function App() {
  const [searchResults, setSearchResults] = useState([]); // State untuk menyimpan hasil pencarian  
  const [searchText, setSearchText] = useState(''); // State untuk menyimpan teks pencarian
  
  
  useEffect(() => {

    // useEffect untuk menangani efek samping, seperti pencarian ketika searchText berubah
    // Jika searchText tidak kosong, maka akan melakukan pencarian
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=20c140e4adb91f55d3869a54318cf4b4&query=${searchText}`)
        .then(response => response.json() // Mengambil data dari API
        .then(data => {
          console.log("Data:", data);
          setSearchResults(data.results);
          // console.log(searchResults);
        }));
    }
  }, [searchText]); // useEffect untuk menangani efek samping, seperti pencarian ketika searchText berubah

  return (
    <div>
      {/* Navbar Dari Import Dari components/Navbar.js */}
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>

        {/* Home Dari Import Dari components/Navbar.js GUNAKAN element={} karena React Router v6*/}
        <Route path="/" element={<Home />} />   {/* Jika path/alamat/endpoint nya / maka itu adalah home exact dan berubah ke laman Home */}

        {/* About Dari Import Dari components/About.js GUNAKAN element={} karena React Router v6 */}
        <Route path="/about" element={<About />} /> {/* Jika path/alamat/endpoint nya /about maka itu adalah about dan berubah ke laman about */}

        {/* SearchView Dari Import Dari components/SearchView.js GUNAKAN element={} karena React Router v6 */}
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />

        <Route path ="/movie/:id" element={<MovieView />} /> {/* Jika path/alamat/endpoint nya /movie/:id maka itu adalah movie view dan berubah ke laman movie view, :id adalah parameter yang akan diambil dari URL */}

        {/* If the page doesn't exist */}
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
