import React from 'react';
import './Home.css';
import MyImg from '../../images/passport.jpeg';
import world from '../../images/world.png'


const Home = () => {
    return (
        <header>
            <div className="HeaderContainer">
                <img className="MyImg" src={MyImg} alt="my passport"/>
                <h1 className="Intro">Hello <img className="emoji" src={world} alt="world emoji"/>, I'm <span className="highlight">Runo Saduwa</span>.</h1>
                <p className="IntroWords">
                    A Fullstack Software Engineer based in Nigeria. I use React and Node.js to bring ideas to life.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nisi illo assumenda nulla, maiores quasi aut possimus provident illum ut!
                     </p>
                <div className="SocialIcons">
                 <a href="#github"><i className="fab fa-github"></i></a>
                 <a href="#github"><i className="fab fa-linkedin"></i></a>
                 <a href="#github"><i className="fab fa-twitter"></i></a>
                 <a href="#github"><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </header>
    )
}


export default Home;