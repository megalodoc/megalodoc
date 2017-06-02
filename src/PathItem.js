import React from 'react';
import PropTypes from 'prop-types';

const PathItem = ({pathName, pathItem}) =>
  <div>
    <h2>{pathName}</h2>
    {/* render Operations(s) */}
  </div>

PathItem.propTypes = {
  pathName: PropTypes.string.isRequired,
  pathItem: PropTypes.shape({
    get: PropTypes.object,
    put: PropTypes.object,
    post: PropTypes.object,
    delete: PropTypes.object,
    parameters: PropTypes.array
  }).isRequired
};

export default PathItem;
