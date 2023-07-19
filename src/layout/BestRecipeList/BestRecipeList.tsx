import React from 'react';
import {Carousel} from "react-bootstrap";
import {LayOut} from "./style";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {useSelector} from "react-redux";

const BestRecipeList = () => {
    const {user} = useSelector(state => state.user);
    return (
        <>
            <h1>{user.email}`s BEST Recipe</h1>
            <Carousel>
                <Carousel.Item>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default BestRecipeList;
