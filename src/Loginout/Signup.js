import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import bg2 from "../images/bb.jpg";
import { useState } from "react";
import axios from "axios";
import {Field, reduxForm, reset} from "redux-form";
import validate from "./Validate";


const renderField =({
  input,
  label,
  type,
  name,
  meta:{touched, error, warning},
})=> (
  <div>
  <div className="fields-signup">
     <input  {...input} name={name} placeholder={label} type={type} />
  </div>
 
  {touched &&
      ((error && <span className='error'>{error}</span>) ||
      (warning && <span>{warning}</span>)) 
  }
  </div>
);
function Signup(props) {
  const [value, setValue] = useState({});
  
  const [modelState, setModelState] = useState({
    loading:false,
    error:null,
  })
  
  var data = {
    firstname: value.firstname,
    lastname: value.lastname,
    email: value.email,
    phonenumber: value.phonenumber,
    password: value.password,
    confirmpassword: value.confirmpassword,
  };

  const {handleSubmit,reset} = props;
    
  const onSubmit = async (e) =>{

    setModelState({
      ...modelState,
      loading:true,
    });
    try{
      const response = await axios.post("http://localhost:8000/auth", data);
      if(response.data.sucess){
         setModelState({
            ...modelState,
            loading:false,
         });
         reset();
      }
      alert('Account created sucessfull')
    }catch(err){
      setModelState({
        ...modelState,
        loading:false,
        error:err.response
        ? err.response.data.message
        :"Unable to signup at this moment. Please try again",
      });
    }
  };

  return (
    <div className="bg-img-container">
      <img className="login-background" src={bg2} alt=""></img>
      <div className="login-container">
        <div className="login-left">
          <h1 className="login-heading">YOUR TO-DO</h1>
          <h1 className="login-text">Wellcome!</h1>
          <h1 className="login-text2">
            Register to access all the features of our service.
            <br />
            <br /> <br /> <br/>
            Manager your works in one place. It's safe and free to use.
          </h1>
          <div className="login-right-btn-container">
            <Button className="login-right-btn" href="./about">Learn More</Button>
          </div>
        </div>
        <div className="signup-right">
          <div className="signup-heading-left">
            <a className="signingin-heading" href="/">SIGN IN</a>
          </div>
          <div className="heading-mid">
            <h1 className="vr-line">|</h1>
          </div>
          <div className="heading-right">
            <a className="signup-heading" href="./signin">SIGN UP</a>
          </div>
          </div>
          <div className="signup-form">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-3">
               <Form.Group as={Col} className="signup-fn">
               
                 <label className="signup-fn-text" htmlFor="email">First Name</label>
                 <Field name="firstname" 
                 type="text" 
                 className="form-control" 
                 component={renderField}
                 label="First Name"
                 onChange={(e) => setValue({ ...value, firstname: e.target.value })} 
                 />
               </Form.Group>
               <Form.Group as={Col} className="signup-ln">
                 <label className="signup-ln-text" htmlFor='email'>Last Name</label>
                 <Field
                 name='lastname'
                 type='text'
                 className='form-control'
                 component={renderField}
                 label='Last Name'
                 onChange={(e) => setValue({ ...value, lastname: e.target.value })} 
                 />
               </Form.Group>
               <Form.Group className="signup-email">
                 <label className="signup-email-text" htmlFor='email'>Email</label>
                 <Field
                 name='email'
                 type='email'
                 className='semail-field'
                 component={renderField}
                 label='example@gmail.com'
                 onChange={(e) => setValue({ ...value, email: e.target.value })} 
                 />
               </Form.Group>
               <Form.Group className="signup-pn">
                 <label className="signup-pn-text" htmlFor='email'>Phone Number</label>
                 <Field
                 name='phonenumber'
                 type='text'
                 className='form-control'
                 component={renderField}
                 label='Phone Number'
                 onChange={(e) => setValue({ ...value, phonenumber: e.target.value })} 
                 />
               </Form.Group>
               <Form.Group className="mb-3" as={Col} className="signup-ps">
                 <label  className="signup-ps-text" htmlFor='password'>Password</label>
                 <Field
                 name='password'
                 type='password'
                 className='form-control'
                 component={renderField}
                 label='Password'
                 onChange={(e) => setValue({ ...value, password: e.target.value })} 
                 />
               </Form.Group>
               <Form.Group className="mb-3" as={Col} className="signup-cps">
                 <label  className="signup-cps-text" htmlFor='password'>Confirm Password</label>
                 <Field
                 name='confirmpassword'
                 type='password'
                 className='form-control'
                 component={renderField}
                 label='Confirm Password'
                 onChange={(e) => setValue({ ...value, confirmpassword: e.target.value })} 
                 />
                
               </Form.Group>
               </Row>
               <div className="signup-btn-container">
               <Button className="signup-btn" type='submit'>
                 Create
               </Button>
               </div>
            </form>
          
        </div>
      </div>
    </div>
  );
}

export default reduxForm({
  validate: validate,
  form: "SIGN_FORM"
}) (Signup);
