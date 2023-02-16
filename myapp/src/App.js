import logo from './logo.svg';
import './App.css';
import HTCP from './components/HTMLCSSProjects';
import JTCP from './components/JavaScriptProjects';
import RTCJ from './components/ReactDjango';
import TableStockApp from './StockTable/ApStock';
import Main from './MyNotes/NoteApp';
import { GlobalContextProvider } from './MyNotes/Components/serverdata';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react';


function App() {
  return (
    <div className="App mx-0 mx-md-2 mx-lg-3 mx-xl-5" style={{maxWidth:'100%'}}>
      <Routes>
        <Route path='/' element={
          <React.Fragment>
            <div className='shadow shadow-5' style={{backgroundColor:'rgba(20, 20, 20, 0.5)'}}>
            <div className='text-light fs-2 ps-3 text-start'>HTML, CSS Projects</div>
            </div>
            <HTCP />
            <div className='shadow shadow-5' style={{backgroundColor:'rgba(20, 20, 20, 0.5)'}}>
            <div className='text-light fs-2 ps-3 text-start'>HTML, CSS Projects</div>
            </div>
            <JTCP />
            <div className='shadow shadow-5' style={{backgroundColor:'rgba(20, 20, 20, 0.5)'}}>
            <div className='text-light fs-2 ps-3 text-start'>HTML, CSS Projects</div>
            </div>
            <RTCJ />
          </React.Fragment>
        }></Route>

        <Route path='/note/*' element={
          <GlobalContextProvider>
            <Main />
          </GlobalContextProvider>

        } />
      </Routes>
    </div>
  );
}

export default App;
