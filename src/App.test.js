import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'
import petstore from './fixtures/petstore.json'

it('renders the default view', () => {
  const component = renderer.create(<App doc={petstore}></App>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
