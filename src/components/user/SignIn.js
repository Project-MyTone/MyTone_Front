import { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import './SignIn.css'

function SignIn() {
    // let [passwordModal, setPasswordModal] = useState(false)
    // let [pw1, setPw1] = useState('')
    // let [pw2, setPw2] = useState('')


    return (
        <div className='login'>
            <h3>회원 로그인</h3>
            <div className="login-box">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    axios.post('/user/login', {
                        username: e.target.username.value,
                        password: e.target.password.value
                    })
                    .then((res) => {
                        if (res.status === 200) { //로그인 성공
                            console.log(res.data.message)
                            
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                }}>
                    <div className='id-container'>
                        <div className="id">아이디</div>
                        <input type="text" name="username" />
                    </div>
                    <div className='pw-container'>
                        <div className="pw">비밀번호</div>
                        <input type="password" name="password" />
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