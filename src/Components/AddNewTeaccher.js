import React, { useContext } from "react";
import Base from "../Base/Base";
import { StudentContext } from "../App";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function AddNewTeacher(){
    const {teacherdatas, setTeacherdatas,navigate} = useContext(StudentContext)

    // const [id,setId] = useState("")
    // const [name,setName] = useState("")
    // const [classes,setClasses] = useState("")
    // const [address,setAddress] = useState("")
    
    // function addNewTeacher(){
    //     const addTeacher = {
    //         id:id,
    //         Name:name,
    //         class:classes,
    //         address:address
    //     }
    //     // console.log(addTeacher)
        
    // }

    const validationSchema = Yup.object().shape({
        id: Yup.string().required('ID is required'),
        name: Yup.string().required('Name is required'),
        classes: Yup.string().required('Class is required'),
        address: Yup.string().required('Address is required'),
      });

    const initialValues = {
        id: '',
        name: '',
        classes: '',
        address: '',
      };
      const handleSubmit = (values) => {
        const addTeacher = {
          id: values.id,
          Name: values.name,
          class: values.classes,
          address: values.address,
        };
    
        setTeacherdatas([...teacherdatas,addTeacher])
        navigate('/teacher')
      };

    return (
        // <Base>
        //     <div className="input my-5">
        //         <input className="form-control m-2" placeholder="ID" 
        //         onChange={(e) => setId(e.target.value)}/>
        //         <input className="form-control m-2" placeholder="Name" 
        //         onChange={(e) => setName(e.target.value)}/>
        //         <input className="form-control m-2" placeholder="Class" 
        //         onChange={(e) => setClasses(e.target.value)}/>
        //         <input className="form-control m-2" placeholder="Address" 
        //         onChange={(e) => setAddress(e.target.value)}/>
        //         <button className="btn btn-primary" onClick={()=>addNewTeacher()}>Add Teacher</button>
        //     </div>
        // </Base>
        <Base>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="input my-5">
            <Field
              type="text"
              name="id"
              className="form-control m-2"
              placeholder="ID"
            />
            <ErrorMessage name="id" component="div" className="error" />

            <Field
              type="text"
              name="name"
              className="form-control m-2"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" className="error" />

            <Field
              type="text"
              name="classes"
              className="form-control m-2"
              placeholder="Class"
            />
            <ErrorMessage name="classes" component="div" className="error" />

            <Field
              type="text"
              name="address"
              className="form-control m-2"
              placeholder="Address"
            />
            <ErrorMessage name="address" component="div" className="error" />

            <button type="submit" className="btn btn-primary">
              Add Teacher
            </button>
          </div>
        </Form>
      </Formik>
    </Base>
    )
}