import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Figure, Image} from "react-bootstrap"
import CommentBox from "./CommentBox";
import {RootState} from "../../../type/local";
import {useSelector} from "react-redux";

const DetailContainer5 = ({comments, recipeId, user}) => {

    return (<>
            <div style={{margin: "10px"}}>
                <h3>Comment {comments.length}</h3>
            </div>
            <Container2
                id="maincontent"
                style={{
                    minHeight: "400px",
                    backgroundColor: "white",
                    margin: "20px",
                    padding: "20px",
                    height: "400px",
                    overflow: "auto"
                }}
            >
                {comments.map((comment, index) => (
                    <CommentBox key={index} comment={comment.content} recipeId={recipeId} commentId={comment.id}
                                nickName={comment.user_id} userEmail={user.email} createdAt={comment.updatedAt}/>
                ))}
            </Container2>
        </>
    );
};

export default DetailContainer5;
