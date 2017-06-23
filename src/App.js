import React, { Component } from 'react'
import logo from './logo.svg'
import PathItem from './PathItem'

class App extends Component {
  render () {
    const paths = this.props.doc.paths
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4" style={{ background: 'lightGray' }}>
            <br/>
            <div className="media">
              <img
                style={{ width: '64px', height: '64px', background: 'gray' }}
                className="d-flex mr-3"
                alt="React logo"
                src={logo}/>
              <div className="media-body">
                <h1 className="h5">Megalodoc</h1>
                <em>That&#39;s a bad fish</em>
                <p>Swagger Version: {this.props.doc.swagger}</p>
              </div>
            </div>
          </div>
          <div className="col">
            {
              Object.keys(paths).map(pathKey =>
                <PathItem key={pathKey} pathName={pathKey} pathItem={paths[pathKey]} />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
