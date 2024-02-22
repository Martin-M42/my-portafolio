import './App.css';
import { Menuheader } from './components/menuheader';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Contentpage } from './page/contentpage';

function App() {

  const [imgflag, setImgflag] = useState(false);
  const [titleflag, setTitleflag] = useState(false);
  const [contentflag, setContentflag] = useState(false);
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setImgflag(true);
    }, 2000);
    const timeout2 = setTimeout(() => {
      setTitleflag(true);
    }, 2500);

    const timeout3 = setTimeout(() => {
      setContentflag(true);
    }, 4000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className="App" lang='es'>
      <Menuheader />
      <div id='pssection' className='pusher'> </div>
        <div id='profpic-container'>
        <CSSTransition in={imgflag} timeout={2000} classNames="profpic">
        { imgflag === true ? <img src='/fotoperfil.jpg' alt='yo' className='profilepicture' /> : <p></p>}
        </CSSTransition>
        </div>
        <div id='titlenamecontainer'>
        <CSSTransition in={titleflag} timeout={2000} classNames="titlein">
          {titleflag === true ? (<div><div style={{display: "flex", flexDirection: "row"}}><p className='picos'>{"< "}</p><p id='myname'>{" MARTIN GUEVARA "}</p><p className='picos'>{" />"}</p></div><p id='fsdeveloper'>FullStack Developer</p></div>) : <p></p>}
          </CSSTransition>
        </div>
          <CSSTransition in={contentflag} timeout={3000} classNames="contentin"> 
      {contentflag === true ? <Contentpage /> : <p></p>}
      </CSSTransition>
      
      {/**/}
      
    </div>
  );
}

export default App;
