import React from 'react'
import './About.scss'

const About: React.FC = () => {
    return (
        <section className="about padded-section">
            <div className="content">
                <h2 className="title-blue">What is CELC?</h2>
                <p className="text-grey">The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over <strong>200 student leaders</strong> from <strong>46 universities</strong> across the country.</p>
                <p className="text-grey">Students across Canada come together to perfect their leadership skills, network with their peers and industry professionals, as well as seek new ways to promote leadership in their respective universities!</p>
                <a className="button-outlined-grey" href="https://cfes.ca/">Visit CFES/CELC</a>
            </div>
        </section>
    )
}

export default About