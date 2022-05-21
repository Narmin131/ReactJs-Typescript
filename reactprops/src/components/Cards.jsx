import React, { Component } from 'react'
import Card from './CardItem';
import img1 from '../assets/img/crew_avatar1.png';
import img2 from '../assets/img/crew_avatar2.png';
import img3 from '../assets/img/crew_avatar3.png';
import img4 from '../assets/img/crew_avatar4.png';
import img5 from '../assets/img/crew_avatar5.png';
import img6 from '../assets/img/crew_avatar6.png';
import img7 from '../assets/img/crew_avatar7.png';
import img8 from '../assets/img/crew_avatar8.png';
import bg from '../assets/img/bg1.png';
import CardItem from './CardItem';


class Cards extends Component {
    render() {
        return (
            <section className='testimionals' style={{backgroundImage: `url(${bg})`}}>
                <div className="container">
                    <div className="row">
                        <CardItem photo={img1} title={"Berneice Tran"} text={"Founder"} />
                        <CardItem photo={img2} title={"Nathan Bean"} text={"Co-Founder"} />
                        <CardItem photo={img3} title={"Lynnette Wilkes"} text={"Artist"} />
                        <CardItem photo={img4} title={"Claudia Hicks"} text={"Co-Artist"} />
                        <CardItem photo={img5} title={"Nathan Bean"} text={"UI Designer"} />
                        <CardItem photo={img6} title={"Robert Neo"} text={"Digital Artist"} />
                        <CardItem photo={img7} title={"Sony Jina"} text={"Blockchain Dev"} />
                        <CardItem photo={img8} title={"Natala Elon"} text={"SEO Engineer"} />

                    </div>
                </div>
            </section>
        )
    }
}








export default Cards