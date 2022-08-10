import { react, useState, Suspense, useEffect } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import ArticlePost from './components/board/ArticlePost.js'
import ArticleEdit from './components/board/ArticleEdit.js'
import ArticleDetail from './components/board/ArticleDetail'
import ArticleCategory from './components/board/ArticleCategory.js'
import Article from './components/board/Article.js'
import Main from './Main/Main'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import SignUp from './components/user/SignUp'
import SignIn from './components/user/SignIn'
import ImgUpload from './Test/ImgUpload'
import Result from './Test/Result'
import Loading from './components/loading/Loading'
import PrivateRoute from './routes/PrivateRoute.js'
import axios from "axios"

function App() {
  let [category, setCategory] = useState(-1); // -1:all, 0:spring-warm, 1:summer-cool, 2:fall-warm, 3:winter-cool 
                                
 
  return (
    <div className="App">
      <Header></Header>
      
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          
          <Route path="/board" element={<ArticleCategory category={category} setCategory={setCategory} />}> {/*nested route 사용*/}
            <Route path="list" element={<Article category={category}/>}></Route>  {/*/board/list로 접속하면 카테고리와 게시판 목록을 보여줌*/}
            <Route path="detail/:id" element={<ArticleDetail setCategory={setCategory}/>}></Route> {/*/board/detail/:id로 접속하면 카테고리와 상세 게시판을 보여줌*/}
          </Route>
          
          {/* <Route element={<PrivateRoute></PrivateRoute>}> */} {/*로그인이 된 경우만 접근할 수 있는 Route*/}
            <Route path="/post" element={<ArticlePost></ArticlePost>}></Route>
            <Route path="/edit/:id" element={<ArticleEdit></ArticleEdit>}></Route>
            <Route path="/image" element={<ImgUpload></ImgUpload>}></Route>
            <Route path="/Result/:PersonalColor" element={<Result></Result>}></Route>
          {/* </Route> */}
          <Route path='*' element={<div>잘못된 경로입니다:(</div>}></Route>
        </Routes>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
