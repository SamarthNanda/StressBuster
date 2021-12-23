import React from "react";

import "./song.css";

export default function Song(props){
    return (
        <div className="song">
            <img src={props.image} alt="song-logo" />
            <h2>{props.name}</h2>
            <a href={props.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-info form-control">Play</button></a>
        </div>
    )
}