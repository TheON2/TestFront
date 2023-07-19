import React from 'react';
import {Container2} from "../style";
import {Image} from "react-bootstrap"

const DetailContainer2 = ({material}) => {
    const splitMaterial = material.split("^.^")
    return (
        <Container2
            id="maincontent"
            style={{
                height: "320px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <div style={{margin:"30px"}}>
                <h2>[재료]</h2>
                {splitMaterial?.map((item, index) => (
                    <h4 style={{textAlign:"center"}} key={index}>{item}</h4>
                ))}
            </div>
        </Container2>
    );
};

export default DetailContainer2;