import React from 'react';
import PropTypes from 'prop-types';
import css from "../Feedback/FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.FeedbackList}>
            {options.map((option) => (
                <li className={css.FeedbackItem} key={option}>
                <button className={css.FeedbackBtn} onClick={() => onLeaveFeedback(option)}>{option}</button>
                </li>
            ))}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;