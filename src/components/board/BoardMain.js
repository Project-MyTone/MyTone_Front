import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import Article from './Article.js'
import ArticleCategory from './ArticleCategory.js'


function BoardMain(){
    let [category,setCategory] =  useState(-1);
    return(
        <div style={{display:'flex'}}>
            <ArticleCategory setCategory={setCategory}></ArticleCategory>
            <Article category={category}></Article>
        </div>
    )
}

export default BoardMain