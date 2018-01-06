import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * Component wtih the input
 * @param {*} props 
 */
let UrlInput = props => {
  let input;
  return (
    <form
      className="has-text-centered"
      onSubmit={e => {
        e.preventDefault();
        props.onClick(input.value);
      }}
    >
      <div className="field  has-addons">
        <div className="control">
          <input
            ref={node => {
              input = node;
            }}
            className="input"
            type="text"
            placeholder="Inform Url"
            defaultValue={props.longUrl}
          />
        </div>
        <div className="control">
          <button className="button is-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

UrlInput.PropTypes = {
  onClick: PropTypes.func.isRequired,
  longUrl: PropTypes.string
};
UrlInput = connect()(UrlInput);

export default UrlInput;
