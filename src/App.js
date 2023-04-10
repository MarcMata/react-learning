import logo from './logo.svg';
import './Components/css/resets.css';
import './Components/css/Navbar.css';
import './Components/css/App.css';
import {AppWrapper, Container, Row, Column} from "./Components/Layout";
import Welcome from "./Components/Welcome";
import Navbar from "./Components/Navbar";
import styled from "styled-components";


function App() {
  return (
    <AppWrapper>
        <Navbar/>
      <section className="App-header">
        <Welcome/>
      </section>
    </AppWrapper>
  );
}

export default App;
