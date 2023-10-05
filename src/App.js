import './App.css';
import AddNewStudent from './Components/AddNewStudent';
import Student from './Components/Student';
import { Route, Routes, useNavigate } from "react-router-dom";
import { studentdata } from "./Data/StudentData";
import { teacherData } from './Data/TeacherData';
import { createContext, useState } from 'react';
import EditStudent from './Components/EditStudent';
import Teacher from './Components/Teacher';
import AddNewTeacher from './Components/AddNewTeaccher';
import EditTeacher from './Components/EditTeacher';
import Home from './Base/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


export const StudentContext = createContext();


function App() {
  const [studentDatas, setStudentDatas] = useState(studentdata);
  const navigate = useNavigate();
  const [teacherdatas, setTeacherdatas] = useState(teacherData);

  

  return (
    <div className="App">
      <StudentContext.Provider value={{studentDatas,setStudentDatas,teacherdatas,setTeacherdatas,navigate}}> 
      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route path='/student' element={<Student/>}>
          
        </Route>
        <Route path='/addstudent' element={<AddNewStudent/>}>
          
        </Route>
        <Route path='/editstudent/:id' element={ <EditStudent/>}>
         
        </Route>
        <Route path='/teacher' element={<Teacher/>}>
          
        </Route>

        <Route path='/addteacher' element={<AddNewTeacher/>}>
          
          </Route>

          <Route path='/editteacher/:id' element={<EditTeacher/>}>
          
          </Route>
      </Routes>
      </StudentContext.Provider>
    </div>
  );
}

export default App;