import React, { Component } from 'react'
import bg1 from "../assets/img/banner1.png"
import bg2 from "../assets/img/banner2.png"
// var sectionImg = {
//     backgroundImage: `url(${bg1})`
// }


class Slider extends Component {
    constructor(props) {
        super(props);
        this.nextSlider = this.nextSlider.bind(this);
        this.state = {
            bg: `url(${bg1})`,

        }
    }
    nextSlider() {
        this.setState({
            bg: `url(${bg2})`,
        })
    }
    render() {
        return (
            <section className='slider' style={{ backgroundImage:this.state.bg }}>
<i class="fa-solid fa-angle-left left" ></i>
<i class="fa-solid fa-angle-right right" onClick={this.nextSlider} ></i>
            </section>
        )
    }
}

export default Slider