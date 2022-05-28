import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props);
        this.mySubmit = this.mySubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.state={
            keyword: ""
        }
    }
    inputChange(e){
        this.setState({
            keyword: e.target.value
        })

    }
    mySubmit(e){
        e.preventDefault();
        this.props.searchValue(this.state.keyword);
    }
  render() {
    return (
      <form onSubmit={this.mySubmit}>
          <div className="container my-3">
              <div className="input-group">
                  <input onChange={this.inputChange} type="text" className="form-control" />
                  <div className="input-group-append">
                      <button className='btn btn-dark'>Search</button>
                  </div>
                  
              </div>
          {/* {this.state.keyword} */}
          </div>
      </form>
    )
  }
}

export default Search