import React from 'react'
import renderer from 'react-test-renderer'
import PathItem from './PathItem'
import petstore from './fixtures/petstore.json'

it ('renders the PathItem component', () => {
  const paths = petstore.paths;
  const firstPath = Object.keys(paths)[0];
  const component = renderer.create(<PathItem pathName={firstPath} pathItem={paths[firstPath]} />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
