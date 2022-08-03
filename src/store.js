import {configureStore,createSlice} from "@reduxjs/toolkit";


let articleCategory = createSlice({
    name : 'articleCategory',
    initialState : [{id:0,name:'cool'},{id:1,name:'warm'}],
})

let article = createSlice({
    name : 'article',
    initialState : [
        {id:0, title:'피부톤', content:`사람의 피부톤과 가장 어울리는 색상을 찾는 색채학 이론이다. 피부톤에 어울리는 색을 웜톤 쿨톤이나 봄, 여름, 가을, 겨울로 나누어 부르는 것이 바로 이 퍼스널 컬러를 기반으로 한 것이다
        오프라인 진단을 할 때도 주의해야 할 점이 있다. 진단하는데 쓰이는 진단 천은 개수와 색이 한정적이다. 좋지 않은 경우에는 진단천에 자신이 아주 잘 어울리`,img:'', board:'0',user:'kim',create_at:'2022-08-01'}, 
        {id:1, title:'컬러 인쇄', content:`이후로 컬러 인쇄가 보편화되면서 많은 사람들이 이 이론을 피부톤에 접목시키는 저서를 내놓았고, 이것은 서양에서 하나의 연구 주제로 발전했다. 서양에서
        컬러 인쇄가 보편화되면서 많은 사람들이 이 이론을 피부톤에 접목시키는 저서를 내놓았고 진단하는데 쓰이는 진단 천은 개수와 색이 한정적이다. 오프라인 진단을 할 때도 주의해야 할 점이 있다. 
        진단하는데 쓰이는 진단 천은 개수와 색이 한정적이다`,img:'',board:'1',user:'song',create_at:'2022-07-01'},
        {id:2, title:'사계절 분류', content:'사계절 분류는 서양에서 만들어졌기 때문에 눈동자와 머리색이 제각각 다른 백인을 기준으로 한다. 그래서 한국인에게는 안 맞을 수 있다. 색을 인지하는 것도',img:'', board:'1',user:'lee',create_at:'2022-06-25'},
        {id:3, title:'퍼스널 컬러 진단', content:'퍼스널 컬러 진단은 개인에게 잘 어울리는 색을 찾는 방법이며 오프라인 진단과 온라인 진단이 있지만 온라인 진단은 사람의 다양한 특성을 반영하지 못하고',img:'', board:'0',user:'bae',create_at:'2022-05-14'},
        {id:4, title:'오프라인 진단', content:'오프라인 진단을 할 때도 주의해야 할 점이 있다. 진단하는데 쓰이는 진단 천은 개수와 색이 한정적이다. 좋지 않은 경우에는 진단천에 자신이 아주 잘 어울리',img:'', board:'1',user:'park',create_at:'2022-01-01'},
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