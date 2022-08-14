
import {useNavigate, useParams} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import './ArticleEdit.css'
import axios from 'axios'

function ArticleEdit(){
    let navigate = useNavigate();
    let {id} = useParams();
    let [title,setTitle] = useState('');
    let [content,setContent] = useState('');
    let [createAt,setCreateAt] = useState('');
    let [boardId,setBoardId] = useState(0);
    let [user,setUser] = useState('');

    useEffect(()=>{
        axios.get(`/article/${id}`)
        .then((res)=>{
            if(res.status===200){
                setBoardId(res.data.id)
                setTitle(res.data.title);
                setContent(res.data.content);
                
                setUser(res.data.user.username);
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
   
    return(
        <>
        
        <div className='detail-top'>
            <div className='detail-header'>
            <Form.Group style={{width:'100%', margin:'0'}} className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label >제목</Form.Label>
            <Form.Control type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            </Form.Group>

            </div>
            <hr></hr>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>내용</Form.Label>
                <Form.Control style={{minHeight:"300px",minWidth:"500px"}} value={content} onChange={(e)=>{setContent(e.target.value)}} as="textarea" rows={3} />
            </Form.Group>
            
        </div>
        </>
    )
}

export default ArticleEdit