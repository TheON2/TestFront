import React, { useState, useEffect } from 'react';
import {Container2} from "../../layout/RecentlyRecipe/style";
import RecentCard from "../../layout/RecentlyRecipe/Components/RecentCard";
import {useQuery} from "react-query";
import {getRecipes} from "../../api/recipes";

const RecipeRankingPage = () => {
    const { data, isLoading, error } = useQuery('recipes', getRecipes);
    const [sortedRecipes, setSortedRecipes] = useState([]);

    useEffect(() => {
        if (data && !isLoading) {
            const sortedData = [...data].sort((a, b) => b.likeCount - a.likeCount);
            setSortedRecipes(sortedData);
        }
    }, [data, isLoading]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;
    return (
        <>
            <h1>Recipe Ranking</h1>
            {sortedRecipes.map((recipe,idx) =>
                <RecentCard key={recipe.id} title={recipe.title} subtitle={recipe.subtitle} id={recipe.id} cardNumber={idx+1}/>
            )}
        </>
    );
};

export default RecipeRankingPage;