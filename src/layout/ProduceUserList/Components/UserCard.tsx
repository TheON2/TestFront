import React from 'react';
import {Button, Figure, Image} from "react-bootstrap";
import {Container2} from "./style";

const UserCard = () => {
    return (
        <>
        <Container2>
            <Image
                src={"https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                style={{width: '70%', height: '50%'}}
                roundedCircle
            />
            <Figure.Caption>
                <h3 style={{textAlign:"center"}}>User</h3>
            </Figure.Caption>
            <Button variant="outline-success" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>Success</Button>
        </Container2>
        </>
    );
};

export default UserCard;
