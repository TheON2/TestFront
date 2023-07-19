import React from "react";
import { Carousel } from "react-bootstrap";
import RecentCard from "./Components/RecentCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config/configStore";
import { Recipe, SuggestRecipe } from "../../redux/reducers/recipeSlice";

const SuggestRecipeList = () => {
  const { recipes } = useSelector((state: RootState) => state.recipes);

  const chunkArray = (array: SuggestRecipe[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedRecipes = recipes ? chunkArray(recipes, 5) : [];

  return (
    <>
      <div style={{ minHeight: "400px", textAlign: "center" }}>
        <h2>Suggest Recipe</h2>
        <Carousel data-bs-theme="dark">
          {chunkedRecipes.map((recipesGroup, index) => (
            <Carousel.Item key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {recipesGroup.map((recipe) => (
                  <RecentCard
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    imageUrl={recipe.url}
                    nickName={recipe.writerEmail}
                  />
                ))}
              </div>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default SuggestRecipeList;
