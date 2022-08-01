import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router';
import {addBoard} from './../../store.js'

function BoardPost(){
    let [title,setTitle] = useState('');
    let [content,setContent] = useState('');
    let [board,setBoard] = useState({title:'',content:''});
    let dispatch=useDispatch();
    let navigate = useNavigate();
    return(
        <div style={{textAlign:'center'}}>
            <div>
                <input type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <br></br>
            <div>
                <textarea name="content" style={{minHeight:"300px",minWidth:"500px"}} onChange={(e)=>{setContent(e.target.value)}}></textarea>
            </div>
            <button onClick={()=>{
                let tmp = board;
                tmp.title=title;
                tmp.content=content;
                setBoard(tmp);
                dispatch(addBoard(board))
                alert('작성완료')
                navigate('/')
            }}>작성완료</button>
        </div>
    )
}
export default BoardPost