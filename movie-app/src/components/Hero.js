const Hero = ({text, backdrop}) => { // parameter nya adalah {text} : component, yang mana match dengan yang ada di Home.js dan About.js
    return (
        <header className="hero-Container bg-dark text-white p-5">
            <h1 className="hero-Text py-3">{text}</h1>
            { backdrop &&
                <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div> 
            }
        </header>
        
    );
};

export default Hero;