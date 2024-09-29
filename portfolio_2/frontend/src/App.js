import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login.js'
import Signup from './Signup'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;