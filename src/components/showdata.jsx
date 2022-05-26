import { useEffect, useState } from "react";

import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

export const StudentData = () => {

  const [formData, setFormData] = useState([])
  const [data1, setData1] = useState()


  useEffect(() => {

    axios.get("http://localhost:8080/users").then((r) => {
      setFormData(r.data)
      // console.log(r)
    })

  }, [])


  const handleChange = (e) => {

    const { name, value } = e.target;
    setData1({
      ...data1,
      [name]: value,
    })

  }

  const handleSubmit = (data1) => {
    var x = formData.sort(function (a, b) {
      if (data1.type = "desc") {
        return Number(b[data1.branch]) - Number(a[data1.branch])
      }

    })
    setData1(x)

    console.log(data1)
    console.log(x)
  }



  return (
    <div className="rentalContainer">
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            onChange={handleChange}
            value={formData.value}
            name="branch"
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="Department">Department</option>
            <option value="age">Age</option>
            <option value="Salary">Salary</option>

          </select>
        </div>
        <div>
          Order:
          <select
            onChange={handleChange}
            value={formData.value}
            name="type"
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button onClick={() => {
          handleSubmit(data1)
        }} className="sort">sort</button>
      </div>


      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>marital</th>

          </tr>
        </thead>
        <tbody>
          {formData.map((fromData, i) => {


            return (
              <tr key={uuidv4()} className="houseDetails">
                <td>{i + 1}</td>
                <td>{fromData.Name}</td>
                <td>{fromData.age}</td>
                <td>{fromData.Address}</td>
                <td>{fromData.Department}</td>
                <td>{fromData.Salary}</td>
                <td >{fromData.martial ? "Married" : "unmarried"}
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};