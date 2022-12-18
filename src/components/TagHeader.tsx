import React from "react";
import Logo from "../images/logo.svg";
import "./TagHeader.scss";

interface TagHeader {
    name?: string
}

const TagHeader: React.FC<TagHeader> = ({name}) => {
    return (
        <div className="tag-header">
            <h1 className="tag-greeting">Hello {name}</h1>
            <img className="tag-logo" src={Logo} />
        </div>
    )
}

export default TagHeader;