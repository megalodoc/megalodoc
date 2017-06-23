import React from 'react'
import renderer from 'react-test-renderer'
import Operation from './Operation'
import petstore from './fixtures/petstore.json'

it('renders the Operation component', () => {
  const paths = petstore.paths
  const path = Object.keys(paths)[0]
  const pathItem = paths[path]
  const verb = Object.keys(pathItem)[0]
  const operation = pathItem[verb]
  const component = renderer.create(<Operation verb={verb} operation={operation} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
