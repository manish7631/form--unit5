import { useState } from "react"

export const Form = () => {
    const [formData, setFormData] = useState({
         Name:"",
         age:"",
         Address:"",
         Department:"",
         Salary:"",
         marital:"",
    })

    const handleChange = (e) => {
       const {id, value} = e.target; 
        setFormData({
            ...formData,
            [id]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/users", {
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        console.log(formData)
    }

    return (

        

        <form onSubmit={handleSubmit}>
             <h1>Fill up the form</h1>
            <label>name</label>
            <input onChange={handleChange} 
         
            type="text"  placeholder="Enter Username" id="Name"/>      <br />
            <label>age</label>
            <input  onChange={handleChange}
        
           type="numbwe"  placeholder="Enter age" id="age"/>
                <br />
            <label>address</label>
        <input onChange={handleChange} id="Address"   type="text"   />
        <br />
<label>Department</label>
        <select
           onChange={handleChange}
            value={formData.value}  
            id="Department"
        
          >
            <option value="">...</option>
            <option value="sports">sports</option>
            <option value="science">science</option>
            <option value="computer">computer</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
          <br />
          <label>Salary</label>
        <input onChange={handleChange} id="Salary"   type="number"   />
        <br />
        <label>unmarried</label>
        <input onChange={handleChange} id = "marital" checked={formData.unmarried} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input onChange={handleChange} id =  "marital" checked={formData.married} type="checkbox" className="married" />
        <br />
          <input type="submit"  value="submit"/>  

        </form>
    )
}