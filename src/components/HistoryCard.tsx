import React, { useState } from 'react';
import './HistoryCard.scss';
import UpArrow from '../images/icons/up-arrow.svg';
import CloseIcon from '../images/icons/x-icon.svg'
import { string } from 'prop-types';

export interface historyCardProps {
    year: number,
    title: string,
    content: string,
    backgroundClass?: string,
}

const HistoryCard: React.FC<historyCardProps> = ({backgroundClass = '', content, title, year}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={`card ${backgroundClass || `${title.toLowerCase()}${year.toFixed(0)}`} no-select ${isOpen ? 'open' : 'closed'}`} onClick={() => setIsOpen(!isOpen)}>
            {
                isOpen ?
                <>
                    <img className='control-icon open' src={CloseIcon} />
                    <p>{content}</p>
                </> :
                <>
                    <img className='control-icon closed' src={UpArrow} />
                    <p className='past-conf-name no-select'>{title}</p>
                    <p className='past-conf-year no-select'>{year.toFixed(0).slice(-2)}</p>
                </>
            }
        </div>
    )
}

export default HistoryCard;