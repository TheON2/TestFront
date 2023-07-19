import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";

const WriteContainer3 = ({contentArr, onChangeContentArr, addContentArr, deleteContentArr, delIdxContentArr}) => {
    const [hoveredIndices, setHoveredIndices] = useState([]);
    const [update, setUpdate] = useState(false);
    const endOfPageRef = useRef(null);

    const handleMouseEnter = (index) => {
        setHoveredIndices(prev => [...prev, index]);
    };

    const handleMouseLeave = (index) => {
        setHoveredIndices(prev => prev.filter(i => i !== index));
    };

    useEffect(() => {
        if (contentArr.length > 1 && update) {
            endOfPageRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [contentArr.length]);

    const addButton = useCallback(()=> {
        addContentArr()
        setUpdate(true)
    },[addContentArr,contentArr,update,setUpdate])

    const delButton = useCallback(()=> {
        deleteContentArr()
        setUpdate(true)
    },[deleteContentArr,contentArr,update,setUpdate])

    return (
        <>
            {contentArr.map((contentArr, index) => (
                <Container2
                    id="maincontent"
                    style={{
                        height: "300px",
                        backgroundColor: "white",
                        margin: "20px",
                        padding: "20px",
                        position:"relative"
                    }}
                >
                    <Button
                        style={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            backgroundColor:"black",
                            opacity: hoveredIndices.includes(index) ? 1 : 0,
                            transition: "opacity 0.5s"
                        }}
                        onClick={() => delIdxContentArr(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        X
                    </Button>
                    <Form.Group as={Col} controlId={`formGridIngredient${index}`} key={index}>
                        <Form.Label><h3>{index === 0 ? "레시피 순서" : " "}</h3></Form.Label>
                        <h1>STEP {index + 1}</h1>
                        <div >
                            <Form.Control
                                as="textarea"
                                rows={8}
                                type="text"
                                placeholder={`STEP${index + 1}`}
                                style={{width: "95%", resize: "none"}}
                                value={contentArr}
                                onChange={(e) => onChangeContentArr(e, index)}
                            />
                        </div>
                    </Form.Group>
                </Container2>
            ))}
            <div style={{margin:"0 20px"}}>
                <Button style={{margin:"5px",backgroundColor:"black"}} onClick={addButton}>단계추가</Button>
                <Button style={{margin:"5px",backgroundColor:"black"}} onClick={delButton}>단계삭제</Button>
            </div>
            <div ref={endOfPageRef}></div>
        </>
    );
};

export default WriteContainer3;
