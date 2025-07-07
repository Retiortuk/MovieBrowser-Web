import Hero from "./Hero";

const Home = () => {
    return (
        <>
            <Hero text="Welcome To Our Website" /> {/*text berupa seperti nama class yang bisa dipanggil di Hero.js  */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead text-center">
                            This is a website for browsing movies. You can search for your favorite movies, view their details, and explore various genres. To start Your favorite Movies title in the Search Box Above. <br />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;