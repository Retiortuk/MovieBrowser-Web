import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
    // Menggunakan useParams untuk mendapatkan parameter dari URL
    // Misalnya jika URL adalah /movie/123, maka id akan berisi 123
    const { id } = useParams();
    // Menggunakan useEffect untuk mengambil data film berdasarkan id
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true); // State untuk menangani loading

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=20c140e4adb91f55d3869a54318cf4b4`) // Mengambil data film dari API berdasarkan id
            // Menggunakan template literal untuk menyisipkan id ke dalam URL
            .then(response => response.json())
            .then(data => {
                console.log("Make an API request for id:", data);
                setMovieDetails(data);
                setLoading(false); // Mengubah loading menjadi false setelah data berhasil diambil
            })
            .catch(error => console.error("Error fetching movie details:", error));
    }, [id]); // Dependensi useEffect adalah id, sehingga akan dijalankan ulang jika id berubah

    function renderMovieDetails() {
        // Jika loading masih true, tampilkan pesan loading
        if (loading) {
            return <Hero text="Loading..." />; // Menampilkan teks loading
        }
        // Jika loading sudah selesai, tampilkan detail film
        if (movieDetails) {
            const posterURL = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`; // URL untuk poster film
            const backdropURL = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`; // URL untuk backdrop film
            return (
                <div>
                    {/* TODO: ADD BACKDROP IN HERO */}
                    <Hero text={movieDetails.original_title} backdrop={backdropURL} /> {/* Menampilkan judul film sebagai teks Hero */}
                    <div className="container">

                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-lg-4 my-5">
                                <div className="poster text-center text-lg-end">
                                    {movieDetails.poster_path ? (
                                        <img src={posterURL} alt={movieDetails.original_title} className="img-fluid shadow rounded" />
                                        // Menampilkan poster film jika tersedia
                                    ): (
                                        <div className="d-flex align-items-center justify-content-center bg-light text-muted rounded"style={{ height: '500px', width: '100%' }}>
                                            <p className="m-0 fw-bold">Image Not Available</p>
                                        </div>
                                        // Placeholder jika poster tidak tersedia
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-7 my-5">
                                <div className="detailsmovie ps-lg-5 text-lg-start text-center">
                                    <h2 className="mb-4">{movieDetails.original_title}</h2>
                                    <div className="d-flex gap-3 flex-column flex-lg-row">
                                        <p className="fst-italic fw-bold">
                                            Release Date: {movieDetails.release_date} <br />
                                        </p>
                                        <p className="fst-italic fw-bold">
                                            Original Language: {movieDetails.original_language}
                                        </p>
                                    </div>
                                    <p> 
                                        {movieDetails.overview ? (
                                                <span className="lead">
                                                    {movieDetails.overview}
                                                </span>
                                    ): (
                                            <span className="fw-bold">Overview: Not Available</span> // Placeholder jika overview tidak tersedia
                                    )}
                                    </p>
                                    <div className="d-flex gap-3 flex-column flex-lg-row py-5">
                                        <p className="fst-italic fw-bold">
                                            Popularity: {movieDetails.popularity} <br />
                                        </p>
                                        <p className="fst-italic fw-bold">
                                            Vote Average: {movieDetails.vote_average}
                                        </p>
                                        <p className="fst-italic fw-bold">
                                            Vote Count: {movieDetails.vote_count}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>      
            )
        }
    }

    return renderMovieDetails();
}

export default MovieView;