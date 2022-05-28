import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Screen/Main'
import ProjectScreen from './Screen/ProjectScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Project' element={<ProjectScreen/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
