import React from 'react'
import highlight1 from "../img/highlight1.png";
import highlight2 from "../img/highlight2.png";
import highlight3 from "../img/highlight3.png";
import highlight4 from "../img/highlight4.png";
import highlight5 from "../img/highlight5.png";
import "../css/profilehighlights.scss"
function ProfileHighLights() {

    let highlightsArray = [
        { src: highlight1, label: "WEB-DEV" },
        { src: highlight2, label: "FUN QNAs" },
        { src: highlight3, label: "OUR JOURNEY" },
        { src: highlight4, label: "HELPFUL QNAs" },
        { src: highlight5, label: "CSS/JS EFFECTS" },
    ];
    return (
        <div className="Wrapper">
            {highlightsArray.map((highlight) => (
                <div className="HighLightWrapper">
                    <img className="HighLightImage" src={highlight.src} />
                    <span className="HighLightLabel">{highlight.label}</span>
                </div>
            ))}
        </div>
    )
}

export default ProfileHighLights
