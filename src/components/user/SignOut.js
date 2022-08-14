import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from 'react-bootstrap'
import { getRefreshToken,removeRefreshToken } from '../../cookie/Cookie';
import { deleteAuthToken } from '../../store';

function SignOut(){
    
    const dispatch = useDispatch();

    function logout(){
        removeRefreshToken();
        dispatch(deleteAuthToken());
        window.location.reload()
        alert('로그아웃 되었습니다');
        
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
            <Button style={{backgroundColor: "transparent", border:"none", color:"#CD5C5C"}} onClick={logout             
            }>SIGN OUT</Button>
        </>
    )
}

export default SignOut