import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button } from 'react-bootstrap'
import { deleteArticle } from '../../store.js'
import './Article.css'
function Article(props) {
    let state = useSelector((state) => { return state })
    let navigate = useNavigate()
    let dispatch = useDispatch();
    let findedState;

    if (props.category == -1) {
        findedState = state.article;
    }
    else {
        findedState = state.article.filter((e) => e.board == props.category);
        console.log(findedState)
    }



    return (
        <div className='article-top'>
            <h2 style={{ marginBottom: '100px' }}>{props.category == -1 ? 'every' : props.category == 0 ? 'cool' : 'warm'}</h2>

            {
                findedState.length == 0
                    ?
                    <div>게시글이 없습니다 ㅜㅜ</div>

                    :
                    <div>
                        {
                            findedState.map((a, i) => {
                                return (
                                    <div className='article-contents' key={i}>
                                        <div className='article-header'>
                                            <h3> {a.title}</h3>
                                            <div>
                                                <div>작성일자 : {a.create_at}</div>
                                                <div>{a.user}</div>
                                            </div>
                                        </div>
                                        <div className='article-body' onClick={() => { navigate('/detail/' + a.id) }} >{a.content}</div>
                                        {/* <div style={{position:'absolute',right:'0px',bottom:'9px',display:'flex',justifyContent:'space-around',width:'130px'}}>
                                <Button style={{width:'60px',height:'30px',display:'flex',alignItems:'center'}} variant="light" onClick={() => { navigate('/edit/' + a.id) }}>수정</Button>
                                <Button style={{width:'60px',height:'30px',display:'flex', alignItems:'center'}} variant="danger" onClick={() => { dispatch(deleteArticle(a.id)) }}>삭제</Button>
                            </div> */}

                                    </div>
                                )
                            })

                        }

                    </div>
            }


            <Button style={{ display: 'inherit', margin: '0 auto' }} onClick={() => { navigate("/post") }} variant="light">글쓰기</Button>
        </div>
    )
}





export default Article