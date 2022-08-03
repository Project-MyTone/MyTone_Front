import { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import './SignUp.css'
function SignUp() {
    let [passwordModal, setPasswordModal] = useState(false)
    let [pw1, setPw1] = useState('')
    let [pw2, setPw2] = useState('')

    useEffect(() => {
        if (pw1 != pw2 && pw2.length > 0) {
            setPasswordModal(true)
        }
        else {
            setPasswordModal(false)
        }
    }, [pw1, pw2])
    return (
        <div className="signUp">
            <form action="/"
                onSubmit={function (e) {
                    e.preventDefault();
                    axios.post('/user/register', {
                        username: e.target.username.value,
                        password1: e.target.password1.value,
                        password2: e.target.password2.value,
                        nickname: e.target.nickname.value,
                        gender: e.target.gender.value
                    }).then((res) => {
                        if (res.status === 201) { // 가입 성공
                            alert(res.message);
                        } else { // 가입 실패
                            alert('가입 실패!!');
                        }
                    }).catch((err) => {
                        console.log(err);
                    })
                }}
            >
                <table style={{margin:'0 auto'}}>
                    <tr>
                        <td>아이디:</td>
                        <td>
                            <input type="text" name="username" placeholder="username"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호:</td>
                        <td>                
                            <input type="password" name="password1" placeholder="password1" onChange={(e) => { setPw1(e.target.value) }}></input>
                            </td>
                    </tr>
                    <tr>
                        <td>비밀번호 확인:</td>
                        <td>                    
                            <input type="password" name="password2" placeholder="password2" onChange={(e) => { setPw2(e.target.value) }}></input>
                        </td>
                    </tr>
                    {
                        passwordModal == true ? <div className="alert alert-warning">일치하는 비밀번호를 입력해주세요</div> : null
                    }

                    <tr>
                        <td>닉네임:</td>
                        <td>
                            <input type="text" name="nickname" placeholder="nickname"></input>
                            </td>
                    </tr>
                    <tr>
                        <td>성별</td>
                        <td>
                            <input type='radio' name='gender' value='female' />여성
                            <input type='radio' name='gender' value='male' />남성
                        </td>
                    </tr>
                    
                </table>
                <div style={{display:'flex',justifyContent:'center'}}>
                        <input type="submit" value="Sign up!"></input>
                </div>
            </form>
        </div>
    );

}



export default SignUp