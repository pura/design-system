import React from "react";
import PropTypes from "prop-types";

export const Cancel = ({ className = "", opacity = 1 }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <path
      d="M12 4L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4 4L12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

Cancel.propTypes = {
  className: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
