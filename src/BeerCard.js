import React, { useState } from "react"
import Heart from "react-heart"

// hook
const BeerCard = (props) => {
    const [active, setHeart] = useState(false)
    return (
        <li style={{ listStyle: "none" }}>
            <img style={{ height: "200px" }} src={props.image_url}></img>
            <h3>{props.name} <span>{props.first_brewed}</span></h3>
            <h4>{props.tagline}</h4>
            <p><span>{props.abv + "% ABV - "}</span>{props.description}</p>
            <div style={{ width: "2rem" }}>
                <Heart isActive={active} onClick={() => setHeart(!active)}/>
            </div>
        </li>
    )

    // function App() {
    //     const [active, setHeart] = useState(false)
    //     return (
    //         <div style={{ width: "2rem" }}>
    //             <Heart isActive={active} onClick={() => setHeart(!active)}/>
    //         </div>
    //     );
    // }
}

export default BeerCard