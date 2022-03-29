import React from 'react';
import bg2 from '../images/bb.jpg';
import { Row } from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import {Field, reduxForm, reset} from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import validate from './Validate';
import { login,loginOpen, loginSucess, signupStart } from '../store/action/profileAction';
import { Redirect } from 'react-router-dom';


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

function Login(props){
  const [value,setValue] = useState("");

  const [modelState, setModelState] = useState({
    loading:false,
    error:null,
  });

  const { error, isLoggedIn, modelOpen} = useSelector(
    (state)=> state.profile,
  );

  
  
  var user ={
        email:value.email,
        password:value.password

  }
  console.log(user)

  const dispatch = useDispatch();
  const {handleSubmit,reset} = props;

  const onSubmit = async (e) =>{

      setModelState({
        ...modelState,
        loading:true,
      });
      try{
        console.log("aaaaaaaa")
        const response = await login(e);
        if(response.data.sucess){
          dispatch(loginSucess(response.data));
           setModelState({
              ...modelState,
              loading:false,
           });
           dispatch(loginOpen());
        }
        console.log("login sucessfull");
        
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
    
    return(
        <div className="bg-img-container">
            <img className="login-background" src = {bg2} alt=""></img>
        <div className="login-container">
            <div className="login-left">
                <h1 className="login-heading">YOUR TO-DO</h1>
                <h1 className="login-text">DON'T HAVE AN ACCOUNT?</h1>
                <h1 className="login-text2">Register to access all the features of our service.<br/><br/> <br/><br/>
                Manager your works in one place. It's safe and free to use.</h1>
                <div className="login-right-btn-container">
                    <Button className="login-right-btn" href="./about" >Learn More </Button>
                </div>
            
            </div>
            <div className="login-right">
            <div className="heading-left"> <a className="signin-heading" href="/">SIGN IN</a></div>
            <div className="heading-mid"><h1 className="vr-line">|</h1></div> 
            <div className="heading-right"><a className="signup-heading" href="./signup">SIGN UP</a></div>
            </div>
            <div className="login-form">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-3">
             
               <Form.Group className="login-email">
                 <label className="login-email-text" htmlFor='email'>Email</label>
                 <Field
                 name='email'
                 type='email'
                 className='semail-field'
                 component={renderField}
                 label='example@gmail.com'
                 onChange={(e) => setValue({ ...value, email: e.target.value })} 
                 />
               </Form.Group>
               <Form.Group className="login-password">
                 <label className="login-pass-text" htmlFor='email'>Password</label>
                 <Field
                 name='password'
                 type='password'
                 className='form-control'
                 component={renderField}
                 label='Password'
                 onChange={(e) => setValue({ ...value, password: e.target.value })} 
                 />
               </Form.Group>
               
               <div className="login-btn-container">
               <Button className="login-btn" type='submit'>
                 Login
               </Button>
               </div>
               </Row>
            </form>
                </div>
                           
            
            
        </div>
        </div>
    )
}

export default reduxForm({
    validate: validate,
    form: "LOGIN_FORM"
  }) (Login);