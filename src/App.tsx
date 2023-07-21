import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './registerApps'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/vue2">Vue2</Link>
        <Link to="/vue3">Vue3</Link>
        <Link to="/react">React</Link>
      </BrowserRouter>

      {/* 切换导航，将微应用渲染到 container 容器中 */}
      <div id="container" style={{
        border: '1px solid red',
        height: '100vh',
        width: '100vw'
      }}></div>
    </>
  );
};

export default App;
