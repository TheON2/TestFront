import React, { useCallback } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { deleteRecipe, updateRecipe } from "../../api/recipes";
import { useDispatch } from "react-redux";
import { ADD_RECIPE } from "../../redux/reducers/recipeSlice";

const RecipeCard = ({ imageUrl, title, subtitle, style, id, nickname }) => {
  // const mutationUpdate = useMutation(updateRecipe, {
  //     onSuccess: () => {
  //         alert('Update Successful!');
  //     },
  // });
  //
  // const mutationDelete = useMutation(deleteRecipe, {
  //     onSuccess: () => {
  //         alert('Delete Successful!');
  //     },
  // });

  // const handleUpdate = () => {
  //     console.log(id)
  //     mutationUpdate.mutate({ id: id,title:"바뀐이름" });
  // };
  //
  // const handleDelete = () => {
  //     mutationDelete.mutate(id);
  // };
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
                  width: "300px",
                  height: "400px",
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
            style={{ width: "300px", height: "200px" }}
          />
          <Card.Body>
            <Card.Title>{title ? title : "대강 맛있는 요리 이름"}</Card.Title>
            <Card.Text>
              {subtitle ? subtitle : "이렇게 저렇게 요리하면 돼."}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default RecipeCard;
