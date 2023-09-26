import React from 'react';
import PropTypes from 'prop-types';
import "./button.css";


const Button = ({ text, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
