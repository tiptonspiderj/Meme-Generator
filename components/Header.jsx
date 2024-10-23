import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="\images\trollFace.png" 
                className="header--image"
                alt="An image of a troll face."
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React project by Jeremy T.</h4>
        </header>
    )
}