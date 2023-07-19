import {
    Container,
    SearchContainer,
    NavContainer,
    SearchInput,
    SearchButton,
    SearchForm
} from "./style";
import {useCallback} from "react";
import useInput from "../../hooks/useInput";
import {FaSearch} from "react-icons/fa";
import {Image} from "react-bootstrap"
import Logo from "../../public/Logo.png"
import {Link, useNavigate} from "react-router-dom";
import {LOGOUT_USER, UserState} from "../../redux/reducers/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../type/local";
import {useMutation, useQueryClient} from "react-query";
import {userLogOut} from "../../api/user";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [keyword, onKeyword, setKeyword] = useInput('')
    const { user }: { user: UserState["user"] } = useSelector(
        (state: RootState) => state.user
    );
    const {mutate:logOut_mutate} = useMutation(userLogOut, {
        onSuccess: () => {
            dispatch(LOGOUT_USER())
            navigate("/Login");
        },
    });
    const submitSearch = useCallback((e) => {
        e.preventDefault();
        setKeyword('')
    }, [])
    const onLogOut = useCallback(()=>{
        logOut_mutate()
    },[logOut_mutate])
    return (
        <Container>
            <SearchContainer>
                <a href="/">
                    <Image src={Logo} style={{width: "200px"}}/>
                </a>
                <SearchForm onSubmit={submitSearch}>
                    <SearchInput value={keyword} onChange={onKeyword}/>
                    <SearchButton>
                        <FaSearch/>
                    </SearchButton>
                </SearchForm>
                <Link to={'/Write'}>
                    <Image src="https://recipe1.ezmember.co.kr/img/tmn_write.png" roundedCircle/>
                </Link>
            </SearchContainer>
            <NavContainer>
                <Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/">
                    MAIN
                </Link>
                <Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/RecipeList">
                    RECIPE LIST
                </Link>
                <Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/RecipeRanking">
                    RECIPE RANKING
                </Link>
                <Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/Mypage">
                    MYPAGE
                </Link>
                {!user ?<Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/Login">
                        LOGIN
                    </Link>
                    :<Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} onClick={onLogOut} >
                        LOGOUT
                    </Link>
                }
            </NavContainer>
        </Container>
    );
};

export default Header;
