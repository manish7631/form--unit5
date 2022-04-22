import { useEffect, useState } from "react";

 
import { v4 as uuidv4 } from 'uuid';

export const  StudentData = () => {

    const [formData,setFormData] = useState([])
 

    useEffect(() => {
        getData()

        
    }, []);

    const getData = async () => {
        const data = await fetch("http://localhost:8080/users").then((d) => d.json())

        setFormData(data)
    }
 
  
    return (
      <div className="rentalContainer">
       
         
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
            {formData.map((fromData,i) => {
           
              
              return (
                <tr key={uuidv4()}   className="houseDetails">
                   <td>{i+1}</td> 
                  <td>{fromData.Name}</td>
                    <td>{fromData.age}</td>
                    <td>{fromData.Address}</td>
                 <td>{fromData.Department}</td>
                  <td>{fromData.Salary}</td>
                <td >{fromData.martial?"Married":"unmarried"}
                  </td>
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };