import React from "react";
import PropTypes from "prop-types";

export const Search = ({ className = "", opacity = 1 }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <line
      x1="16.5"
      y1="16.5"
      x2="22"
      y2="22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

Search.propTypes = {
  className: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
