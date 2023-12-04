import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";


const Cards = () => {
    return ( <>
        
            <Link to='/'>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/00/00/00/00000000000000000000000000000000.jpg" />
            </Link>
        
    </> );
}
 
export default Cards;