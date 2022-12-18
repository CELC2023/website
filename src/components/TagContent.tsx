import React from "react";
import "./TagContent.scss";

interface TagContentProps {
    title: string,
    children: JSX.Element
}

const TagContent: React.FC<TagContentProps> = ({title, children}) => {
    return (
        <div className="tag-content">
            <div className="content-header">
                <h2>{title}</h2>
            </div>
            <div className="content-container">
                {children}
            </div>
        </div>
    )
}

export default TagContent;
