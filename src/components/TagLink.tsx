import React from "react";
import "./TagLink.scss";

interface TagLinkProps {
    text: string,
    url?: string,
}

const TagLink: React.FC<TagLinkProps> = ({text, url = ''}) => {
    return (
        <a className="tag-link" href={url} target={'_blank'} rel={'noreferrer'}>
            <img className="link-icon" />
            <span className="link-text">{text}</span>
        </a>
    )
}

export default TagLink;
