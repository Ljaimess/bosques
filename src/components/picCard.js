import React from 'react';


function PicCard(props) {
    return (

        
            <img className="picCard" id={props.id}
                alt={props.alt} src={props.src}/>

            
        

    );
}

export default PicCard;