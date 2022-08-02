import './Header.css';
import {Container, Nav, Navbar, Button, ButtonGroup } from 'react-bootstrap';

function Header() {
    return(
        <>
            <div className="Title">
                <div className="ProjectName" style={{display:"inline"}}>myTone</div>
                <ButtonGroup className="LogMenu" size="sm">
                    <Button className="SignIn" style={{backgroundColor: "transparent", border:"none", color:"#CD5C5C"}}>SIGN IN</Button>
                    <Button className="SignUp" style={{backgroundColor: "transparent", border:"none", color:"#CD5C5C"}}>SIGN UP</Button>
                </ButtonGroup>
            </div>
            <Navbar bg="light" variant="light">
                <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">홈</Nav.Link>
                    <Nav.Link href="#features">테스트</Nav.Link>
                    <Nav.Link href="#pricing">게시판</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
