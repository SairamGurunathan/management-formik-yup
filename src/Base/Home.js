import React from "react";
import Base from "./Base";

export default function Home() {
  return (
    <Base>
      <div className="container-fluid home py-5">
        <div className="col">
          <div className="home-data">
            <h1 className="home-text">OUR SCHOOL STUDENT</h1>
            
            <button className="btn btn-warning"><a className="nav-link" href="/student">
                    Student
                  </a></button>
          </div>
        </div>
        <div className="col">
          <div className="home-data">
            <h1 className="home-text">OUR SCHOOL TEACHER</h1>
            
            <button className="btn btn-success"><a className="nav-link" href="/teacher">
                    Teacher
                  </a></button>
          </div>
        </div>
      </div>
    </Base>
  );
}
