import React from 'react';
import PropTypes from 'prop-types';
import css from "../Statistics/Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={css.StatList}>
            <li className={css.StatItem}>
                Good:<span className={css.StatAmount}> {good}</span>
            </li>
            <li className={css.StatItem}>
                Neutral:<span className={css.StatAmount}> {neutral}</span>
            </li>
            <li className={css.StatItem}>
                Bad:<span className={css.StatAmount}> {bad}</span>
            </li>
            <li className={css.StatItem}>
                Total:<span className={css.StatAmount}> {total}</span>
            </li>
            <li className={css.StatItem}>
                Positive feedback:<span className={css.StatAmount}> {positivePercentage}%</span>
            </li>
        </ul>
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;