import React from 'react';
import './CommitteeListing.scss';
import FooterImage from '../images/Footer.svg';

const CommitteeListing: React.FC = () => {
    return (
        <section id='committee' className='committee-listing'>
            <img className='' src={FooterImage} />
        </section>
    )
}

export default CommitteeListing