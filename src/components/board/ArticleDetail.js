import {useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Button, InputGroup, Form } from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { removeRefreshToken } from '../../cookie/Cookie'
import { deleteAuthToken } from '../../store'
import './ArticleDetail.css'

import axios from 'axios'

function Comment(props){
    let [comment,setComment] = useState('');
    let [commentList,setCommentList] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get(`/comment/?limit=20&offset=0`)
        .then((res)=>{
            if(res.status==200){
                setCommentList(res.data.results.filter((e) => e.article == props.id))
                
                console.log(res.data.results.filter((e) => e.article == props.id))
                //console.log(res.data.results)
            }
        })
        .catch((err)=>{console.log(err)})

    },[])

    return(
        <div className='comment-top'>
            <h4>댓글</h4>
            
                {
                    
                    commentList.map((a,i)=>{
                        return(
                            
                            <div key={i} className='comment'>
                                <div className='comment-content'>
                                    <div style={{fontSize:'large'}}>{a.body}</div>
                                </div>
                                <div>작성자 : {a.user}</div>
                            </div>
                            
                        )
                    })
                }
            
            <InputGroup className="mb-3" style={{ height: '44px', width: '100%', minWidth: '350px' }}>
                    <Form.Control
                        placeholder="댓글을 작성해주세요"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onClick={(e)=>{e.target.value=''}}
                        onChange={(e) => {setComment(e.target.value)}}
                    />
                    
                    <Button variant="outline-secondary" id="button-addon2" onClick={() => {
                        axios.defaults.headers.common['Authorization'] = `Bearer ${props.accessToken}`
                        axios.post('/comment/',{
                            body:comment,
                            article:props.id
                        })
                        .then((res)=>{
                            if(res.status==201){
                                console.log(res)
                                window.location.reload()
                            }
                            
                        })
                        .catch((err)=>{
                            console.log(err)
                            if(err.status==401){
                                alert('로그인을 해주세요')
                                removeRefreshToken();
                                dispatch(deleteAuthToken());
                                window.location.reload()
                            }
                        
                        })
                    }}>
                        등록
                    </Button>

            </InputGroup>
        </div>
    )

}
function ArticleDetail(props){ //게시판 상세 페이지
    let navigate = useNavigate();
    let {id} = useParams();
    let [title,setTitle] = useState('');
    let [content,setContent] = useState('');
    let [createAt,setCreateAt] = useState('');
    let [boardId,setBoardId] = useState(0);
    let [user,setUser] = useState('');
    let [image,setImage] = useState([]);

    const accessToken=localStorage.getItem('accessToken');
    useEffect(()=>{
        axios.get(`/article/${id}`)
        .then((res)=>{
            if(res.status===200){
                
                if(res.data.images.length!=0){
                    setImage(res.data.images)
                }
               
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
                window.location.reload();
            }
        })
    }

    function checkAuth(){
        if(accessToken!=null){
            navigate(`/edit/${id}`)
        }else{
            alert('로그인 후 수정 할 수 있습니다')
        }
    }

    
    return(
        <>
        
        <div className='detail-top'>
            <div className='detail-header'>
                <div style={{fontWeight:'bold',fontSize:'larger'}}>{title}</div>
                <div className="header-detail">
                    <div>작성일자 : {createAt}</div>
                    <div>{user}</div>
                </div>
            </div>
            <hr></hr>
            <div className='button-container'>
                <Button variant="light" onClick={checkAuth}>수정</Button>
                <Button variant="danger" onClick={deleteArticle}>삭제</Button>
            </div>
            <div>
                {
                    image.length!=0
                    ?
                    <div className='img-container'>
                        {
                           
                            image.map(function(a,i){
                                return(
                                    <img key={i} src={a.image}></img>
                                )
                            })
                        }
                        
                    </div>
                    :
                    null
                }
                <div style={{minHeight:"150px",fontSize:'large'}}>{content}</div>
            </div>
            <hr></hr>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button variant="light" onClick={()=>{navigate('/board/list'); props.setCategory(0)}}>목록</Button>
            </div>
            <Comment id={id} accessToken={accessToken}></Comment>
            
        </div>
        </>
    )
}

export default ArticleDetail