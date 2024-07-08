import './main.css';
import Main from './pages/Main';
import Heatmap from './pages/Heatmap'
import Charts from './pages/Charts';
import Backend from './pages/Backend';
import DbData from './pages/DbData';
import Embed from './pages/Embed';

import { Route, Routes,BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className='page'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/charts/' element={<Charts/>} />
          <Route path='/heatmap/' element={<Heatmap/>} />
          <Route path='/backend/' element={<Backend/>} />
          <Route path='/dbdata/' element={<DbData/>} />
          <Route path='/embed/' element={<Embed/>} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
