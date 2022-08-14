import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { addArticle } from '../../store.js'
import {Dropdown,Button} from 'react-bootstrap'
import './ArticlePost.css'
import axios from 'axios';
function ArticlePost() {
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [image,setImage] = useState(''); // 이미지
    let [category,setCategory] = useState(1);
    
    let dispatch = useDispatch();
    let navigate = useNavigate();
    
    let accessToken=localStorage.getItem('accessToken');

    let onLoadFile = (e)=>{ // 이미지
        const file = e.target.files;
        //console.log(file);
        setImage(file);
    }

    
    return (
        <div className='post-top'>
            <div className="post-header">
                <div>
                    <input type="text" name="title" onChange={(e) => { setTitle(e.target.value) }} />
                </div>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id='dropdown-basic'>
                        {
                        category=='1'
                        ?'여름 쿨톤'
                        :category=='2'
                        ?'겨울 쿨톤'
                        :category=='3'
                        ?'가을 웜톤'
                        :'봄 웜톤'
                        }
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        
                        <Dropdown.Item onClick={()=>{setCategory(1)}}>여름 쿨톤</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setCategory(2)}}>겨울 쿨톤</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setCategory(3)}}>가을 웜톤</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setCategory(4)}}>봄 웜톤</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <br></br>
            <div style={{width:'100%', height:'75%',marginBottom:'15px'}}>
                <textarea style={{width:'100%', height:'100%'}} name="content" onChange={(e) => { setContent(e.target.value) }}></textarea>
            </div>
            <form>
                <input type='file' accept="img/*" onChange={onLoadFile}></input>
            </form>
            <Button variant="light" onClick={() => {
                const formdata = new FormData();
                console.log(image[0]); //이미지
                formdata.append('image',image[0]); //이미지
                formdata.append('title',title);
                formdata.append('content',content);
                formdata.append('board',parseInt(category));

                // var object={}
                // formdata.forEach((value,key)=>{
                //     object[key]=value
                // })
                // console.log(object.images)

                // const id = 1;
                // const image = object.images.
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
                
                axios.post('/article/',formdata,{
                    headers : {
                        "Content-Type" : "multipart/form-data"
                    }
                })            
                .then((res)=>{
                    if(res.status==201){
                        alert(res.statusText)
                        navigate('/board/list')
                    }
                })
                .catch((err)=>{
                    
                    alert('게시글을 작성하려면 로그인이 필요합니다')
                    navigate('/signin')
                    
                })
                
                }}>작성완료</Button>
        </div>
    )
}
export default ArticlePost