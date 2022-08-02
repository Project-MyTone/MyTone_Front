import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {Button} from 'react-bootstrap'
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
        <div style={{padding:"50px 200px 50px 150px"}}>
            {
                findedState.map((a, i) => {
                    return (
                        <div style={{position:'relative',minHeight:'140px',borderBottom:'1px solid #E2E2E2',marginBottom:'35px'}}key={i}>
                            <div style={{display:'flex',justifyContent:'space-between', paddingBottom:"18px"}}>
                                <h4> {a.title}</h4>
                                <div style={{display:'flex',width:'250px',justifyContent:'space-around'}}>
                                    <div>작성일자 : {a.create_at}</div>
                                    <div>{a.user}</div>
                                </div>
                            </div>
                            <div style={{paddingBottom:'30px'}}>{a.content}</div>
                            <div style={{position:'absolute',right:'0px',bottom:'9px',display:'flex',justifyContent:'space-around',width:'130px'}}>
                                <Button style={{width:'60px',height:'30px',display:'flex',alignItems:'center'}} variant="light" onClick={() => { navigate('/edit/' + a.id) }}>수정</Button>
                                <Button style={{width:'60px',height:'30px',display:'flex', alignItems:'center'}} variant="danger" onClick={() => { dispatch(deleteArticle(a.id)) }}>삭제</Button>
                            </div>
                           
                        </div>
                    )
                })

            }
            <Button style={{display:'inherit',margin:'0 auto'}}onClick={() => { navigate("/post") }} variant="light">글쓰기</Button>
            
        </div>
    )
}





export default Article