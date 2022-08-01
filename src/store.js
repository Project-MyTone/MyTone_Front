import {configureStore,createSlice} from "@reduxjs/toolkit";

let board = createSlice({
    name : 'board',
    initialState : [{id:0, title:'7월17일', content:'오늘 너무 행복한 하루였다. 친구들을 만나 여행을 했다.'}, 
    {id:1, title:'9월 24일', content:'가족 여행을 다녀왔다.'}],
    reducers :{
        addBoard(state,action){
            let tmp=action.payload;
            tmp.id = state.at(-1).id+1;
            state.push(tmp)
        },
        editBoard(state,action){
            let finded = state.find((e)=>e.id==action.payload.id);
            finded.title = action.payload.title;
            finded.content = action.payload.content;
        },
        deleteBoard(state,action){
            let findedIndex = state.findIndex((e)=>e.id==action.payload);
            state.splice(findedIndex,1);
        }
    }
})


export let {addBoard,editBoard,deleteBoard} = board.actions

export default configureStore({
    reducer: {
        board : board.reducer
    }
})