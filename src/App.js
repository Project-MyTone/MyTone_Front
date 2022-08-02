import {Route,Routes,Link} from 'react-router-dom'
import ArticlePost from './components/board/ArticlePost.js'
import ArticleEdit from './components/board/ArticleEdit.js'
import BoardMain from './components/board/BoardMain'
import ArticleDetail from './components/board/ArticleDetail'
import Main from './Main/Main'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/board" element={<BoardMain></BoardMain>}></Route>
        <Route path="/detail/:id" element={<ArticleDetail></ArticleDetail>}></Route>
        <Route path="/post" element={<ArticlePost></ArticlePost>}></Route>
        <Route path="/edit/:id" element={<ArticleEdit></ArticleEdit>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
