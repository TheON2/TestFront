import React, {useState, useCallback} from 'react';
import {Button, Figure, Image} from "react-bootstrap";
import {Container2} from "../style";
import {useDispatch, useSelector} from "react-redux";
import { DELETE_COMMENT } from "../../../redux/reducers/recipeSlice";
import {useMutation, useQueryClient} from "react-query";
import {addComment, deleteComment} from "../../../api/recipes";

const CommentBox = ({profileUrl, nickName,userEmail, createdAt, comment, commentId, recipeId}) => {
    const dispatch = useDispatch();
    const [hovered, setHovered] = useState(false);
    const queryClient = useQueryClient();
    const mutation = useMutation(deleteComment, {
        onMutate: async (commentId) => {
            const oldData = queryClient.getQueryData(["comment", recipeId]);
            queryClient.setQueryData(["comment", recipeId], (oldComments) =>
                oldComments.filter((comment) => comment.id !== commentId)
            );
            return oldData;
        },
        onError: (err, variables, oldData) =>
            queryClient.setQueryData(["comment", recipeId], oldData),
        onSettled: () => {
            queryClient.invalidateQueries(["comment", recipeId]);
        },
    });

    const onDeleteComment = useCallback(() => {
        mutation.mutate(commentId);
    }, [recipeId, commentId]);

    const date = new Date(createdAt);
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();

    return (
        <Container2>
            <Button
                style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor:"black",
                    opacity: (hovered && userEmail === nickName) ? 1 : 0,
                    transition: "opacity 0.5s",
                    pointerEvents: (userEmail === nickName) ? 'auto' : 'none'
                }}
                onClick={onDeleteComment}
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            >
                X
            </Button>
            <Figure style={{display:"flex"}}>
                <Image
                    src={profileUrl || "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                    style={{width: '10%', height: '100%',margin:"10px"}}
                    roundedCircle
                />
                <Figure.Caption>
                    <div style={{display:"flex",gap:"10px"}}>
                        <h3>{nickName ? nickName : "User"}</h3>
                        <a style={{margin:"0 5px"}}>
                            {dateString} {timeString}
                        </a>
                    </div>
                    <a style={{margin:"10px"}}>{comment? comment : "행복하게 살고싶다~~"}</a>
                </Figure.Caption>
            </Figure>
        </Container2>
    );
};

export default CommentBox;
