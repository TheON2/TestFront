import React from "react";
import { Carousel } from "react-bootstrap";
import { LayOut } from "./style";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { RootState } from "../../redux/config/configStore";
import { getRecipes } from "../../api/recipes";

const BestRecipeList = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { data, isLoading, error } = useQuery("recipes", getRecipes);
  const recipes = data || [];

  // Filter, sort, and slice the recipes
  const userRecipes = recipes.filter((recipe) => recipe.user_id === user.email);
  userRecipes.sort((a, b) => b.likeCount - a.likeCount);
  const bestRecipes = userRecipes.slice(0, 9);

  return (
    <LayOut>
      <h1>{user.email}'s BEST Recipe</h1>
      <Carousel>
        {bestRecipes.map((recipe, index) => (
          <Carousel.Item key={recipe.id}>
            <RecipeCard
              id={recipe.id}
              key={recipe.title}
              title={recipe.title}
              subtitle={recipe.subtitle}
              imageUrl={recipe.url}
              nickname={recipe.user_id}
            />
            {(index + 1) % 3 === 0 && <Carousel.Caption></Carousel.Caption>}
          </Carousel.Item>
        ))}
      </Carousel>
    </LayOut>
  );
};

export default BestRecipeList;
