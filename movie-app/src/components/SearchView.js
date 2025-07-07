import Hero from "./Hero";
import  { Link } from 'react-router-dom'; // Import Link untuk navigasi

// API KEY FROM THEMOVIEDB: 20c140e4adb91f55d3869a54318cf4b4
// https://api.themoviedb.org/3/search/movie

// MovieCard
const MovieCard = ({ movie }) => {
    const posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; // URL untuk poster film
    const detailURL = `/movie/${movie.id}`; // URL untuk detail film berdasarkan ID
    return (
        <div className= "col-lg-3 col-md-3 col-2 my-3">
            <div className="card">
                {movie.poster_path ? (
                    <img src={posterURL} className="card-img-top" alt="..." />
                ): (
                    <div className="image-placeholder d-flex align-items-center justify-content-center bg-light text-muted rounded" style={{height: '450px'}}>
                        <p className="fw-bold">Image Not Available For This One </p>
                    </div>
                )}
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailURL} className="btn btn-dark">Show Details</Link> {/* Menggunakan Link untuk navigasi ke detail film */}
                </div>
            </div>
        </div>
    )
}

// SearchView.js
const SearchView = ({keyword, searchResults}) => { // Menerima props keyword dan searchResults dari App.js
    // keyword adalah teks yang dicari, searchResults adalah hasil pencarian
    const title = `you search for ${keyword}`; // Judul yang akan ditampilkan di Hero, bisa diubah sesuai kebutuhan

    const ResultsHTML = searchResults.map((obj, index) => { // Menggunakan map untuk mengiterasi setiap hasil pencarian
        // obj adalah setiap objek film dari hasil pencarian, index adalah indeksnya

        return (
            <MovieCard movie={obj} key={index} />  

        )
    }) 

    return (
        <>
            {/* Menampilkan Hero dengan teks yang sesuai */}
            <Hero text={title} /> {/*text berupa seperti nama class yang bisa dipanggil di Hero.js  */}
            { ResultsHTML && 
                <div className="container">
                    <div className="row">
                        {/* Menampilkan hasil pencarian */}
                        {ResultsHTML } 
                    </div>
                </div>
            }
        </>
    );
};

export default SearchView;