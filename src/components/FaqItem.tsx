import React, { useState } from "react";

export interface faq {
    question: String,
    answer: String
}

export interface faqItemProps {
    faq: faq
}

const FaqItem: React.FC<faqItemProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`faq-item faq-${isOpen ? 'open' : 'closed'}`}>
            <div className="faq-top" onClick={toggleOpen}>
                <p className="faq-header no-select" >{faq.question}</p>
                <p className="faq-control no-select" >{isOpen ? '-' : '+'}</p>
            </div>
            {
                isOpen &&
                <p className="faq-text">{faq.answer}</p>
            }
        </div>
    )
}

export default FaqItem;