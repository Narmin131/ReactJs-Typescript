import React, { Component } from 'react'

class Question extends Component {
  render() {
    return (
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header " id={this.props.id} >
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${this.props.collapse}`} aria-expanded="true" aria-controls={this.props.collapse}>
            {this.props.title}
            </button>
          </h2>
          <div id={this.props.collapse} className="accordion-collapse collapse show" aria-labelledby={this.props.id} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>{this.props.text}</strong>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Question;