import {react, useState} from 'react'
import {Route,Routes,Link,useLocation} from 'react-router-dom'
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

function App() {
  let [category,setCategory] =  useState(-1);
  

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/board" element={<BoardMain category={category} setCategory={setCategory} ></BoardMain>}></Route>
        <Route path="/detail/:id" element={<ArticleDetail setCategory={setCategory}></ArticleDetail>}></Route>
        <Route path="/post" element={<ArticlePost></ArticlePost>}></Route>
        <Route path="/edit/:id" element={<ArticleEdit></ArticleEdit>}></Route>
        <Route path="/ImgUpload" element={<ImgUpload></ImgUpload>}></Route>
        <Route path="/Result/:PersonalColor" element={<Result></Result>}>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
