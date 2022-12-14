import React from "react";
import { Route, Routes } from "react-router-dom";

import Controlled from "./components/Controlled";
import Error from "./components/Error";
import First from "./components/First";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";
import Second from "./components/Second";
import State from "./components/State";
import StyledCom from "./components/StyledCom";
import Uncontrolled from "./components/Uncontrolled";

export function App() {
  let data = [
    { name: "Bobur", title: "Dehqon", age: 38 },
    { name: "Ravshan", title: "IT", age: 30 },
    { name: "TEmur", title: "JS", age: 30 },
    { name: "Aslbek", title: "IT", age: 40 },
  ];
  return (
    <div className="wrapper">
      {/* <Navbar /> */}

      <Routes>
        <Route element={<Navbar />}>
          <Route exact path={"/"} element={<Controlled />} />
          <Route path="/controlled" element={<Controlled />} />
          <Route path="/first" element={<First />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/second" element={<Second />} />
          <Route path="/styledcom" element={<StyledCom />} />
          <Route path="/uncontrolled" element={<Uncontrolled />} />
          <Route path={"/*"} element={Error} />
        </Route>
      </Routes>
    </div>
  );
}
