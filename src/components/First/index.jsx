import React from "react";
import Second from "../Second";

function First({ datas: [bir, ikki, uch, tort], head, children }) {
  // console.log(datas[0]);
  console.log(bir);
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>name</th>
            <th>title</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{bir.name} </td>
            <td>{bir.title}</td>
            <td>{bir.age} </td>
          </tr>
          <tr>
            <td>{ikki.name} </td>
            <td>{ikki.title}</td>
            <td>{ikki.age} </td>
          </tr>
          <tr>
            <td>{uch.name} </td>
            <td>{uch.title}</td>
            <td>{uch.age} </td>
          </tr>
          <tr>
            <td>{tort.name} </td>
            <td>{tort.title}</td>
            <td>{tort.age} </td>
          </tr>
        </tbody>
      </table>
      <Second datas2={[bir, ikki, uch, tort]} a={[3, 3, 3]} />
      <div>{children}</div>
    </>
  );
}

export default First;
