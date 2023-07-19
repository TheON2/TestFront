import {ProfileContainer, ProfilePicture, UserName} from "./style";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import { useDispatch, useSelector} from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import {userLogOut} from "../../../../api/user";
import {LOGOUT_USER} from "../../../../redux/reducers/userSlice";
import {RootState} from "../../../../type/local";
import CustomButton from "../../../../components/CustomButton/CustomButton";

interface ProfileProps{
  nickName:string|null,
}

const Profile =({nickName}:ProfileProps)=>{
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {mutate:logOut_mutate} = useMutation(userLogOut, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
      dispatch(LOGOUT_USER())
      navigate("/Login");
    },
  });
  const navigate = useNavigate();
  const { imageUrl,profileContent } = useSelector((state:RootState)=>state.user.user)
  const onLogOut = useCallback(()=>{
    logOut_mutate()
  },[logOut_mutate])

  return(<div>
    <ProfileContainer className="profile block">
      <ProfilePicture >
        {imageUrl!==null ?
            <img src={`${imageUrl}`} style={{ width: '200px' }} alt={imageUrl} />
         : <img width="150px" alt="Anne Hathaway picture" src="https://avatars.githubusercontent.com/u/32028454?s=400&u=7993b49546f6ebb45968dbafa6c97c5789ec2254&v=4" />
        }
      </ProfilePicture>
      <UserName >{nickName}</UserName>
      <div className="profile-description">
        <p className="scnd-font-color">{profileContent}</p>
      </div>
      <div>
      </div>
      <CustomButton theme={'type2'} size={'small'} onClick={onLogOut}>LogOut</CustomButton>
    </ProfileContainer>
  </div>)
}

export default Profile