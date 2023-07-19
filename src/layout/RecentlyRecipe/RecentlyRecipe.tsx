import React, {useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {Container2} from "./style";
import {useSelector} from "react-redux";
import {RootState} from "../../type/local";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecentCard from "./Components/RecentCard";
import {useQuery} from "react-query";
import {getRecipes} from "../../api/recipes";
import {Link} from "react-router-dom";

const RecentlyRecipe = () => {
    const { data, isLoading, error } = useQuery('recipes', getRecipes);
    const [sortedRecipes, setSortedRecipes] = useState([]);

    useEffect(() => {
        if (data && !isLoading) {
            const sortedData = [...data].sort((a, b) => b.likeCount - a.likeCount);
            setSortedRecipes(sortedData.slice(0, 10));
        }
    }, [data, isLoading]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;
    return (
        <>
            <Link to="/recipeRanking">
                <h1>Recipe Ranking</h1>
            </Link>
            <Container2>
            {sortedRecipes.map((recipe,idx) =>
                <RecentCard key={recipe.id} title={recipe.title} subtitle={recipe.subtitle} id={recipe.id} cardNumber={idx+1}/>
            )}
            </Container2>
        </>
    );
};

export default RecentlyRecipe;