import {configureStore,createSlice} from "@reduxjs/toolkit";


let articleCategory = createSlice({
    name : 'articleCategory',
    initialState : [{id:0,name:'cool'},{id:1,name:'warm'}],
})

let article = createSlice({
    name : 'article',
    initialState : [
        {id:0, title:'7월17일', content:'게시글1',img:'', board:'0',user:'kim'}, 
        {id:1, title:'9월24일', content:'게시글2',img:'',board:'1',user:'song'},
        {id:2, title:'5월25일', content:'게시글3',img:'', board:'1',user:'lee'},
        {id:3, title:'11월11일', content:'게시글4',img:'', board:'0',user:'bae'},
        {id:4, title:'12월25일', content:'게시글5',img:'', board:'1',user:'park'},
    ],
    reducers :{
        addArticle(state,action){
            let tmp=action.payload;
            tmp.id = state.at(-1).id+1;
            state.push(tmp)
        },
        editArticle(state,action){
            let finded = state.find((e)=>e.id==action.payload.id);
            finded.title = action.payload.title;
            finded.content = action.payload.content;
        },
        deleteArticle(state,action){
            let findedIndex = state.findIndex((e)=>e.id==action.payload);
            state.splice(findedIndex,1);
        }
    }
})


export let {addArticle,editArticle,deleteArticle} = article.actions

export default configureStore({
    reducer: {
        articleCategory : articleCategory.reducer,
        article : article.reducer
        
    }
})