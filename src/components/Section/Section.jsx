import React from 'react';
import PropTypes from "prop-types";
import css from '../Section/Section.module.css'

const Section = ({ title, children }) => {
    return (
    <>
        <h2 className={css.SecTitle}>{title}</h2>
        {children}
    </>
    );
};

Section.propTypes = {
    title: PropTypes.string,
};

export default Section;