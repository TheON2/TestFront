import React, {useCallback, useState} from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Badge, Button, Image} from "react-bootstrap"
import {useMutation, useQueryClient} from "react-query";
import {deleteComment, deleteRecipe, likeRecipe} from "../../../api/recipes";
import {useNavigate} from "react-router-dom";

const DetailContainer1 = ({imageUrl, userId,nickName, userProfileUrl, title, subtitle,c1,c2,c3,c4,setUpdate,recipeId,userLiked}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const mutation = useMutation(deleteRecipe, {
        onSuccess: () => {
            queryClient.invalidateQueries(['recipes', recipeId]);
            alert('삭제되었습니다.')
            navigate('/')
        },
    });
    const like_mutation = useMutation(likeRecipe, {
        onSuccess: () => {
            queryClient.invalidateQueries(['recipe', recipeId]);
        },
    });//디스패치 사용 //레시피들 쿼리 비활성화

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const toggleLike = useCallback(() => {
        like_mutation.mutate({recipe_id: recipeId})
    },[like_mutation])

    const handleDelete = () => {
        mutation.mutate(recipeId);
    };
    return (
        <Container2
            id="maincontent"
            style={{
                height: "820px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                opacity: (isHovered && userId === nickName) ? '1' : '0',
                transition: 'opacity 0.3s',
                pointerEvents: (isHovered && userId === nickName) ? 'auto' : 'none'
            }}>
                <Button variant="outline-secondary" onClick={()=>{setUpdate(true)}} style={{marginRight: '5px'}}>Edit</Button>
                <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
            </div>
            <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px'
            }}>
                <Button variant={userLiked ? "primary" : "outline-primary"} onClick={toggleLike}>
                    {userLiked ? "Unlike" : "Like"}
                </Button>
            </div>
            <div style={{display:"flex", gap:"10px", margin:"10px", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <h1><Badge bg="secondary">{c1}</Badge></h1>
                <h1><Badge bg="secondary">{c2}</Badge></h1>
                <h1><Badge bg="secondary">{c3}</Badge></h1>
                <h1><Badge bg="secondary">{c4}</Badge></h1>
            </div>
            <div style={{position: 'relative', width: '60%', height: '50%', margin: '0 auto'}}>
                <Image
                    src={imageUrl ? imageUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                    style={{width: '100%', height: '100%'}}
                    fluid
                />
                <Image
                    src={userProfileUrl ? userProfileUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '42%',
                        width: '15%',
                        height: '25%',
                        border: '5px solid white'
                    }}
                    roundedCircle
                />
                <br/>
                <br/>
                <br/>
                <h2>{nickName ? nickName : "CookingMaser"}</h2>
            </div>
            <div style={{marginTop: "100px"}}>
                <br/>
                <br/>
                <h1 style={{textAlign:"center"}}>{title ? title : "대강 맛나보이는 음식이름 "}</h1>
                <br/>
                <h4 style={{textAlign: "center"}}>{subtitle ? subtitle : "대강 맛있습니다 해먹으십셔"}</h4>
            </div>
        </Container2>
    );
};

export default DetailContainer1;
