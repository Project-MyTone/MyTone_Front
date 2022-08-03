import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import Article from './Article.js'
import ArticleCategory from './ArticleCategory.js'


function BoardMain(props){
    
    return(
        <div>
            <ArticleCategory setCategory={props.setCategory}></ArticleCategory>
            <Article category={props.category}></Article>
        </div>
    )
}

export default BoardMain