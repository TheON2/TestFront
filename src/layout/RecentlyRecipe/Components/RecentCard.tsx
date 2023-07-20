import React, { useCallback } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_RECIPE } from "../../../redux/reducers/recipeSlice";

const RecentCard = ({
  imageUrl,
  title,
  nickName,
  cardNumber,
  id,
  subtitle,
}) => {
  const dispatch = useDispatch();
  const addRecipe = useCallback(() => {
    const newRecipe = {
      title,
      writerEmail: nickName,
      id,
      url: imageUrl,
    };
    dispatch(ADD_RECIPE(newRecipe));
  }, [dispatch, id, title, nickName, imageUrl]);
  return (
    <Link
      onClick={addRecipe}
      to={`/${id}`}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "white",
          width: "35px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          border: "1px solid gray",
        }}
      >
        <h4>{cardNumber}</h4>
      </div>
      <Card
        style={{
          width: "180px",
          height: "300px",
          margin: "10px",
          position: "relative",
        }}
      >
        <Card.Img
          variant="top"
          src={
            imageUrl
              ? imageUrl
              : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
          }
          style={{ height: "200px", width: "150px" }}
        />
        <Card.Body>
          <Card.Title>{title ? title : "대강 맛있는 요리 이름"}</Card.Title>
          <Card.Text>{nickName ? nickName : "Cook Master"}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default RecentCard;
