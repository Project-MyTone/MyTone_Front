import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
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
        //console.log(findedState)
    }


    function previewContent(e){
        if (e.length > 180){    
            let tmp_content = e.substr(0,180) + '...';
            return tmp_content
        }
        return e
    }
    return (
        <div className='article-top'>
            <h2 style={{ marginBottom: '100px' }}>{props.category == -1 ? 'every' : props.category == 0 ? 'cool' : 'warm'}</h2>

            {
                findedState.length == 0
                    ?
                    <div style={{height:'130px'}}>게시글이 없습니다 ㅜㅜ</div>
                    :
                    <div>
                        {
                            findedState.map((a, i) => {
                                return (
                                    <div className='article-contents' key={i}>
                                        <div className='article-header'>
                                            <p style={{fontWeight:'bold'}}>{a.title}</p>
                                            <div>
                                                <div>작성일자 : {a.create_at}</div>
                                                <div>작성자 : {a.user}</div>
                                            </div>
                                        </div>

                                        <div className='article-body' onClick={() => { navigate('/detail/' + a.id) }} >{previewContent(a.content)}</div>
                                        

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