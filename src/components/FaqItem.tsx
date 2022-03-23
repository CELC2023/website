import React, { useState } from "react";

export interface faq {
    question: String,
    answer: String
}

export interface faqItemProps {
    faq: faq
}

const FaqItem: React.FC<faqItemProps> = ({faq}) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`faq-item faq-${isOpen ? 'open' : 'closed'}`}>
            <p className="faq-control no-select" onClick={toggleOpen}>{isOpen ? '-' : '+'}</p>
            <p className="faq-header no-select" onClick={toggleOpen}>{faq.question}</p>
            {
                isOpen &&
                <p className="faq-text">{faq.answer}</p>
            }
        </div>
    )
}

export default FaqItem;