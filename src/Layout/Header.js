import './Header.css';
import {Container, Nav, Navbar, Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import SignOut from '../components/user/SignOut';

function Header() {
    let navigate = useNavigate();
    const userID = localStorage.getItem('UserID');

    return(
        <>
            <div className="Title">
                <div className="ProjectName" style={{display:"inline"}}>myTone</div>
                <ButtonGroup className="LogMenu" size="sm">
                    {
                        localStorage.getItem('accessToken')!=null
                        ?
                        <>
                            <SignOut></SignOut>
                            <Button style={{backgroundColor: "transparent", border:"none", color:"#CD5C5C"}} 
                                onClick={()=>{navigate(`/userInfo/${userID}`)}}>USER INFO</Button>
                        </>
                        :
                        <>
                            <Button href='/signin'className="SignIn" style={{backgroundColor: "transparent", border:"none", color:"#CD5C5C"}}>SIGN IN</Button>
                            <Button href='/signup' className="SignUp" style={{backgroundColor: "transparent", border:"none", color:"#CD5C5C"}}>SIGN UP</Button>
                        </>
                    }
                    
                </ButtonGroup>
            </div>
            <Navbar bg="light" variant="light">
                <Container>
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/image')}}>테스트</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/board/list')}}>게시판</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
