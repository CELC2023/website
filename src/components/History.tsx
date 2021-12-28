import React from 'react';
import './History.scss';

const History: React.FC = () => {

    return (
        <section className="history" id="history">
            <div className="title padded-section">
                <h2>Conferences in <span className="emphasize">History</span></h2>
            </div>
            <div className="content">
                <div className="card congress1975">
                    <h1>75</h1>
                    <h2>Congress</h2>
                </div>
                <div className="card congress1994">
                    <h1>94</h1>
                    <h2>Congress</h2>
                </div>
                <div className="card cec2005">
                    <h1>05</h1>
                    <h2>CELC</h2>
                </div>
                <div className="card congress2016">
                    <h1>16</h1>
                    <h2>Congress</h2>
                </div>
                {/* <div className="card">
                    <h1>17</h1>
                    <h2>CELC</h2>
                </div>
                <div className="card">
                    <h1>20</h1>
                    <h2>CDE</h2>
                </div> */}
            </div>
        </section>
    )
}

export default History