import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ searchText, setSearchText }) => {

    const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi programatik

    const updateSearch = (event) => {
        navigate('/search') // Mengarahkan ke halaman search ketika input berubah
        // Mengupdate state searchText dengan nilai input
        // event.target.value adalah nilai dari input search
        setSearchText(event.target.value);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                {/* Pakai Link Bukan <a> dan to="" bukan href="" */}
                <Link className="navbar-brand" to="/">Movie Browser</Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearch} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;