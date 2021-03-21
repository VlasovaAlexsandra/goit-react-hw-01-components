import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css'

const Statistics = ({ title, stats }) => (
    <section className="statistics">
        <h2 className="title">{title}</h2>
       
        <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
           
            <li className="item" key={id}>
            
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              
            </li>
        )
        )}
        </ul>
    </section>
);
    
Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics;
