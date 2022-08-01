import {Route,Routes,Link} from 'react-router-dom'
import Board from './components/board/Board.js'
import BoardPost from './components/board/BoardPost.js'
import EditBoard from './components/board/EditBoard.js'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/board" element={<Board></Board>}></Route>
        <Route path="/post" element={<BoardPost></BoardPost>}></Route>
        <Route path="/edit/:id" element={<EditBoard></EditBoard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
