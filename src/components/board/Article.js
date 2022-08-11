import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { addArticle,deleteArticle } from '../../store.js'
import axios from 'axios'
import './Article.css'

function Article(props) {
    let state = useSelector((state) => { return state }) //redux에서 state 가져오기
    let navigate = useNavigate()
    let dispatch = useDispatch();
    let findedState; //선택한 카테고리에 따라 게시판이 저장될 변수
    let [articleCount,setArticleCount] = useState(0);
    useEffect(()=>{
        axios.get('/article')
        .then((res)=>{
            console.log(res.data.results)
            dispatch(addArticle(res.data.results))
            setArticleCount(res.data.count)
        })
    },[])

    if (props.category == -1) { // category가 every(-1)인 경우 
        findedState = state.article;
    }
    else {
        findedState = state.article.filter((e) => e.board == props.category); //redux의 article 에서 선택된 category 찾음
        //console.log(findedState)
    }


    function previewContent(e){ // 게시글 내용이 180자 넘어가면 ...으로 표시
        if (e.length > 180){    
            let tmp_content = e.substr(0,180) + '...';
            return tmp_content
        }
        return e
    }

    return (
        <div className='article-top'>
            <h2 style={{ marginBottom: '100px' }}>
                {
                    props.category == 0 
                    ? '전체' 
                    : props.category == 1 
                    ? '여름 쿨톤' 
                    :  props.category == 2
                    ? '겨울 쿨톤' 
                    :  props.category == 3
                    ? '가을 웜톤' 
                    :  props.category == 4
                    ? '봄 웜톤' 
                    : ''
                }
            </h2>
            
            <div style={{height:'130px'}}>전체 게시글 수 : {articleCount}</div>
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
                                        {/* <div className='article-body' onClick={() => { navigate('/board/detail/' + a.id) }} >
                                            {previewContent(a.content)}
                                        </div> */}
                                    </div>
                                )
                            })

                        }

                    </div>
            }
            <Button style={{ display: 'inherit', margin: '0 auto' }} onClick={() => { navigate("/post") }} variant="light">
                글쓰기
            </Button>
        </div>
    )
}

export default Article