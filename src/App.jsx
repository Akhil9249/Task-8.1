import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Login from "./pages/Login";
import Header from "./componets/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import ProtectedRoute from "./componets/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const {logIn , handleChange ,auth} = useAuth()

  console.log(auth,"===auth");
    return (
        <div className="App-main-container bg-black/100 bg-cover bg-no-repeat w-full " style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllfGVufDB8fDB8fHww")', backgroundSize: 'cover', backgroundPosition: 'center', height: "auto "}}>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />

              <Route element={<ProtectedRoute/>}> 
                <Route path="/home" element={<Home/>} />
              </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
