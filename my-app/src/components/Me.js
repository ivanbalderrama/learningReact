import React from 'react';
import EgyptImage from '../images/ancientEgypt.jpg';
import './Me.css';

function Me(){
    return (
        <div className="infoContainer">
            <img className="egyptImg" src={EgyptImage}></img>
            <div className="nameInfo">
                <h2>Ivan Balderrama</h2>
                <h5>Front End Developer</h5>
                <a className="myWebsite" target="_blank" href="/">My Website</a>
                <button id="emailButton">Email</button>
                <button id="linkButton">LinkedIn</button>

                <h3>About</h3>
                <p>I graduated Full Sail University with my Associates in Science for Web Design & Development.
                I have worked on several projects using HTML, CSS, JavaScript, C# and Github where I learned basic fundamentals
                and collaborated with classmates. Over the last several years, I have worked in various positions that 
                required mentoring, problem solving skills, organization and multi-tasking. </p>

                <h3>Interests</h3>
                <p>On a personal side I am very intrigued by the universe and ancient history about the egyptians, hence the picture.
                I admire vehicles and one day wish to own a 1969 Dodge Charger. Challenging myself to new levels has became
                something that keeps my life interesting. </p>
               
            </div>
        </div>
    )
}

export default Me;