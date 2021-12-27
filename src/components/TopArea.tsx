import React from 'react'
import './TopArea.scss'

const TopArea: React.FC = () => {
    return (
        <section className="top-area">
            <div className="information-card">
                <div className="card-header">
                    <h2>Innovating for the Future</h2>
                    <h4>Showcasing the Engineering Calgary</h4>
                </div>
                    The 2023 CFES Canadian Engineering Leadership Conference will show a diverse, sustainable, and tech-oriented Calgary.
                <div className="card-actions">
                    <a className="button-solid-red">Partner With Us</a>
                    <a className="button-outlined-grey">Learn More</a>
                </div>
                <div className="card-details">
                    <p className="location">Downtown Calgary</p>
                    <p className="date" >January 2nd - 7th, 2023</p>
                </div>
            </div>
            <p className="location-tag">Elliston Park</p>
        </section>
    )
}

export default TopArea