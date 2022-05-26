import React, { Component } from 'react'
import bg1 from "../assets/img/banner1.png"
import bg2 from "../assets/img/banner2.png"
import bg3 from "../assets/img/banner3.png"
// var sectionImg = {
//     backgroundImage: `url(${bg1})`
// }


class Slider extends Component {
    constructor(props) {
        super(props);
        this.nextSlider = this.nextSlider.bind(this);
        this.prevSlider = this.prevSlider.bind(this);
        this.state = {
            bg: `url(${bg1})`,
            text:"New Collection",
            para:"Donec lacus dui, varius vitae tincidunt et, iaculis vitae massa. Vivamus aliquet, dui id facilisis elementum, velit est euismod velit, et dignissim mauris lacus eu nisi.Donec lacus dui, varius vitae tincidunt et, iaculis vitae massa. Vivamus aliquet, dui id facilisis elementum, velit est euismod velit, et dignissim mauris lacus eu nisi"

        }
    }
    nextSlider() {
        this.prevSlider = this.prevSlider.bind(this);
        this.setState({
            bg: `url(${bg2})`,
            text:"Cold Brew Coffee",
            para:"Donec lacus dui, varius vitae tincidunt et, iaculis vitae massa. Vivamus aliquet, dui id facilisis elementum, velit est euismod velit, et dignissim mauris lacus eu nisi.Donec lacus dui, varius vitae tincidunt et, iaculis vitae massa. Vivamus aliquet, dui id facilisis elementum, velit est euismod velit, et dignissim mauris lacus eu nisi",
        })
    }
    prevSlider() {
        this.setState({
            bg: `url(${bg3})`,
            text:"Percolator Coffee",
            para:"Donec lacus dui, varius vitae tincidunt et, iaculis vitae massa. Vivamus aliquet, dui id facilisis elementum, velit est euismod velit, et dignissim mauris lacus eu nisi.Donec lacus dui, varius vitae tincidunt et, iaculis vitae massa. Vivamus aliquet, dui id facilisis elementum, velit est euismod velit, et dignissim mauris lacus eu nisi",
        })
    }
    render() {
        return (
            <section className='slider' style={{ backgroundImage:this.state.bg }}>
<i class="fa-solid fa-angle-left left" onClick={this.prevSlider}></i>
<i class="fa-solid fa-angle-right right" onClick={this.nextSlider} ></i>
<div className="text">
<h1>{this.state.text}</h1>
<p>{this.state.para}</p>
</div>
            </section>
        )
    }
}

export default Slider