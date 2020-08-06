import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"
import TextError from './TextError'



const initialValues={
    name:"",
    email:"",
    channel:"",
    comments:"",
    social:{
        facebook:"",
        twitter:""
    }
}

const onSubmit =values=>{
    console.log("Form is submitted",values)
}


const validationSchema=Yup.object({
    name:Yup.string().required("Required"),
    email:Yup.string().email("Invalid Email").required("Required"),
    channel:Yup.string().required("Required")
})


export const YoutubeForm=()=> {

   
    
    
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema}
        onSubmit={onSubmit}>
           <Form>
      <div className="form-control">
      <label htmlFor="name">Name:</label>
      <Field type="text" id="name" name="name" />
       <ErrorMessage  name="name" component={TextError}/>
        </div>

      <div className="form-control">
      <label htmlFor="email">Email:</label>
      <Field type="email" id="email" name="email" />
         <ErrorMessage name="email" component={TextError}/>
         </div>

         <div className="form-control">
      <label htmlFor="channel">Channel:</label>
      <Field type="text" id="channel" name="channel"  />
        <ErrorMessage name="channel" component={TextError}/>
        </div>

        <div className="form-control">
            <label htmlFor="comment">Comment:</label>
            <Field as="textarea" type="text" name="comment" id="comment"/>
            <ErrorMessage name="textarea" component={TextError}/>
        </div>
        <div className="form-control">
            <label htmlFor="facebook">Facebook:</label>
            <Field name="social.facebook" type="text"/>
        </div>
        <div className="form-control">
            <label htmlFor="twitter">Twitter:</label>
            <Field name="social.twitter" type="text"/>
        </div>
         <button type="submit">Submit</button>
    </Form>  
   
        </Formik>
    )
}
