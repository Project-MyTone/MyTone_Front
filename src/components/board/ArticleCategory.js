import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Offcanvas } from 'react-bootstrap'
import './ArticleCategory.css'

function ArticleCategory(props) {
    let state = useSelector((state) => { return state })
    let [show, setShow] = useState(true)
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);


    return (
        <div>
            <Offcanvas style={{width:'15vw'}}show={show} onHide={handleClose} scroll={true} backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>카테고리</Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body className='category-top'>
                    <div className="category-list" onClick={() => { props.setCategory(-1)}}>every</div>
                    {
                        state.articleCategory.map((a, i) => {
                            return (
                                <div className="category-list" onClick={() => { props.setCategory(a.id) }} key={i}>{a.name}</div>
                            )
                        })
                    }
                
                </Offcanvas.Body>
                <div className="closeButton-container">
                    <button className="closeButton" onClick={toggleShow}>
                        x
                    </button>
                </div>
            </Offcanvas>
            <div className="openButton-container">
                <button className="openButton" onClick={toggleShow}>      
                </button>
            </div>
            
        </div>
    )
}

export default ArticleCategory