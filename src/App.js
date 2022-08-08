import { react, useState, Suspense } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import ArticlePost from './components/board/ArticlePost.js'
import ArticleEdit from './components/board/ArticleEdit.js'
import BoardMain from './components/board/BoardMain'
import ArticleDetail from './components/board/ArticleDetail'
import Main from './Main/Main'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import SignUp from './components/user/SignUp'
import SignIn from './components/user/SignIn'
import ImgUpload from './Test/ImgUpload'
import Result from './Test/Result'
import Loading from './components/loading/Loading'
import PrivateRoute from './routes/PrivateRoute.js'
function App() {
  let [category, setCategory] = useState(-1);


  return (
    <div className="App">
      <Header></Header>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/board" element={<BoardMain category={category} setCategory={setCategory} ></BoardMain>}></Route>
          <Route path="/detail/:id" element={<ArticleDetail setCategory={setCategory}></ArticleDetail>}></Route>
          {/* <Route element={<PrivateRoute></PrivateRoute>}> */}
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
