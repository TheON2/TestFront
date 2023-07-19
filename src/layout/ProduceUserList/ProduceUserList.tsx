import React from 'react';
import {Button, Carousel, Figure, Image} from "react-bootstrap";
import {LayOut} from "./style";
import {Container2} from "../../pages/Detail/style";
import UserCard from "./Components/UserCard";

const ProduceUserList = () => {
    return (
        <LayOut>
            <h3>Editor`s Pick BestUser</h3>
            <Carousel>
                <Carousel.Item>
                    <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center", width: "80%"}}>
                            <UserCard/>
                            <UserCard/>
                            <UserCard/>
                            <UserCard/>
                            <UserCard/>
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center", width: "80%"}}>
                            <UserCard/>
                            <UserCard/>
                            <UserCard/>
                            <UserCard/>
                            <UserCard/>
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center", width: "80%"}}>
                            <UserCard/>
                            <UserCard/>
                            <UserCard/>
                            <UserCard/>
                            <UserCard/>
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </LayOut>
    );
};

export default ProduceUserList;
