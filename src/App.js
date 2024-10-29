import React from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './Routes/Home';
import Student from './Routes/Student';
import AddStudent from './Routes/AddStudent';
import EditStudent from './Routes/EditStudent';
import NotFound from './Routes/NotFound';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
// TODO: answer here

const App = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    
    return (
        <>
            {!isHomePage && <NavBar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/student" element={<Student />} />
                <Route path="/add" element={<AddStudent />} />
                <Route path="/student/:id" element={<EditStudent />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {!isHomePage && <Footer />}
        </> // TODO: replace this
    );
};

export default App;
