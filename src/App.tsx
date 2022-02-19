import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Todo from './pages/Todo';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
