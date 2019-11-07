import React from "react";

const NasaCard = (props) =>{
    return(
    <div>
        <h1>{props.title}</h1>
        <img src= {props.imgUrl}/>
        <p>{props.photoCaption}</p>
    </div>
    )}
export default NasaCard