import React from "react";
import PropTypes from "prop-types";

const Card = ({ name, desc, onDelete }) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h1>{name}</h1>
      </div>
      <div className="card-body">
        <p>{desc}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
