import Hero from "./Hero";

const About = () => {
    return (
        <>
            <Hero text="About us" /> {/*text berupa seperti nama class yang bisa dipanggil di Hero.js  */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead text-center">
                            Nothing to see here! start for your favorite movies in the search box above.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;