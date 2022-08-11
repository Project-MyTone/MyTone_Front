import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { logoutUser } from '../../api/url';
import { getRefreshToken,removeRefreshToken } from '../../cookie/Cookie';
import { deleteAuthToken } from '../../store';

function SignOut(){
    const {accessToken} = useSelector(state=>state.token);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const refreshToken = getRefreshToken();

    function logout(){
        removeRefreshToken();
        dispatch(deleteAuthToken());
        alert('로그아웃 되었습니다')
        // const response = await logoutUser(refreshToken);
        
        // if(response.status){
        //     dispatch(deleteToken());
        //     removeCookieToken();
        //     return navigate('/signup');
        // }else{
        //     alert('로그아웃 실패ㅜ.ㅜ');
        // }
    }
   

    return(
        <>
            <button onClick={logout             
            }>로그아웃</button>
        </>
    )
}

export default SignOut