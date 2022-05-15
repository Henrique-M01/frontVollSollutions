import Provider from './Context/Provider';
import Login from './pages/Login';
import CreateLogin from './pages/CreateLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/create" element={ <CreateLogin /> } />
          <Route path="/home" element={ <HomePage /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
