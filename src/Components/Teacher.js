import React, { useContext } from "react";
import Base from "../Base/Base";
import { StudentContext } from "../App";


export default function Teacher() {

  const {teacherdatas, setTeacherdatas, navigate} = useContext(StudentContext)

    const deleteTeach = (id) => {
        const newDatas = teacherdatas.filter((teach)=>(
            teach.id !== id
        ))
        // console.log(newDatas)
        setTeacherdatas(newDatas)
    }

  return (
    <Base>
      <div>
      <button className="btn btn-outline-warning" onClick={()=>navigate("/addteacher")}>Add Teacher</button>
        <table className="table table-primary table-striped-columns">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Class</th>
              <th scope="col">Address</th>
              <th scope="col">Modify</th>
            </tr>
          </thead>
          <tbody>
              {teacherdatas.map((teach,index)=>(
                <tr key={index}>
                <th scope="row">{teach.id}</th>
                <td>{teach.Name}</td>
                <td>{teach.class}</td>
                <td>{teach.address}</td>
                <td>
                    <div className="btn-group">
                <button className="btn btn-secondary" onClick={()=>navigate(`/editteacher/${teach.id}`)}>Edit</button>
                <button className="btn btn-success" onClick={()=>deleteTeach(teach.id)}>Delete</button>
                </div>
                </td>
            </tr>
              ))}
              
          </tbody>
        </table>
      </div>
    </Base>
  );
}
