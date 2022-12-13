import React from "react";
import { Route, Switch } from "react-router-dom";
// import Main from "./components/Main";
import img1 from "./assets/img/maqbara.jpg";
import img2 from "./assets/img/masjid.jpg";
import img3 from "./assets/img/minora.jpg";
import img4 from "./assets/img/parij.jpg";
import img5 from "./assets/img/spring.jpg";
import img6 from "./assets/img/tele.jpg";
import Controlled from "./components/Controlled";
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
      <Navbar />
      <Switch>
        <Route path="/controlled" component={Controlled} />
        <Route path="/first" component={First} />
        <Route path="/maps" component={Maps} />
        <Route path="/second" component={Second} />
        <Route path="/styledcom" component={StyledCom} />
        <Route path="/uncontrolled" component={Uncontrolled} />
      </Switch>
    </div>
  );
}
