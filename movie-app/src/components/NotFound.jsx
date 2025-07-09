import { Link } from "react-router-dom";


function NotFound() {
    return (
        <div className="container min-vh-100 d-flex justify-content-center" style={{paddingTop: '30vh'}}>
            <div className="text-center">
                <h1 className="fw-bold fs-1">404 :(</h1>
                <p className="lead mt-3">Oops Soory, Can't Find Page That You're Looking For :(</p>
                <p>
                    <Link to='/' >Back To Home</Link>
                </p>
            </div>
        </div>
    );
};

export default NotFound;