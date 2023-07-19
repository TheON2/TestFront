import React, {useEffect} from 'react';
import Profile from "./Components/Profile/Profile";
import {Container2, LayOut, Container3} from "./style";
import {useMutation, useQueryClient} from "react-query";
import {userLogOut} from "../../api/user";
import {LOGOUT_USER} from "../../redux/reducers/userSlice";
import {getTestRecipes} from "../../api/recipes";

const Mypage = () => {
    const queryClient = useQueryClient();
    const {mutate:logOut_mutate} = useMutation(getTestRecipes, {
        onSuccess: (data) => {
            alert(data)
        },
    });

    useEffect(()=>{
        logOut_mutate()
    },[])

    return (
        <LayOut>
            <Profile nickName={"df"}/>
            <Container2>
                <Container3>
                    <h1>으악</h1>
                </Container3>
            </Container2>
        </LayOut>
    );
};

export default Mypage;
