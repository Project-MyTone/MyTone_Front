import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Offcanvas } from 'react-bootstrap'
import './ArticleCategory.css'

function ArticleCategory(props) {
    let state = useSelector((state) => { return state })
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    return (
        // <div className='category'>
        //     <ul style={{position:"relative",top:"134px",paddingLeft:"44px",margin:"0px"}}>
        //     {
        //         state.articleCategory.map((a,i)=>{
        //             return(
        //                 <li onClick={()=>{props.setCategory(a.id)}} style={{paddingBottom:"20px"}} key={i}>{a.name}</li>
        //             )
        //         })
        //     }
        //     </ul>
        // </div>
        <div>
            
            <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>카테고리</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div className="category-list" onClick={() => { props.setCategory(-1) }}>every</div>
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