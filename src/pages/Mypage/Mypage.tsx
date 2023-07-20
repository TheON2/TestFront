import React from "react";
import Profile from "./Components/Profile/Profile";
import { Container2, LayOut, Container3 } from "./style";
import { useQuery } from "react-query";
import { getRecipes } from "../../api/recipes";
import RecipeBox from "./Components/RecipeBox/RecipeBox";
import { useSelector } from "react-redux";
import { RootState } from "../../type/local";

const Mypage = () => {
  const { data, isLoading, error } = useQuery("recipes", getRecipes);
  const recipes = data || [];

  const { email, nickName } = useSelector(
    (state: RootState) => state.user.user
  );

  const userRecipes = data?.filter((recipe) => recipe.user_id === email) || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred </div>;

  return (
    <LayOut>
      <Profile email={email} nickName={nickName} />
      <Container2>
        <Container3>
          <div style={{ margin: "10px" }}>
            <h3>My Recipes {userRecipes.length}</h3>
          </div>
          <Container2
            id="maincontent"
            style={{
              minHeight: "400px",
              backgroundColor: "white",
              margin: "20px",
              padding: "20px",
              height: "600px",
              overflow: "auto",
            }}
          >
            {userRecipes?.map((recipe) => (
              <RecipeBox
                id={recipe.id}
                key={recipe.title}
                title={recipe.title}
                subtitle={recipe.subtitle}
                imageUrl={recipe.url}
                nickname={recipe.user_id}
              />
            ))}
          </Container2>
        </Container3>
      </Container2>
    </LayOut>
  );
};

export default Mypage;
