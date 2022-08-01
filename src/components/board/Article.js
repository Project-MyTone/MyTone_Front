import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { deleteArticle } from '../../store.js'
import './Article.css'
function Article(props) {
    let state = useSelector((state) => { return state })
    let navigate = useNavigate()
    let dispatch = useDispatch();
    let findedState;
    if(props.category==-1){
        findedState = state.article;
    }
    else{
        findedState=state.article.filter((e)=>e.board==props.category);
    }
    return (
        <div style={{padding:"50px",width:"85%",height:'100vh'}}>
            {
                findedState.map((a, i) => {
                    return (
                        <div key={i}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <h3> {a.title}</h3>
                                <div style={{display:'flex',width:'250px',justifyContent:'space-around'}}>
                                    <div>작성일자 : {a.create_at}</div>
                                    <div>{a.user}</div>
                                </div>
                            </div>
                            <div>{a.content}</div>
        
                            <button onClick={() => { navigate('/edit/' + a.id) }}>수정</button>
                            <button onClick={() => { dispatch(deleteArticle(a.id)) }}>x</button>
                            <hr></hr>
                        </div>
                    )
                })

            }
            <button onClick={() => { navigate("/post") }}>글쓰기</button>
        </div>
    )
}





export default Article