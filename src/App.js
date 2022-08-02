import {Route,Routes,Link} from 'react-router-dom'
import ArticlePost from './components/board/ArticlePost.js'
import ArticleEdit from './components/board/ArticleEdit.js'
import BoardMain from './components/board/BoardMain'
import ArticleDetail from './components/board/ArticleDetail'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>메인페이지</div>}></Route>
        <Route path="/board" element={<BoardMain></BoardMain>}></Route>
        <Route path="/detail/:id" element={<ArticleDetail></ArticleDetail>}></Route>
        <Route path="/post" element={<ArticlePost></ArticlePost>}></Route>
        <Route path="/edit/:id" element={<ArticleEdit></ArticleEdit>}></Route>
      </Routes>
    </div>
  );
}

export default App;
