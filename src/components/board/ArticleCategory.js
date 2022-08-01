import { useState } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import './ArticleCategory.css'

function ArticleCategory(props){
    let state = useSelector((state)=>{return state})
    
    return(
        <div className='category'>
            <ul style={{position:"relative",top:"134px",paddingLeft:"44px",margin:"0px"}}>
            {
                state.articleCategory.map((a,i)=>{
                    return(
                        <li onClick={()=>{props.setCategory(a.id)}} style={{paddingBottom:"20px"}} key={i}>{a.name}</li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default ArticleCategory