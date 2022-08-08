import {configureStore,createSlice} from "@reduxjs/toolkit";


let articleCategory = createSlice({
    name : 'articleCategory',
    initialState : [{id:0,name:'spring-warm'},{id:1,name:'summer-cool'},{id:2,name:'fall-warm'},{id:3,name:'winter-cool'}],
})

let article = createSlice({
    name : 'article',
    initialState : [
        {id:0, title:'피부톤', content:`사람의 피부톤과 가장 어울리는 색상을 찾는 색채학 이론이다. 피부톤에 어울리는 색을 웜톤 쿨톤이나 봄, 여름, 가을, 겨울로 나누어 부르는 것이 바로 이 퍼스널 컬러를 기반으로 한 것이다
        오프라인 진단을 할 때도 주의해야 할 점이 있다. 진단하는데 쓰이는 진단 천은 개수와 색이 한정적이다. 좋지 않은 경우에는 진단천에 자신이 아주 잘 어울리`,
        img:'', board:'0',user:'kim',create_at:'2022-08-01'}, 
        {id:1, title:'컬러 인쇄', content:`이후로 컬러 인쇄가 보편화되면서 많은 사람들이 이 이론을 피부톤에 접목시키는 저서를 내놓았고, 이것은 서양에서 하나의 연구 주제로 발전했다. 서양에서
        컬러 인쇄가 보편화되면서 많은 사람들이 이 이론을 피부톤에 접목시키는 저서를 내놓았고 진단하는데 쓰이는 진단 천은 개수와 색이 한정적이다. 오프라인 진단을 할 때도 주의해야 할 점이 있다. 진단하는데 쓰이는 진단 천은 개수와 색이 한정적이다`,
        img:'',board:'1',user:'song',create_at:'2022-07-01'},
        {id:2, title:'사계절 분류', content:'사계절 분류는 서양에서 만들어졌기 때문에 눈동자와 머리색이 제각각 다른 백인을 기준으로 한다. 그래서 한국인에게는 안 맞을 수 있다. 색을 인지하는 것도',
        img:'', board:'1',user:'lee',create_at:'2022-06-25'},
        {id:3, title:'퍼스널 컬러 진단', content:'퍼스널 컬러 진단은 개인에게 잘 어울리는 색을 찾는 방법이며 오프라인 진단과 온라인 진단이 있지만 온라인 진단은 사람의 다양한 특성을 반영하지 못하고',
        img:'', board:'2',user:'bae',create_at:'2022-05-14'},
        {id:4, title:'사계절', content:'MZ세대의 스몰 토크는 MBTI로 시작해 퍼스널 컬러로 이어지는데요. 이 두 가지 주제와 함께라면 편하게 대화가 이어지기도 하고, 공통점을 발견하며 쉽게 친근감을 느낄 수 있습니다.',
        img:'', board:'3',user:'park',create_at:'2022-11-01'},
        {id:5, title:'후기', content:'여름 쿨톤은 푸른 기 있는 밝은 색이 주를 이루며 전체적으로 산뜻한 분위기가 떠오르는데요.',
        img:'', board:'3',user:'kwon',create_at:'2022-03-01'},
        {id:6, title:'화장품', content:'여름쿨 라이트 : 비비드한 색감의 트루톤에 흰색이 섞인 톤이에요.',
        img:'', board:'1',user:'kim',create_at:'2022-05-12'},
        {id:7, title:'거울 진단', content:'가을 웜 뮤트 : 트루톤에 회색빛이 더해진 컬러로 조금 더 부드럽고 채도가 낮아요.',
        img:'', board:'0',user:'son',create_at:'2022-04-21'},
        {id:8, title:'톤 컬러', content:'겨울쿨 브라이트 : 선명하고 시원한 컬러에 봄 웜톤의 화사함을 더한 겨울쿨 브라이트, 밝고 생생한 컬러가 어울리고 비비드 한 원색이나 네온컬러처럼 인공적으로 느껴지는 컬러가 특징입니다.',
        img:'', board:'2',user:'park',create_at:'2022-12-25'},

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

// access_token 
let token = createSlice({
    name: 'token',
    initialState:{
        authenticated:false,
        accessToken:null,
        expireTime:null
    },
    reducers:{
        setAuthToken(state,action){
            state.authenticated=true;
            state.accessToken=action.payload;
            state.expireTime= new Date().getTime() + 600*1000; //1 minutes
        },
        deleteAuthToken(state,action){
            state.authenticated=false;
            state.accessToken=null;
            state.expireTime=null;
        }
    }
})


export let {addArticle,editArticle,deleteArticle} = article.actions
export let {setAuthToken, deleteAuthToken} = token.actions

export default configureStore({
    reducer: {
        articleCategory : articleCategory.reducer,
        article : article.reducer,
        token : token.reducer
    }
})