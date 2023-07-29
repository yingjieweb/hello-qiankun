import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./registerApps";
import "./App.scss";
import qiankun from './assets/qiankun.jpg'

const App: React.FC = () => {
  return (
    <div className="baseContainer">
      <div className="baseNav">
        <BrowserRouter>
          <Link to="/vue2">Vue2</Link>
          <Link to="/vue3">Vue3</Link>
          <Link to="/react">React</Link>
        </BrowserRouter>
      </div>

      {/* 切换导航，将微应用渲染到 container 容器中 */}
      <div id="microContainer">
        <img className="qiankun" src={qiankun} alt="qiankun" />
      </div>
    </div>
  );
};

export default App;
