import React from 'react'

export default function Meme() {
    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button className="form--bottom">Get a new image 🖼</button>
            </div>
        </main>
    )
}