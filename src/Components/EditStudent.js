import React, { useContext } from "react";
import Base from "../Base/Base";
import { useParams } from "react-router-dom";
import { StudentContext } from "../App";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function EditStudent(){
    const validationSchema = Yup.object().shape({
        id: Yup.string().required('ID is required'),
        name: Yup.string().required('Name is required'),
        classes: Yup.string().required('Class is required'),
        address: Yup.string().required('Address is required'),
      });


        const { studentDatas, setStudentDatas, navigate } = useContext(StudentContext);
        const { id } = useParams();
      
        const data = studentDatas.find((user) => user.id === id);
      
        const initialValues = {
          id: data.id,
          name: data.Name,
          classes: data.class,
          address: data.address,
        };
      
        const handleSubmit = (values) => {
          const alterStudent = {
            id: values.id,
            Name: values.name,
            class: values.classes,
            address: values.address,
          };
      
          const changedataIndex = studentDatas.findIndex((user) => user.id === id);
          studentDatas[changedataIndex] = alterStudent;
          setStudentDatas([...studentDatas]);
          navigate('/student');
        };
      
        return (
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
                    Edit Student
                  </button>
                </div>
              </Form>
            </Formik>
          </Base>
        );
      }
      

