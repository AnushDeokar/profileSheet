import logo from './logo.svg';
import './App.css';
import {Template1} from "./Templates/Template1/Template1";
import {Template2} from "./Templates/Template2/Template2";
import {Login} from "./Components/Login/Login";

import {Header} from "./Components/Header/Header";
import {Intro} from "./Components/Intro/Intro";
import TemplateCard from "./Components/TemplateCard/TemplateCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <TemplateCard />
      <Login />
      {/* <Template1 /> */}
      {/* <Template2 /> */}
    </div>
  );
}

export default App;
