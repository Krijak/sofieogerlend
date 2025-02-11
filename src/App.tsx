
import './App.css'

import { Route, Routes} from 'react-router';
import Fredag from './pages/Fredag';
import Main from './pages/Main';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="fredag" element={<Fredag />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
