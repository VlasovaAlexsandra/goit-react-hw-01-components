import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
    <section>
        <h2>{title}</h2>
       
        <ul>
        {stats.map(({ id, label, percentage }) => (
           
            <li key={id}>
            
                <span>{label}</span>
                <span>{percentage}%</span>
              
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