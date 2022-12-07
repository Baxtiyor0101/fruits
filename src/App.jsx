import React from "react";
import Main from "./components/Main";
import img1 from "./assets/img/maqbara.jpg";
import img2 from "./assets/img/masjid.jpg";
import img3 from "./assets/img/minora.jpg";
import img4 from "./assets/img/parij.jpg";
import img5 from "./assets/img/spring.jpg";
import img6 from "./assets/img/tele.jpg";
import First from "./components/First";

export function App() {
  let data = [
    { name: "Bobur", title: "Dehqon", age: 38 },
    { name: "Ravshan", title: "IT", age: 30 },
  ];
  return (
    <div className="wrapper">
      {/* <Main
        arr={[3, 3, 4, 4]}
        image={img1}
        title="orange"
        text="apilsin"
        alt="rasm bor"
        obj={{ key: "vaal" }}
      />
      <Main image={img2} title="limon" text="apilsin" alt="rasm bor" />
      <Main image={img3} title="tarvuz" text="apilsin" alt="rasm bor" />
      <Main image={img4} title="mandarin" text="apilsin" alt="rasm bor" />
      <Main image={img5} title="behi" text="apilsin" alt="rasm bor" />
      <Main image={img6} title="" text="apilsin" alt="rasm bor" />
      <Main image={img6} title="orange" text="apilsin" alt="rasm bor" />
      <Main image={img1} title="orange" text="apilsin" alt="rasm bor" />
      <Main image={img2} title="orange" text="apilsin" alt="rasm bor" />
      <Main image={img3} title="orange" text="apilsin" alt="rasm bor" />
      <Main image={img4} title="orange" text="apilsin" alt="rasm bor" />
      <Main image={img5} title="orange" text="apilsin" alt="rasm bor" /> */}

      <First />
    </div>
  );
}
