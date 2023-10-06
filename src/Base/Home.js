import React from "react";
import Base from "./Base";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Base>
      <div className="container-fluid home py-5">
        <div className="col">
          <div className="home-data">
            <h1 className="home-text">OUR SCHOOL STUDENT</h1>
            
            <button className="btn btn-warning"><Link className="nav-link" to="/student">
                    Student
                  </Link></button>
          </div>
        </div>
        <div className="col">
          <div className="home-data">
            <h1 className="home-text">OUR SCHOOL TEACHER</h1>
            
            <button className="btn btn-success"><Link className="nav-link" to="/teacher">
                    Teacher
                  </Link></button>
          </div>
        </div>
      </div>
    </Base>
  );
}
