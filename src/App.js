import logo from './logo.svg';
import './Components/css/resets.css';
import './Components/css/Navbar.css';
import './Components/css/App.css';
import {AppWrapper, Container, Row, Column} from "./Components/Layout/";
import Welcome from "./pages/Welcome";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={
                <AppWrapper>
                    <Navbar/>
                    <section className="App-header">
                        <Welcome/>
                    </section>
                </AppWrapper>
            }/>
            <Route exact path="/home" element={
                <AppWrapper>
                    <Navbar/>
                    <section className="App-header">
                        <Home/>
                    </section>
                </AppWrapper>
            }/>
            <Route exact path="/about" element={
                <AppWrapper>
                    <Navbar/>
                    <section className="App-header">
                        <About/>
                    </section>
                </AppWrapper>
            }/>
        </Routes>
    </Router>
  );
}

export default App;
