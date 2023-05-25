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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";


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
            <Route exact path="/login" element={
                <AppWrapper>
                    <Navbar/>
                    <section className="App-header">
                        <Login/>
                    </section>
                </AppWrapper>
            }/>
            <Route exact path="/register" element={
                <AppWrapper>
                    <Navbar/>
                    <section className="App-header">
                        <Register/>
                    </section>
                </AppWrapper>
            }/>
            <Route exact path="/profile" element={
            <AppWrapper>
                <Navbar/>
                <section className="App-header">
                    <Profile/>
                </section>
            </AppWrapper>
            }/>
        </Routes>
    </Router>
  );
}

export default App;
