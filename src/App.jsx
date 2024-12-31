import React from 'react';
import "./index.css";
import Header from './header';
import Body from './body'; 
import useCanvasCursor from './cursor';

const App = () => {
  useCanvasCursor();

  return (
    <div className='App'>
      <canvas id="canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3 }}></canvas>
      <Header />
      <Body />
    </div>
  );
}

export default App;