import React from "react";
import "./Applications/Comm_section_folder/Comm_section.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./Applications/Pages/Home";
import Contact from "./Applications/Pages/Contact";
import MyToDoList from "./Applications/Pages/MyToDoList";
import Error from "./Applications/Pages/Error";

const App = () => {
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

export default App;