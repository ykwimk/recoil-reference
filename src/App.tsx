import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Todo from './pages/Todo';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
