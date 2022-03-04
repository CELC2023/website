import React from "react";
import arrow from "../images/icons/band-arrow.svg";
import "./Arrow.scss";

export enum ArrowDirections {
    Up, Down, Left, Right
}

export interface ArrowProps {
    direction: ArrowDirections
}

const Arrow: React.FC<ArrowProps> = (props) => {
    return (
        <div className="arrow-outer">
            <img className={`arrow-image arrow--${props.direction ? props.direction.toString() : ''}`} src={arrow} />
        </div>
    );
};

export default Arrow;