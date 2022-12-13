import React, { useState } from "react";
import { cruds } from "../../mock/crud";

function StyledCom() {
  const [data, setData] = useState(cruds);
  const onDelete = (ids) => {
    let result = data.filter((val) => ids !== val.id);
    setData(result);
  };

  return (
    <div>
      <input type="text" placeholder="search" name="" id="" />
      <br />
      <label htmlFor="">Name</label>
      <input placeholder="name" type="text" /> <br />
      <label htmlFor="">Title</label>
      <input placeholder="title" type="text" /> <br />
      <label htmlFor="">Age</label>
      <input placeholder="age" type="text" /> <br />
      <label htmlFor="">Address</label>
      <input placeholder="address" type="text" /> <br />
      <button>Add</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Title</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.title}</td>
              <td>{val.age}</td>
              <td>{val.address}</td>
              <td>
                <button onClick={() => onDelete(val.id)}>delete</button>
                <button>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StyledCom;
