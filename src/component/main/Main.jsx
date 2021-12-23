import React from "react";

import Song from "./song/Song";
import "./main.css";
import songs from "../../songs";

function createSong(s){
    return (
        <Song 
            key={s.id}
            image={s.image}
            name={s.name}
            link={s.link}
        />
    )
}

export default function Main() {
    return (
        <div className="container outer">
            {songs.map(createSong)}
        </div>
    )
}