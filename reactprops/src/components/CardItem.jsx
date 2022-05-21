
import React, { Component } from 'react';


class CardItem extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-3 p-3">
                <div className="box">
                    <img src={this.props.photo} />
                    <h1>{this.props.title}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default CardItem