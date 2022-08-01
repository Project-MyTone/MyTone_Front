import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { deleteArticle } from '../../store.js'

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
        <div style={{ textAlign: 'center' }}>

            {
                findedState.map((a, i) => {
                    return (
                        <div key={i}>
                            <h3> {a.title}</h3>
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