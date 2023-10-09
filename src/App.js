import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Room from './pages/Room';
import Main from './pages/Main';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/room/:id' element={<Room/>}/>
        <Route exact path='/' element={<Main/>}/>
        <Route path ='*' element={<NotFound404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
