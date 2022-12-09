import React from "react";



export default function Second(props) {
  console.log(props);
  return (
    <div>
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
            <td>{props.datas2[0].name} </td>
            <td>{props.datas2[0].title}</td>
            <td>{props.datas2[0].age} </td>
          </tr>
          <tr>
            <td>{props.datas2[1].name} </td>
            <td>{props.datas2[1].title}</td>
            <td>{props.datas2[1].age} </td>
          </tr>
          <tr>
            <td>{props.datas2[2].name} </td>
            <td>{props.datas2[2].title}</td>
            <td>{props.datas2[2].age} </td>
          </tr>
          <tr>
            <td>{props.datas2[3].name} </td>
            <td>{props.datas2[3].title}</td>
            <td>{props.datas2[3].age} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
