import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Pic1 from "../pics/darksouls.jpg";

// class Carousell extends Component {
const Carousell = props => (
    // render() {
    //     return (
    <div className="carousel-holder" >
        <Carousel>
            <div>
                <img className="pic1" alt="1" src={props.pic1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img className="pic1" alt="2" src={props.pic2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img className="pic1" alt="3" src={props.pic3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </div>
    //     );
    // }
)
// }

export default Carousell;