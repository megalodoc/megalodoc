import React from 'react'
import PropTypes from 'prop-types'

const Operation = ({verb, operation}) =>
  <div>
    <h3>{verb}</h3>
    <p>{operation.summary}</p>
    <p>{operation.description}</p>
    {/* render each responses object */}
  </div>

Operation.propTypes = {
  verb: PropTypes.string.isRequired,
  operation: PropTypes.shape({
    tags: PropTypes.array,
    summary: PropTypes.string,
    description: PropTypes.string,
    externalDocs: PropTypes.object,
    operationId: PropTypes.string,
    consumes: PropTypes.array,
    produces: PropTypes.array,
    parameters: PropTypes.array,
    responses: PropTypes.object,
    schems: PropTypes.array,
    deprecated: PropTypes.boolean,
    security: PropTypes.array
  }).isRequired
}

export default Operation
