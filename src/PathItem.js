import React from 'react'
import Operation from './Operation'
import PropTypes from 'prop-types'

const PathItem = ({pathName, pathItem}) =>
  <div>
    <h2>{pathName}</h2>
    {
      Object.keys(pathItem).map(oKey =>
        pathItem[oKey]
        ? <Operation key={oKey} verb={oKey} operation={pathItem[oKey]} />
        : null
      )
    }
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
}

export default PathItem
