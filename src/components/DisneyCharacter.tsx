import React from "react";
import "./TagContent.scss";

interface DisneyCharacterProps {
    title: string,
    name: string
}

const DisneyCharacter: React.FC<DisneyCharacterProps> = ({title, name}) => {
    return (
        <div className="tag-content character-content">
            <div className="character-column">
                <img className="character-picture" src={`https://celcassets.cfes.ca/live/${name.toLowerCase().replace(/\s/g, '-')}.png`} />
            </div>
            <div className="character-info">
                <div className="content-header">
                    <h2>{title}</h2>
                </div>
                <div className="content-container">
                    <p className="character-name">{name}</p>
                </div>
            </div>
        </div>
    )
}

export default DisneyCharacter;
