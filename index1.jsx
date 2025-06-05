import PropTypes from "prop-types";
import React from "react";
import { Cancel } from "./Cancel";
import { Search } from "./Search";
import "./style.css";

export const TypeBasicWrapper = ({ type, className }) => {
  return (
    <div className={`type-basic-wrapper ${type} ${className}`}>
      <div className="frame">
        {["active", "basic"].includes(type) && (
          <>
            <Search className="search-instance" opacity="0.5" />
            <div className="div">
              {type === "basic" && <>Search</>}

              {type === "active" && <>|</>}
            </div>
          </>
        )}

        {["filled", "typing"].includes(type) && (
          <>
            <div className="frame-2">
              <Search className="search-instance" opacity="0.5" />
              <div className="typing-2">
                {type === "typing" && (
                  <>
                    <p className="span-wrapper">
                      <span className="text-wrapper">Typing</span>
                    </p>

                    <p className="span-wrapper">
                      <span className="span"> |</span>
                    </p>
                  </>
                )}

                {type === "filled" && <>Some text</>}
              </div>
            </div>

            <div className="essentials-cancel">
              <Cancel className="cancel-instance" opacity="0.35" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

TypeBasicWrapper.propTypes = {
  type: PropTypes.oneOf(["filled", "typing", "active", "basic"]),
};
