//4.for ToDoList
import React from "react";
import "./Style.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import MyToDoList from "./Pages/MyToDoList";
import Error from "./Pages/Error";

const Web = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/my-to-do-list" element={<Home />}></Route>
                    <Route path="/my-to-do-list/contact" element={<Contact />}></Route>
                    <Route path="/my-to-do-list/mytodolist" element={<MyToDoList />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </Router>
        </>
    );
};
export default Web;