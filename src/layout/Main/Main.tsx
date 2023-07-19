import React, {useEffect} from "react";
import Header from "../Header/Header";
import {Outlet, useNavigate} from "react-router-dom";
import {
    GlobalStyle,
    MainContainer,
Root
} from "./style";
import Footer from "../Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {AUTH_USER, UserResponse, UserState} from "../../redux/reducers/userSlice";
import {RootState} from "../../type/local";
import {useQuery, UseQueryResult} from "react-query";
import {getAuthToken} from "../../api/user";

const Main = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user }: { user: UserState["user"] } = useSelector(
        (state: RootState) => state.user
    );
    const {
        data: userData,
        isSuccess: tokenSuccess,
    }: UseQueryResult<UserResponse, unknown> = useQuery("user", getAuthToken, {
        cacheTime: 0,
    });
    useEffect(() => {
        if (tokenSuccess) {
            dispatch(AUTH_USER(userData));
        } else if (user.token === undefined) {
            navigate("/Login");
        }
    }, [user.token, tokenSuccess, dispatch, navigate, userData]);

    return (
        <Root>
            <GlobalStyle/>
            <Header title={"The Todo"} stack={"React"}/>
            <MainContainer>
                <Outlet />
            </MainContainer>
            <Footer/>
        </Root>
    );
};

export default Main;
