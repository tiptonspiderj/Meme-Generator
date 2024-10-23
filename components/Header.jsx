import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="/troll.png" 
                className="header--image"
                alt="The head of a troll."
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React project by Jeremy T.</h4>
        </header>
    )
}