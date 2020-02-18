import React, { Component } from 'react';
import Title from "../components/title";
import Carousell from "../components/carousel";
// import Footer from "../components/footer";
// import { Link } from "react-router-dom";
import Pic1 from "../pics/darksouls.jpg";
import Pic2 from "../pics/IMG_5551.JPG";
import Pic3 from "../pics/IMG_5552.JPG";
import TreePic from "../pics/arbor1.png";
class Home extends Component {
    state = {
        english: false,

        title: "Bosques ECOBabilonia",
        subname: "",
        pic1: Pic1,
        pic2: Pic2,
        pic3: Pic3,


    }
    render() {
        return (
            <React.Fragment>
                <Title
                    title={this.state.title}
                />
                <img className="arbor1" alt="arbor" src={TreePic} ></img>
                <Carousell
                    pic1={this.state.pic1}
                    pic2={this.state.pic2}
                    pic3={this.state.pic3}
                />



                <a href="/about" className="waves-effect waves-light btn-large btn1">About</a>
                <a href="/pics" className="waves-effect waves-light btn-large btn3">Pictures</a>
                <a href="/contact" className="waves-effect waves-light btn-large btn2">Contact</a>
                <a href="/about" className="waves-effect waves-light btn-large btn4">Directions</a>


                
            </React.Fragment>
        );
    }
}

export default Home;