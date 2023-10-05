import React, { useContext } from "react";
import Base from "../Base/Base";
import { StudentContext } from "../App";


export default function Student() {
    const {studentDatas,setStudentDatas,navigate} = useContext(StudentContext)

    const deleteStudent = (id)=> {
        const newData = studentDatas.filter((per)=>(
                per.id !== id
        ))
        setStudentDatas(newData)
    }
    
  return (
    <Base>
      <div>
        <button className="btn btn-outline-warning" onClick={()=>navigate("/addstudent")}>Add Student</button>
        <table className="table table-primary table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">class</th>
              <th scope="col">address</th>
              <th scope="col">Modify</th>
            </tr>
          </thead>
          <tbody>
                {studentDatas.map((stu,index)=>(
                    <tr key={index}>
                    <th scope="row">{stu.id}</th>
                    <td>{stu.Name}</td>
                    <td>{stu.class}</td>
                    <td>{stu.address}</td>
                    <td><div className="btn-group">
                    <button className="btn btn-secondary" onClick={() => navigate(`/editstudent/${stu.id}`)}>Edit</button>
                    <button className="btn btn-success" onClick={() => deleteStudent(stu.id)}>Delete</button></div>
                    </td>
                    </tr>
                ))} 
          </tbody>
        </table>
      </div>
    </Base>
  );
}
