import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const isLogin = window.location.pathname.includes('login');

  return (
    <>
      <BrowserRouter>
        {!isLogin && <Navbar />}
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
};

export default App;
