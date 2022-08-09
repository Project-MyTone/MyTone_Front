import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { logoutUser } from '../../api/url';
import { getCookieToken,removeCookieToken } from '../../cookie/Cookie';
import { deleteToken } from '../../store';

function SignOut(){
    const {accessToken} = useSelector(state=>state.token);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const refreshToken = getCookieToken();

    async function logout(){
        const response = await logoutUser(refreshToken);
        
        if(response.status){
            dispatch(deleteToken());
            removeCookieToken();
            return navigate('/signup');
        }else{
            alert('로그아웃 실패ㅜ.ㅜ');
        }
    }
    useEffect(()=>{
        logout()
    },[]);

    return(
        <>
            <Link to="/signup" />
        </>
    )
}

export default SignOut