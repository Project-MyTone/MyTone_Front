import {useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { deleteArticle } from '../../store.js'
import {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import './ArticleDetail.css'
import tmp_img from './../../img/tmp_img.png'

function ArticleDetail(props){ //게시판 상세 페이지
    let navigate = useNavigate();
    let state = useSelector((state)=>{return state})
    let dispatch=useDispatch();
    let {id} = useParams();
    let findedBoard = state.article.find((e)=>e.id==id)
    let [title,setTitle] = useState('');
    let [content,setContent] = useState('');
    let [createAt,setCreateAt] = useState('');
    let [user,setUser] = useState('');
   
    useEffect(()=>{
        setTitle(findedBoard.title);
        setContent(findedBoard.content);
        setCreateAt(findedBoard.create_at);
        setUser(findedBoard.user);
   },[])
    
    return(
        <>
        
        <div className='detail-top'>
            <div className='detail-header'>
                <div style={{fontWeight:'bold'}}>{title}</div>
                <div className="header-detail">
                    <div>작성일자 : {createAt}</div>
                    <div>{user}</div>
                </div>
            </div>
            <hr></hr>
            <div className='button-container'>
                <Button variant="light" onClick={() => { navigate('/edit/' + findedBoard.id) }}>수정</Button>
                <Button variant="danger" onClick={() => { dispatch(deleteArticle(findedBoard.id)); alert('삭제되었습니다'); navigate('/board/list')}}>삭제</Button>
            </div>
            <div>
                <div className='img-container'>
                    <img src={tmp_img}></img>
                </div>
                <div style={{minHeight:"150px"}}>{content}</div>
            </div>
            <hr></hr>
            <h4>댓글</h4>
            
        </div>
        </>
    )
}

export default ArticleDetail