import Provider from './Context/Provider';
import Login from './pages/Login';
import CreateLogin from './pages/CreateLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CreateOrUpdateUsers from './pages/CreateOrUpdateProducts';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/create" element={ <CreateLogin /> } />
          <Route path="/home" element={ <HomePage /> } />
          <Route path="/create/products" element={ <CreateOrUpdateUsers /> } />
          <Route path="/update/:id" element={ <CreateOrUpdateUsers /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
