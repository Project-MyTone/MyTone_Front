import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { HiLockClosed } from 'react-icons/hi'
import { ErrorMessage } from '@hookform/error-message';
import { useSelector } from 'react-redux';
import { loginUser } from '../../api/url';
import { getRefreshToken, setRefreshToken } from '../../cookie/Cookie';
import { setAuthToken } from '../../store';

import { Button } from 'react-bootstrap'
import './SignIn.css'

function SignIn() {
    // let [passwordModal, setPasswordModal] = useState(false)
    // let [pw1, setPw1] = useState('')
    // let [pw2, setPw2] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let state = useSelector((state)=>state)
    // useForm 사용을 위한 선언
    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    // submit 이후 동작할 코드
    // 백으로 유저 정보 전달
    const onValid = async ({ username, password }) => {
        const response = await loginUser({ username, password });
        console.log(response)
        // if (response.status) {
        //     // 쿠키에 Refresh Token, store에 Access Token 저장
        //     setRefreshToken(response.json.token.refresh_token);
        //     dispatch(setAuthToken(response.json.token.access_token));

        //     return navigate("/");
        // } else {
        //     console.log(response.json);
        // }
        // // input 태그 값 비워주는 코드
        // setValue("password", "");
    };

    return (
        <div className='login'>
            <h3>회원 로그인</h3>
            <div className="login-box">
                <form onSubmit={ (e)=>{
                        e.preventDefault();
                        axios.post('/user/login/', {
                            username: e.target.username.value,
                            password: e.target.password.value,
                        })
                        .then((res)=>{
                            if(res.status==200){
                                alert(res.data.message)
                                setRefreshToken(res.data.token.refresh_token);
                                dispatch(setAuthToken(res.data.token.access_token));
                                navigate("/");
                            }
                        })
                        .catch((err)=>{
                            console.log(err)
                            setValue("password", "");
                        })
                    }}>
                    <div className='id-container'>
                        <div className="id">아이디</div>
                        <input
                            {...register("username", { required: "Please Enter Your ID" })}
                            type="text" name="username"
                        />
                        <ErrorMessage
                            name="userid"
                            errors={errors}
                            render={({ message }) =>
                                <p className="text-sm font-medium text-rose-500">
                                    {message}
                                </p>
                            }
                        />
                    </div>
                    <div className='pw-container'>
                        <div className="pw">비밀번호</div>
                        <input
                            {...register("password", { required: "Please Enter Your Password" })}
                            type="password" name="password"
                        />
                        <ErrorMessage
                            name="userid"
                            errors={errors}
                            render={({ message }) =>
                                <p className="text-sm font-medium text-rose-500">
                                    {message}
                                </p>
                            }
                        />
                    </div>
                    <div className="login-button">
                        <input type='submit' value='Login' />
                    </div>
                </form>
            </div>


        </div>
    );

}



export default SignIn