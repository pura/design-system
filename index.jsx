import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ListElement = ({ selected, className }) => {
  return (
    <div className={`list-element selected-${selected} ${className}`}>
      <div className="option">
        {!selected && <>Option 1</>}

        {selected && <>Option 1 selected</>}
      </div>
    </div>
  );
};

ListElement.propTypes = {
  selected: PropTypes.bool,
};
