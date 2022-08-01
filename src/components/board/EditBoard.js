import {useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {editBoard} from './../../store.js'
import {useEffect, useState} from 'react'

function EditBoard(){
    let navigate = useNavigate();
    let state = useSelector((state)=>{return state})
    let dispatch=useDispatch();
    let {id} = useParams();
    let findedBoard = state.board.find((e)=>e.id==id)
    let [title,setTitle] = useState('');
    let [content,setContent] = useState('');

   useEffect(()=>{
        setTitle(findedBoard.title);
        setContent(findedBoard.content);
   },[])
    
    return(
        <div style={{textAlign:'center'}}>
            <h2>EditPage</h2>
            <div>
                <input type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <br></br>
            <div>
                <textarea name="content" style={{minHeight:"300px",minWidth:"500px"}} value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
            </div>
          
            <button onClick={()=>{dispatch(editBoard({id:id, title:title, content:content})); alert('수정완료'); navigate('/') } }>수정완료</button>
            
        </div>
    )
}

export default EditBoard