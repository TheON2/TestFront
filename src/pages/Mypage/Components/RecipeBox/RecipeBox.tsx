import React, { useCallback } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_RECIPE } from "../../../../redux/reducers/recipeSlice";

const RecipeBox = ({ imageUrl, title, subtitle, style, id, nickname }) => {
  const dispatch = useDispatch();
  const addRecipe = useCallback(() => {
    const newRecipe = {
      title,
      writerEmail: nickname,
      id,
      url: imageUrl,
    };
    dispatch(ADD_RECIPE(newRecipe));
  }, [dispatch, id, title, nickname, imageUrl]);
  return (
    <>
      <Link onClick={addRecipe} to={`/${id}`}>
        <Card
          style={
            style
              ? style
              : {
                  width: "180px",
                  height: "150px",
                  display: "inline-block",
                  margin: "20px",
                }
          }
        >
          <Card.Img
            variant="top"
            src={
              imageUrl
                ? imageUrl
                : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
            }
            style={{ width: "180px", height: "100px" }}
          />
          <Card.Body>
            <Card.Title>{title ? title : "대강 맛있는 요리 이름"}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default RecipeBox;
