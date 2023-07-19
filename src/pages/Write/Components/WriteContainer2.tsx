import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";

const WriteContainer2 = ({ingredients,onChangeIngredients,addIngredients,deleteIngredients,delIdxIngredients}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                height: "300px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <Row className="mb-3" style={{display:"flex", flexWrap:"wrap"}}>
                <h4>재료목록</h4>

                {ingredients.map((ingredient, index) => (
                    <Form.Group controlId={`formGridIngredient${index}`} key={index} style={{ width: "250px", marginRight: "10px", marginBottom: "10px" }}>
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={`재료${index + 1}`}
                            style={{width: "250px"}}
                            value={ingredient}
                            onChange={(e) => onChangeIngredients(e, index)}
                        />
                    </Form.Group>
                ))}

            </Row>
            <div >
                <Button style={{margin:"5px",backgroundColor:"black"}} onClick={addIngredients}>재료 추가</Button>
                <Button style={{margin:"5px",backgroundColor:"black"}} onClick={deleteIngredients}>재료 삭제</Button>
            </div>
        </Container2>
    );
};

export default WriteContainer2;
