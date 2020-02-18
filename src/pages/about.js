import React, { Component } from "react";
import NavBar from "../components/navbar";

import Images from "../components/images";
import PicCard from "../components/picCard";

class About extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <div className="continer about-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut facilisis mi.
                        Fusce ac erat quis nibh finibus volutpat eget non velit. Quisque ut luctus ante, eget semper risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed massa velit.
                        Pellentesque tincidunt orci at elementum tristique. Aenean mollis diam orci, in consequat diam rutrum a.
                        Nullam commodo id odio malesuada ultricies. Nam vestibulum tincidunt sem, quis finibus enim efficitur vel.
                        Fusce lorem nunc, bibendum in mauris id, lacinia bibendum erat. Duis vitae arcu sed lorem malesuada ultrices in id ante.
                        Praesent ultrices ante a aliquet facilisis. Mauris laoreet mi ac lectus vestibulum, ut convallis urna lacinia.
                    </p>
                </div>

                <div className="outerPicCard">
                    {
                        Images.map(Card => (
                            <PicCard
                                id={Card.id}
                                alt={Card.alt}
                                src={Card.src}
                            />
                        ))
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default About;