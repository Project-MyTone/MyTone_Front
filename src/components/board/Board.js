import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import {useDispatch} from 'react-redux'
import {deleteBoard} from './../../store.js'

function Board(){
    let state = useSelector((state)=>{return state})
    let navigate = useNavigate()
    let dispatch = useDispatch();
    return(
        <div style={{textAlign:'center'}}>
            
            {
                state.board.map((a,i)=>{
                    return(
                        <div key={i}>
                            <h3> {a.title}</h3>
                            <div>{a.content}</div>
                            <button onClick={()=>{navigate('/edit/'+a.id)}}>수정</button>
                            <button onClick={()=>{dispatch(deleteBoard(a.id))}}>x</button>
                            <hr></hr>
                        </div>
                    )
                })
            }
            <button onClick={()=>{navigate("/post")}}>글쓰기</button>
        </div>
    )
}
export default Board