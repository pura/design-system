import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Switch = ({ turnOn, className }) => {
  return (
    <div className={`switch ${className}`}>
      <div className={`group turn-on-${turnOn}`}>
        <div className="ellipse" />
      </div>
    </div>
  );
};

Switch.propTypes = {
  turnOn: PropTypes.bool,
};
