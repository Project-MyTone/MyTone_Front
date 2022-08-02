import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { addArticle } from '../../store.js'
import {Dropdown} from 'react-bootstrap'

function ArticlePost() {
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [board, setBoard] = useState({ title: '', content: '', img: '', board: '', user: '', create_at: '' });
    let [category,setCategory] = useState('0')
    let dispatch = useDispatch();
    let navigate = useNavigate();
    
    
    return (
        <div style={{ textAlign: 'center' }}>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id='dropdown-variants-Secondary'>
                    {category=='0'?'Cool':'Warm'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>{setCategory('0')}}>Cool</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setCategory('1')}}>Warm</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div>
                <input type="text" name="title" onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <br></br>
            <div>
                <textarea name="content" style={{ minHeight: "300px", minWidth: "500px" }} onChange={(e) => { setContent(e.target.value) }}></textarea>
            </div>
            
            <button onClick={() => {
                const date = new Date();
                const year = date.getFullYear();
                const month = ('0' + (date.getMonth() + 1)).slice(-2);
                const day = ('0' + date.getDay()).slice(-2);
                const dateStr = year + '-' + month + '-' + day;

                let tmp = board;
                tmp.title = title;
                tmp.content = content;
                tmp.board = category;
                tmp.create_at = dateStr;
                setBoard(tmp);
                dispatch(addArticle(board))
                alert('작성완료')
                navigate('/board')
            }}>작성완료</button>
        </div>
    )
}
export default ArticlePost