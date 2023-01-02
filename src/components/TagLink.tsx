import React from "react";
import "./TagLink.scss";
import LinkIcon from "../images/icons/link.svg";

interface TagLinkProps {
    text: string,
    url?: string,
    icon?: any
}

const TagLink: React.FC<TagLinkProps> = ({text, url = '', icon}) => {
    const imgSrc = icon ? icon : LinkIcon
    return (
        <a className="tag-link" href={url} target={'_blank'} rel={'noreferrer'}>
            <img className="link-icon" src={imgSrc} />
            <span className="link-text">{text}</span>
        </a>
    )
}

export default TagLink;
