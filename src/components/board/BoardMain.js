import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import Article from './Article.js'
import ArticleCategory from './ArticleCategory.js'
import './BoardMain.css'

function BoardMain(){
    let [category,setCategory] =  useState(-1);
    return(
        <div>
            <div className='category'>
                <ArticleCategory setCategory={setCategory}></ArticleCategory>
            </div>
            <Article category={category}></Article>
        </div>
    )
}

export default BoardMain