import {useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import './ArticleDetail.css'
import tmp_img from './../../img/tmp_img.png'
import axios from 'axios'
function ArticleDetail(props){ //게시판 상세 페이지
    let navigate = useNavigate();
    let {id} = useParams();
    let [title,setTitle] = useState('');
    let [content,setContent] = useState('');
    let [createAt,setCreateAt] = useState('');
    let [boardId,setBoardId] = useState(0);
    let [user,setUser] = useState('');
    let [image,setImage] = useState('');

    let accessToken=localStorage.getItem('accessToken');
    useEffect(()=>{
        axios.get(`/article/${id}`)
        .then((res)=>{
            if(res.status===200){
                console.log(res.data.images[0].image)
                setImage(res.data.images[0].image)
                setBoardId(res.data.id)
                setTitle(res.data.title);
                setContent(res.data.content);
                setCreateAt(formatDate(res.data.created_at));
                setUser(res.data.user.username);
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
   },[])
   
   function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
    }

    function deleteArticle(){
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        axios.delete(`/article/${id}`)
        .then((res)=>{
            if(res.status==204){
                alert('삭제되었습니다.')
                navigate('/board/list')
            }
            
        })
        .catch((err)=>{
            if(err.response.status==403){
                alert('본인의 게시물만 삭제 할 수 있습니다!')
            }
            else if(err.response.status==401){
                alert('권한이 없습니다!')
            }
        })
    }

    function editArticle(){
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        axios.patch(`/article/${id}/`,{
            title:'success',
            content:'ggg'
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    
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
                <Button variant="light" onClick={()=>{navigate(`/edit/${id}`)}}>수정</Button>
                <Button variant="danger" onClick={deleteArticle}>삭제</Button>
            </div>
            <div>
                <div className='img-container'>
                    <img src={image} style={{}}></img>
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